import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str9(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;   
              
    if(text === "86"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "136"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "137"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "138"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "139"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "140"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "141"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "142"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "143"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "144"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "145"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "146"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "147"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "148"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "149"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "150"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "151"){
        bot.sendMessage(chatId,
            ""
        )
}  
})
}