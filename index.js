const { Telegraf } = require("telegraf");
const fetch = require("node-fetch");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

app.use(express.json());

// Mensagem de boas-vindas
bot.start((ctx) =>
  ctx.reply("Olá, Sou o Ascenda Up, seu mentor no Telegram. Vou te ajudar a dar um Up na carreira!")
);

// Encaminhar mensagens para o DocsBot
bot.on("text", async (ctx) => {
  const userMsg = ctx.message.text;

  try {
    const response = await fetch(
      "https://app.docsbot.ai/api/ask/YOUR_BOT_ID/YOUR_DOC_ID",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.DOCSBOT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsg,
          chatId: String(ctx.chat.id),
        }),
      }
    );

    const data = await response.json();
    ctx.reply(data.answer || "Não encontrei resposta no momento.");
  } catch (err) {
    console.error(err);
    ctx.reply("Ocorreu um erro. Tente novamente.");
  }
});

// Webhook e porta
app.use(bot.webhookCallback("/bot"));
bot.telegram.setWebhook(`${process.env.RENDER_EXTERNAL_URL}/bot`);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor do Ascenda Mentor ativo na porta ${PORT}`);
});
