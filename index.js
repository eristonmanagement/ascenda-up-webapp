const { Telegraf } = require("telegraf");
// Removido: const fetch = require("node-fetch");
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
