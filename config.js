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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_21_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICA4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUxLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTlRPd29mUDdqeFhOS2hwNjlkS0RtOW5FTzVScURiZkF6cjhMeTF0eWlwST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieEpIc2ZxeEtSc21qcUpPZmxxYWJId1wiLFxuICBcInBob25lSWRcIjogXCJjZmI4OTYwOS02NmEyLTQ0ZDMtODU2YS0wZDIwNzgxZTQ5ZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICA1NCxcbiAgICAgIDE5LFxuICAgICAgOTUsXG4gICAgICAxOTQsXG4gICAgICAyNTUsXG4gICAgICAxMzgsXG4gICAgICAxNDAsXG4gICAgICAxOTMsXG4gICAgICA3NyxcbiAgICAgIDcxLFxuICAgICAgNzEsXG4gICAgICAxMCxcbiAgICAgIDEyMCxcbiAgICAgIDIzOSxcbiAgICAgIDU5LFxuICAgICAgMjAxLFxuICAgICAgMjQ5LFxuICAgICAgMTc1LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICA3NixcbiAgICAgIDIwOCxcbiAgICAgIDIwMCxcbiAgICAgIDIzNSxcbiAgICAgIDQsXG4gICAgICA1MCxcbiAgICAgIDEwLFxuICAgICAgNTUsXG4gICAgICAyMDksXG4gICAgICA1NSxcbiAgICAgIDIzNSxcbiAgICAgIDExNixcbiAgICAgIDEyOCxcbiAgICAgIDE4NCxcbiAgICAgIDEyNSxcbiAgICAgIDEwNyxcbiAgICAgIDgsXG4gICAgICA0OCxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1QU44WFhROFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1NDc3MDY0OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzkzMjA1ODUzNTUzMjQ6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEtXeUtVRkVMcXF5TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsSHlzTGdmbm54UEx0MllNTnFER2dVdHdURzdkaG1iTE81aXF5OEsxeFFJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJNQjU0bUhSZ1J6V3VicVFmNlpjRm1VT1dZb3Yyd1lDRHpHNmV3eDhSbUsraEZIbFpPbm5jR1d0WmgydmFIbFJiZUtPK3M0b0Qvcmh2UjIvZUU5U0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRpem5rTUQ0Mmt6RCtIN09BeVJYK1dYYTZzbHVtVzd2c2MxdFhNdzRENVBWazZHUkdMd0ZZdjVBT0UxVWtTdGhTRzlPdVpOeUtCTjB6ZUdrL2cxYUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NTQ3NzA2NDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NDY4NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOcytcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5zKy5qc29uIjogIntcImtleURhdGFcIjpcIk82cGJSazRFckdoMDZSMEZFQ2tHMmx2SE5zMU9SdUVwSlZxVytLRlRzMzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyMDk1NDQxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyODg2MjkxODUxXCJ9Igp9"  // PUT your SESSION_ID 


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
