import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str7(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;   
              
    if(text === "103"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "104"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "105"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "106"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "107"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "108"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "109"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "110"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "111"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "112"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "112"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "113"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "114"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "115"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "116"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "117"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "118"){
        bot.sendMessage(chatId,
            ""
        )
}  
})
}