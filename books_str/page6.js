import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str6(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;   
              
    if(text === "86"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "87"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "88"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "89"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "90"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "91"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "92"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "93"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "94"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "95"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "96"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "97"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "98"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "99"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "100"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "101"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "102"){
        bot.sendMessage(chatId,
            ""
        )
}  
})
}