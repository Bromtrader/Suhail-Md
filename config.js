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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_31_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDczLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiclkraVJWVFFtM2RZbkl5K2tkbUs2K0hWeUF6UnJpVUk0SERCUFdRSmVEcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjRYUmVGWjNTNFNicXdpdjdHUUdJQVwiLFxuICBcInBob25lSWRcIjogXCJjOTQ3MDZhNi1lOTBkLTQxNzItYmQ1Ny1iZWM3NjZhNTYzMzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMTc3LFxuICAgICAgMTQyLFxuICAgICAgODQsXG4gICAgICA0MSxcbiAgICAgIDE3NCxcbiAgICAgIDMzLFxuICAgICAgMzgsXG4gICAgICAxMzQsXG4gICAgICAxNjYsXG4gICAgICAyMzUsXG4gICAgICAyMzksXG4gICAgICAxMDIsXG4gICAgICA4MCxcbiAgICAgIDE5MixcbiAgICAgIDEyMyxcbiAgICAgIDExMyxcbiAgICAgIDExNixcbiAgICAgIDIyLFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgMTUzLFxuICAgICAgMTA5LFxuICAgICAgMTEsXG4gICAgICA0NCxcbiAgICAgIDE0NSxcbiAgICAgIDUxLFxuICAgICAgMjQ1LFxuICAgICAgMjIsXG4gICAgICAxMDMsXG4gICAgICAxNTEsXG4gICAgICA0NyxcbiAgICAgIDczLFxuICAgICAgMjIzLFxuICAgICAgMTI4LFxuICAgICAgMTAzLFxuICAgICAgMjMyLFxuICAgICAgMzEsXG4gICAgICA2NyxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVUSFY3RFRTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDgxNDIxODc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMzI0MTUxMDM3OTc2NDozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOV3lzYVlCRUkzUnhMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlE3OC9jbkJQTmI3djVWdURsMENxUi9lVGlJVzJVc0dXWkF3U3JDNHJIRlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVNITjBBR0hrOVJzWmxtRnJGcVAzdWJHVGNjSys1a2M2VnYzVkkzeEVnZDFQeVRZLzFzK09KTHV5YVg3d2dsSUNxdW5ETDBqcXFtOFRpUEJkSS9sQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK1VKajh1Q3RwSFM5Ulk3V1J3Z0FtTVBKZ2VyeVYvOWFnTit0SlBmSjAyOHJ2RkdNOU95MmdVTTlLdFkzMlV0TXE3Z2VqZEpIaC9jQkJSa1hldzdhaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ4MTQyMTg3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg4NjI4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU93NlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3c2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiLzFFZWFBenhqZUNTc2FwZmFYNjdnOFJLQW1SNmNjRWU3ZVdoMERjZUI2WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDg5MzY1MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU4MzY3NDg2N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
