import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str2(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;

    if(text === "18"){
        bot.sendMessage(chatId,
            "1str"
        )
}             
    if(text === "19"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "20"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "21"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "22"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "23"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "24"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "25"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "26"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "27"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "28"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "29"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "30"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "31"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "32"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "33"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "34"){
        bot.sendMessage(chatId,
            ""
        )
}   
})
}



         