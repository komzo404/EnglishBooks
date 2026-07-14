import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str10(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;   
              
    if(text === "152"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "153"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "154"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "155"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "156"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "157"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "158"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "159"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "160"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "161"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "162"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "163"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "164"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "165"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "166"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "167"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "169"){
        bot.sendMessage(chatId,
            ""
        )
}  
    if(text === "170"){
        bot.sendMessage(chatId,
            ""
        )
}  
    if(text === "171"){
        bot.sendMessage(chatId,
            ""
        )
}  
    if(text === "172"){
        bot.sendMessage(chatId,
            ""
        )
}  
})
}