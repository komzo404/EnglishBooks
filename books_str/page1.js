import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function strrone(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;

    if(text === "1"){
        bot.sendMessage(chatId,
            "1str"
        )
}             
    if(text === "2"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "3"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "4"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "5"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "6"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "7"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "8"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "9"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "10"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "11"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "12"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "13"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "14"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "15"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "16"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "17"){
        bot.sendMessage(chatId,
            ""
        )
}   
})
}



                

























