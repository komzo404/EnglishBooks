import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import { str1 } from "./books_str/page1.js";

dotenv.config();

const app = express();

const bot = new TelegramBot(process.env.BOT_TOKEN,{
    polling:true,
});

str1(bot);


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
                ["31–40"],
                ["41–50"],
                ["51–60"],
                ["2 type"],
                ["⬅️ Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if(text === "2 type"){
        bot.sendMessage(chatId, "Выберите страницу:",{
            reply_markup:{
                keyboard:[
                ["61–70"],
                ["71–80"],
                ["81–90"],
                ["91–100"],
                ["101–110"],
                ["111-120"],
                ["121-130"],
                ["131–140"],
                ["141–150"],
                ["151–160"],
                ["161–172"],
                ["🕶 Back"]
                ]
            }
        }

        )
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
    if (text === "31–40") {
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
    if (text === "41–50") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["31", "32", "33"],
                ["34", "35", "36"],
                ["37", "38", "39"],
                    ["40"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "51–60") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["51", "52", "53"],
                ["54", "55", "56"],
                ["57", "58", "59"],
                      ["60"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}    
    if (text === "61–70") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["61", "62", "63"],
                ["64", "65", "66"],
                ["67", "68", "69"],
                     ["70"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}   
    if (text === "71–80") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["71", "72", "73"],
                ["74", "75", "76"],
                ["77", "78", "79"],
                      ["80"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "81–90") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["81", "82", "83"],
                ["84", "85", "86"],
                ["87", "38", "89"],
                     ["90"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "91–100") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["91", "92", "93"],
                ["94", "95", "96"],
                ["97", "98", "99"],
                     ["100"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "101–110") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["101", "102", "103"],
                ["104", "105", "106"],
                ["107", "108", "109"],
                     ["110"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}

    if (text === "111–120") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["111", "112", "113"],
                ["114", "115", "116"],
                ["117", "118", "119"],
                     ["120"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "121–130") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["121", "122", "123"],
                ["124", "125", "126"],
                ["127", "128", "129"],
                     ["130"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "131–140") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["131", "132", "133"],
                ["134", "135", "136"],
                ["137", "138", "139"],
                     ["140"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "141–150") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["141", "142", "143"],
                ["144", "145", "146"],
                ["147", "148", "149"],
                     ["150"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "151–160") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["151", "152", "153"],
                ["154", "155", "156"],
                ["157", "158", "159"],
                     ["160"],
                   ["🖋 Back"]
            ],
            resize_keyboard: true
        }
    });
}
    if (text === "161–172") {
    bot.sendMessage(chatId, "Выберите страницу:", {
        reply_markup: {
            keyboard: [
                ["161", "162", "163"],
                ["164", "165", "166"],
                ["167", "168", "169"],
                ["170", "171", "172"],
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
    if (text === "🕶 Back") {
    bot.sendMessage(chatId, "Выберите:", {
        reply_markup: {
            keyboard: [
                ["1–10"],
                ["11–20"],
                ["21–30"],
                ["31–40"],
                ["41–50"],
                ["51–60"],
                ["2 type"],
                ["⬅️ Back"]
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