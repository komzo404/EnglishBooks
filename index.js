import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import { strrone } from "./books_str/page1.js";

dotenv.config();

const app = express();

const bot = new TelegramBot(process.env.BOT_TOKEN,{
    polling:true,
});

strrone(bot);


            bot.on("message", (msg) => {
             const chatId = msg.chat.id;
            const text = msg.text;
            
        
     
    
       
    if(text ==="/start"){
         bot.sendMessage(chatId, `🎓 Welcome to the Book Bot!

    📖 Here you can read the book, learn about the author, and get information about the publication.

    Please select a section from the menu below.`, {
          reply_markup: {
            keyboard: [
            ["📚 Book","👨‍🏫 Author"],
            ["ℹ️ About"]
        ],
        resize_keyboard: true
    }

});

    }

    if (text === "📚 Book") {
    bot.sendMessage(chatId, "Выберите раздел:", {
        reply_markup: {
            keyboard: [
                ["1–10"],
                ["11–20"],
                ["21–30"],
                ["31–42"],
                ["⬅️ Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "1–10") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["1", "2", "3"],
                ["4", "5", "6"],
                ["7", "8", "9"],
                ["10", "🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "11–20") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["11", "12", "13"],
                ["14", "15", "16"],
                ["17", "18", "19"],
                ["20", "🖋 Back"]
            ],
            resize_keyboard: true   
        }
    });
}
    if (text === "21–30") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["21", "22", "23"],
                ["24", "25", "26"],
                ["27", "28", "29"],
                ["30", "🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "31–42") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["31", "32", "33"],
                ["34", "35", "36"],
                ["37", "38", "39"],
                ["40", "41", "42"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "⬅️ Back") {
    bot.sendMessage(chatId, "Выберите:", {
        reply_markup: {
            keyboard: [
                ["📚 Book", "👨‍🏫 Author"],
                ["ℹ️ About"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "🖋 Back") {
    bot.sendMessage(chatId, "Выберите:", {
        reply_markup: {
            keyboard: [
                ["1–10"],
                ["11–20"],
                ["21–30"],
                ["31–42"],
                ["⬅️ Back"]
            ],
            resize_keyboard: true
        }
    });
}
if (text === "👨‍🏫 Author") {
    bot.sendMessage(chatId,
        "👨‍🏫 Author:\n@MrHolov:<HOLOV SHERALI AXRORBOYEVICH>"
    );
}
if (text === "ℹ️ About") {
    bot.sendMessage(chatId,
        "📚 HALQARO MOLIYA BOZORLARIDA O'ZBEKISTONGA INVESTITSIYALARNI JALB QILISHNING METODOLOGIYASINI TAKOMILLASHTIRISH"
    );
}





});








const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
    console.log("bot ishladi");
});