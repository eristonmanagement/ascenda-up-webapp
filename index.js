const { Telegraf } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

app.use(express.json());

// Mensagem de boas-vindas
bot.start((ctx) =>
  ctx.reply("Olá, sou o Ascenda Up, seu mentor no Telegram. Vou te ajudar a dar um Up na carreira!")
);

// Encaminhar mensagens para o DocsBot
bot.on("text", async (ctx) => {
  const userMsg = ctx.message.text;

  try {
    const response = await fetch(
      `https://api.docsbot.ai/api/v1/chat/${process.env.DOCSBOT_BOT_ID}`,
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro na resposta do DocsBot:", response.status, errorText);
      return ctx.reply("Não consegui obter resposta do mentor agora. Tente novamente mais tarde.");
    }

    const data = await response.json();
    ctx.reply(data.answer || "Não consegui encontrar uma resposta no momento.");
  } catch (err) {
    console.error("Erro ao se conectar com o DocsBot:", err);
    ctx.reply("Ocorreu um erro técnico. Tente novamente.");
  }
});

// Webhook e porta
app.use(bot.webhookCallback("/bot"));
bot.telegram.setWebhook(`${process.env.RENDER_EXTERNAL_URL}/bot`);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor do Ascenda Mentor ativo na porta ${PORT}`);
});
