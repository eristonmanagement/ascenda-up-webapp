const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const Stripe = require("stripe");
require("dotenv").config();
const serviceAccount = require("./serviceAccountKey.json");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = getFirestore();

async function verificarAssinaturas() {
  const usuarios = await db.collection("usuarios").get();

  for (const doc of usuarios.docs) {
    const dados = doc.data();
    const subId = dados.subscriptionId;
    if (!subId) continue;

    try {
      const sub = await stripe.subscriptions.retrieve(subId);
      const ativo = sub.status === "active";

      await doc.ref.update({ apto: ativo });
      console.log(`✔ ${doc.id}: ${ativo ? "APTO" : "INATIVO"}`);
    } catch (err) {
      console.error(`✖ ${doc.id}: erro ao verificar assinatura`, err.message);
    }
  }
}

verificarAssinaturas();
