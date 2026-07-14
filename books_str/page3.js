import express from "express";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();
const app=express();



export function str3(bot) {
    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;

    if(text === "35"){
        bot.sendMessage(chatId,
            "1str"
        )
}             
    if(text === "36"){
        bot.sendMessage(chatId,
            "2str"
        )
}   
    if(text === "37"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "38"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "39"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "40"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "41"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "42"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "43"){
        bot.sendMessage(chatId,
            ""
        )
} 
    if(text === "44"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "45"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "46"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "47"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "48"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "49"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "50"){
        bot.sendMessage(chatId,
            ""
        )
}   
    if(text === "51"){
        bot.sendMessage(chatId,
            ""
        )
}   
})
}
