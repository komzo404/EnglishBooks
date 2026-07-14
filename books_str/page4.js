import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str4(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;

    if(text === "52"){
        bot.sendMessage(chatId,
            "1str"
        )
}             
    if(text === "53"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "54"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "55"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "56"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "57"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "58"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "59"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "60"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "61"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "62"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "63"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "64"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "65"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "66"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "67"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "68"){
        bot.sendMessage(chatId,
            ""
        )
}   
})
}
