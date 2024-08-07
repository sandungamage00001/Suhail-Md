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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94728756898" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94728756898";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_56_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJ6eXExWDRKVHBvTmtwelpEcWY1VHkvNjVKakcvUVFqNEZVZUc4R2dkV1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3Mjg3NTY4OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQTBDRDAyODZGOUI0MDM3RjIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg1MTc2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIaVpHS2Z5RlFLcWhONVVTNUJPVHF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFlMzljZDYxLWUyYTktNDZjMy05MjA5LTc4OTc3MDQxOGViOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE2NCxcbiAgICAgIDExNSxcbiAgICAgIDE5OCxcbiAgICAgIDAsXG4gICAgICA5OCxcbiAgICAgIDIzMixcbiAgICAgIDYwLFxuICAgICAgMjMsXG4gICAgICA0LFxuICAgICAgMTMyLFxuICAgICAgNDQsXG4gICAgICAxMzAsXG4gICAgICAzNixcbiAgICAgIDgxLFxuICAgICAgMjgsXG4gICAgICAxOTksXG4gICAgICA0OSxcbiAgICAgIDIxLFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDE1NyxcbiAgICAgIDEzMyxcbiAgICAgIDIzMCxcbiAgICAgIDEwMyxcbiAgICAgIDE5MSxcbiAgICAgIDk4LFxuICAgICAgNDIsXG4gICAgICAxNDAsXG4gICAgICAyMDcsXG4gICAgICAzOCxcbiAgICAgIDE1OSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NixcbiAgICAgIDQ3LFxuICAgICAgOTQsXG4gICAgICAyNDMsXG4gICAgICA4MCxcbiAgICAgIDE5NyxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhCNDNMN1YyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyODc1Njg5ODo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTI1OTY2NzI4MzE2MTM6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFNKNVo0S0VLYkR3clVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBVFpsRmJFTEJxMVhwYjJWaFNWakY3YWI3SGUvL1hUYUVaT1RaVkNjU3dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJuOS8zcDZJUkp5ZzAra3NObXduMlp5bkVkbzRaeUR0WjR0MXhuMWJCY1hlOFRURWkxaHo3TVNDZ0dCUHV2OWx1VnRsMFhZSXAvL3BYaHB3d0hHZUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNhNDBlLy95cUZBR2xtalZLd25HWDZpUnhjYXRLSnBsSzFTbWdsakd4YTFpOFFTRTBLMjJ4NW8rMDJRaVZ1OHRQUHRZTkN4RVNEb2VzV0Q3Q0x3WmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI4NzU2ODk4OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg1MTc1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUF4YlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQXhiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUnpHSmlXdVlzUjhQbEJaL3pIQVZUUHFlZ3pYNlZsaEtsZGZHV2dsVmUxYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzQ4OTI1MTcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4NTE1ODE4NDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "CHARITH-KAWINDA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
