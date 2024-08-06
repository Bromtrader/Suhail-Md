const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ BROM²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745477064";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,254745477064";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_23_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT1Q3OURNK1MySEhKNlowdjBrNGFNMTJOT0JNenN4VVdJNmV3ODkyTTB5WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTU4MDMwNjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM5NTdBODc2M0VBRkU4ODFGNjUyNTFGQzRFRTE1NzZCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE4MDIwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcxNTgwMzA2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODBBMEZGMzU0NjFGNDE5Mzg0RTBEMzgzQzZCQTY1MTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTgwMjA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9FcWxqZFJxUjlLYmNoaWRZbGpndUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmM0MTdiYjEtNTZmOS00ODdmLWE3YjgtMTAzNWQwYzA1MmEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgNDEsXG4gICAgICAyNDEsXG4gICAgICAyOSxcbiAgICAgIDEwNSxcbiAgICAgIDEwNSxcbiAgICAgIDMsXG4gICAgICAyNyxcbiAgICAgIDIzMCxcbiAgICAgIDEzLFxuICAgICAgMTE5LFxuICAgICAgMTM0LFxuICAgICAgNzAsXG4gICAgICAzOSxcbiAgICAgIDU5LFxuICAgICAgMTU3LFxuICAgICAgMTQxLFxuICAgICAgMTEwLFxuICAgICAgMTE5LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDE1MCxcbiAgICAgIDExOSxcbiAgICAgIDQ2LFxuICAgICAgOCxcbiAgICAgIDIxMyxcbiAgICAgIDM4LFxuICAgICAgMjAyLFxuICAgICAgMjE3LFxuICAgICAgMTgzLFxuICAgICAgMjUyLFxuICAgICAgNzIsXG4gICAgICAyNDYsXG4gICAgICAyMTIsXG4gICAgICAxNyxcbiAgICAgIDU2LFxuICAgICAgMjMxLFxuICAgICAgMTkwLFxuICAgICAgMjAzLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhHTUdQS0xEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTU4MDMwNjk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3ODY3NjkwNzI1NjI3OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUsOYQl/Dh0jDmFBQQF/DkUzDi/CfmqvimqDvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQak1oZkFERU9uRW1iVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNPL0FZUERrcVhYY2ZQVVB5azdYYnorY1dhVWdCbmg2S3JGZTFRY09SbWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSmtTNXAydm5odHh4OVBudHZiNUEvSnRBMHRsU2VWOTViM08yZkI0YlBxZXBzZnNkZDVtaVhkcUJXOE1zS2UvVFowRUVJZ05CRlI3Yi9rREtjMDBVQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ0lmQ1FFS2h4dWJINm1nMzFyMmxFUWNNbzFlNjZuakI3bzJJMjRQbW1xcHNZYURNc1RZRWV3aG5ua0JDd3dnUE05U05YZW1rT2VMTGptZFc4MSt3Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE1ODAzMDY5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE4MDIwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkzY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTNjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSnM1WmY0elVWZHAydlp1TW5yckdNTkFTQjVXaUZrUW40UWRkN25JYUEwOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDQwMjc5MTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxODAyMDYzNTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "@",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Brom_trader",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
