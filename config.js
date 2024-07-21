const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw";
global.website = process.env.GURL || "https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9b8261a6abfb3c8e2ea38.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "923263429027";
global.owner = process.env.OWNER_NUMBER || "923263429027";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9b8261a6abfb3c8e2ea38.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923263429027";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJZSmN2VEZRV25pUmZyZFZBQkl3VFJWTEtEUVJ0SFVwVkM0WW1FRDBWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidngyQVVmOVc1SUZGOThlL2xvQTJlMG1LT0U2bjBRRTE4VHozWC9RbjRDRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTTNpT3hTWFM2WVRsU2hNVDlLQUhoOWt6V1dIQmRwWEpPZ0RGVFkyRVhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2YkFJL1VocllnK1UvY3I5Mm05aXZNRWlMRVk3ZEx3OGRXNzRUMFp4dkdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQb2FTSWtxNTZVc282MXdSZERud0NFbXVTTXNDcGV5dEZReTJaUC85bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFwQWJsaERVVm1LY1ZlUGpnRDhBUEs1VVdHUlpFUzl3cnRwRnV2cGIyaTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBYM1FhSTZ4a29tRDZHa3FPSERoVUJBZVQwa0k4YmlmNW5GdExYRWJHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlNTYVQ3VnVrUmU5ZUR2SGtEVVh2RHZEMnBZWVh5Sndvd0ppc01YRXdUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxMdERGaGNHeFFRM3lnNGZWOENockJJSjJ3cjhZeVVMMVFucmVxMHRFN1dhQTlKbVplYnZjeGVXYmRWSk8yRkdnMlczSnFYWFlNYUFUMk14WFQrcENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiI3cHpPVDZFMjA4dkYrMXo0aE5veDIwQXB0bllEMTBaMnR0U2VkeTRBRnZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSYW9ESzlYYlJyNlhCZUV6ZFJsVnRRIiwicGhvbmVJZCI6ImRiMzI4Mzk0LTU4YjUtNDNlMS04NTE4LWQ3YjgzZDg2YjkyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6SkYvMHJCY0dnS3Q5d3h5a2gvUWRVT3V3V0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTlBTDZEUGlIQWthUFArUVkwV2svYjdRRVJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5QR0QxSDlaIiwibWUiOnsiaWQiOiI5MjMyODczNDAzMDE6MTNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09ySXF2UUdFS1dSOHJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ild6RnB3RmJPdjBVTU4wUnhDSHpwYTc5K3BzT3JrL2hOdGZ3ZENtNU16QXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpuNGZnclc1QXR3cDZJNWhRRnVDVStBNXkzQS9YZWxiWmZENEpuNU9sTWNESHVJR2s5NEgrQUdZempXVy9FSGRhS2NXWm81MUQvNEQvSkZoK3dxb0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJL05xNzlUVk5SeVdPSUN5c3QzWjZZeFpWbTJpYzkzUmtLL0xFTjJmM3RwYWkxRWxWcUhvNzFXY1ZYdC9ObGhoeFpXTEh3Q1FMWHI5TmlvMXJJNzNBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI4NzM0MDMwMToxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWc3hhY0JXenI5RkREZEVjUWg4Nld1L2ZxYkRxNVA0VGJYOEhRcHVUTXdNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNTM0NjQyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUc0WSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬: 𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕",
  author: process.env.PACK_AUTHER || "𝗠𝗔𝗟𝗜𝗞-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝗠𝗔𝗟𝗜𝗞-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "𝗠𝗔𝗟𝗜𝗞 𝗠𝗘𝗛𝗧𝗔𝗕",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
