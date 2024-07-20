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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZtSXYweUNLaTFQbkFPTWFxUWRremgvSDBPTDNTNkl0Q3F3bzU0R3hIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1rSWt3RjNGOFkzZDEyTjRJK0E2S0ZwcSszbUNWa3pJdllnN1FDclJtcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSjQyYnZYZ3JFbkl5Q0tXQmFiYVViQ2FiT2YxNXpuTWlybFgyNjJFQWxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZjJxZ2pxQWEvckYycUZJWFhPb2IwcXIyK05Gc3h0TEJWV1JuUE1ZWERjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBblUzS1VqbURHYnpqQjlxQldOeUUvYkRnQTkwSGpHeVM5bTF4Rkk2MnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE0L3ZLRzdKZzRJaVozSTBWRis4bWx2Z2g2eXlHUFl4SHBIQ1NvZWdTU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01QSUpOeHV5NGIrU1o1WTRaNTgvaWFwZXo4S3pOdE4yVEhDT1VxYkdIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk80RWUvdWdteTgrWDVZZWtMN3FvVnFsYm9JSVdibUlOWmNTeVBIWkZ3az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBkUXBEOTVoMU9rLzFoeHFwYklSbGgvZm1XSklxUU1OUTFuak90dHNMTnM1V3VGNjR5UzZSOHpMUCt3di9YVWVpeFdDYVZVWkRZVVhZUXIwQUtWWGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IlVEVGQxSDdyWTFpNWNibzRQU3ZaREsxemg3UFk5R2d3elIwZ2JmbVNiaVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVDZVhvSVVoVFAtZllCVjdJTXFaelEiLCJwaG9uZUlkIjoiN2RjMTI0YjgtNzkzYi00MGZmLTg4NTItNjRhNzIwN2ZlZDVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlRbnUwOFNSSUNFOW9qeUxLMWhLOVNCNWRkUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZlA0cmJKaXhMcG96Z1NwdnRwMGZpR1JSZm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlhZNFRNTlciLCJtZSI6eyJpZCI6IjkyMzAzMDU5ODQwMjoyM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnFBMDhzRkVLdk15clFHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZlJUcjBkdHVCU2x6ZmIvWnlqZ2MwMzJLREtTZlVQUWhSeXdXK3Bqby9Rcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibjk2SklEUDh0Ri9idGNuYm5tMTlMdE9Ka2ZNZ25Za296TFVkNDhSV0g5L3Qxd0MrRmhFUGwvd0pJQm9Tb2RmSkFYVElZcDF3VVZNZUoyY2hzVUNHQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9mV0FxU2VHSG83Y3g1bmRBWnNLdGxtSDhJVEdmUTRrYVhMenBleWQza2ZucWt6ZGV1eTZrSEFDUVVTYUpaZlh0UThYSXNIWUlqM3JEVi9vNnJhOWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDMwNTk4NDAyOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlgwVTY5SGJiZ1VwYzMyLzJjbzRITk45aWd5a24xRDBJVWNzRnZxWTZQMEwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4ODY4NDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkJvIn0="
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
