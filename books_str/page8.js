import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str8(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;   
              
    if(text === "119"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "120"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "121"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "122"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "123"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "124"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "125"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "126"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "127"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "128"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "129"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "130"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "131"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "132"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "133"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "134"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "135"){
        bot.sendMessage(chatId,
            ""
        )
}  
})
}