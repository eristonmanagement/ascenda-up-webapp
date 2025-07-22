const { Telegraf } = require("telegraf");
const fetch = require("node-fetch");

// Seu token do Bot do Telegram
const bot = new Telegraf(process.env.BOT_TOKEN);

// Comando simples de boas-vindas
bot.start((ctx) => ctx.reply("Olá, Sou o Ascenda Up, seu mentor no Telegram. Vou te ajudar a dar um Up na carreira!"));

// Reencaminhar mensagens para a API do DocsBot
bot.on("text", async (ctx) => {
  try {
    const userMsg = ctx.message.text;

    const response = await fetch("https://app.docsbot.ai/api/ask/YOUR_BOT_ID/YOUR_DOC_ID", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.DOCSBOT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMsg,
        chatId: String(ctx.chat.id),
      }),
    });

    const data = await response.json();
    ctx.reply(data.answer || "Não consegui encontrar uma resposta no momento.");
  } catch (err) {
    console.error(err);
    ctx.reply("Ocorreu um erro. Tente novamente.");
  }
});

bot.launch();
