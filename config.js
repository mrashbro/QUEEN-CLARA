/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;FjhCWSTT#UkXQ9VXRtAb8D4i7kl1qyXkvcaS9iNz2KYVgQZ_PZnI' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'https://wa.me/qr/6GZMOXNFKHXWH1'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '+1 (775) 629-4763'

global.OWNER_NAME = 'Clara_X'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'Do not put inbox messages' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'Clara x'

global.FOOTER = 'Queen Nilu 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Janiya 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'Hey Im online what you want from me' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/JiJYtqqz8Hu9ndNaMgR5ru' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
