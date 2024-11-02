const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_28_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInUxTSs0N29OK0tuc0h3YUg1VnFlMmhqNmNwK01EaGdBcyt5TWtLNWNUMFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1PU2JibUMxUmhHWDJZX0hwaHhYUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDc5ODg1ZTctM2Q1MS00ZDZlLWFlYTktYzJmNDhjMWVmNTdmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDEwNCxcbiAgICAgIDE0NixcbiAgICAgIDIyOCxcbiAgICAgIDEyLFxuICAgICAgMjEzLFxuICAgICAgNzYsXG4gICAgICAxMzcsXG4gICAgICAxMTksXG4gICAgICAxMSxcbiAgICAgIDE4NyxcbiAgICAgIDE1MSxcbiAgICAgIDI0NyxcbiAgICAgIDExOSxcbiAgICAgIDI5LFxuICAgICAgOCxcbiAgICAgIDg1LFxuICAgICAgMTEsXG4gICAgICAyNDIsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDE3MCxcbiAgICAgIDIyNCxcbiAgICAgIDE5NyxcbiAgICAgIDE0MixcbiAgICAgIDM0LFxuICAgICAgMjE0LFxuICAgICAgNTEsXG4gICAgICAxOSxcbiAgICAgIDExNixcbiAgICAgIDEzMCxcbiAgICAgIDI1LFxuICAgICAgNTEsXG4gICAgICA4OCxcbiAgICAgIDIxOSxcbiAgICAgIDEzOSxcbiAgICAgIDI1MCxcbiAgICAgIDg0LFxuICAgICAgMTg4LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1YbGFVQkVKK0FscmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxeVA2UXd1Z0lRTGZuMHh6M2YrRHRsSHE4QVY4L3RHSUZxd0FvTGJXZUNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImMxRkR1T3RrQXlwdk43LzY4TkljTjl0eXR0aHJlYklEMmhVbGx3RDNOWDdNcWFkeXFybm5mUDhnSC9EcnRxK1c4amVBSkxzZG82NmhsalNNMXkyQURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRYQnF3NU5rM0trbTR3VkQ4TkNvc2Y0QnA1c1FSTjc0NHpwMTg4ZjJzaUN3ZEM3TzladitmQmQrWm9xWE9ZaU90Q3NlZStaQXI5eGIyQ0NlenVNSWdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU1NTIxNDQ1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QkvCdkK3wnZCr8J2QnvCdkJrwnZCmLfCdkIjwnZCtXCIsXG4gICAgXCJsaWRcIjogXCIyMzcxMzM5NTI0NTg5OTU6MTRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTU1MjE0NDU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTEwODgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlZaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVlouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrUllGSEFGY0pGNWJpLy8xcm1uRFJTVkxCNkg5SWpkbmRGazRxSzh0MEFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NjM3NzA5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTEwODg3Njk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "STREAM-IT",
  ownername:process.env.OWNER_NAME|| "IT-237",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
