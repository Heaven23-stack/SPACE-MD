require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACONDVvJIpvKTQQAAG0HAAAKAAAAY3JlZHMuanNvbpVU27KiOBT9l7xqNRcRolWnqhFFUUQUvE71A0KAKAZMAopd*vsUnj7d*TDTc4ankKT2Xntd8h2QHDM0QzXofwcFxVXAUbPkdYFAHwzKOEYUtEEU8AD0QcvNpvZGPt38eZ1JtxO09iVfe9P6mgvzQX6+HA0yUlk3n4hv4NkGRXnMcPiHgsNFMr1JaX5zb4K+J6Io5mo+H8Ut5Cym2iCWXDc944dlJfANPJuKAaaYJKMiRRdEg2yGajfA9HPw4dyZerEj+ouNot7jjXWUpFi4DLLM6x0W4l1YlPZ6F0FnzT4H34OtbspoeO1SzZ20pvb9oZ9cwnhMhj2cT6+dcuBPmZ3qyTt8hhOCIitChGNef5p35PSCrdy1dn6koNiJzWq1tqKyU4m1rXj4tPXk+0q15XJrfQ44rCrbSNWiM2SCO8kXrdAksoQXOPNk*4BnvjE8EP5QHjr7HbhLP7xy*j+8yws0Hhy2rQu8uLqdzK5mhWpPitYOWVxHWTryDq3QKg*idv05+MpxKT6W9X3JjFh29XiLNQFW821G8HoB8*Uw2cP6cEOhCX*BD3hJ*4TyopVJjFM4JVxh*rFnx3M0vzvVwRXP111FNove+XKaoztF+mC18VfQZN59pFl2dybxBSwn5*CE8Ux+KFqNWoojCdlQf3tNdEa1FYG+9GwDihLMOA04zslrr9cGQVR5KKSIv9gF8vmc+OXGR*liNhJX1Vl5OHd1lpfTm0zKMDNMNyHJ2DOH6zfQBgXNQ8QYiiaY8ZzWc8RYkCAG+n99awOC7vxdt6ZbR2qDGFPG16QssjyIPkT9OAzCMC8J92oSGs0CUdAXf20jzjFJWENjSQIaprhCRhpwBvpxkDH0c0BEUQT6nJboZ2iNPGp4tw*acN*Rt6ANLi89cNTM3FE0ESpqV+lJsA+*si+3pmxQFF8I4qANstc1TRVVRdEUKMmKqvbh12b7+RNfUy5CPMAZA31gWIFD3Pl4NJNDCJfjsT5KdCPRwa95PnzxTnxAYYvXPTM84socVnqNxydRH0xDS4yPCizc3U0obTO0s9HbPxQBfSAYieX1uKASe5kJ5rwMiL3TcUjtOshO4Rr6juEbyDqf89tqSmEyns8Oww3pqsNHZyuezExzxIQvoObmAt4VZaewkuVb0y1CFQ7R783w7XDm+0wb4djBJOVsss3CzmwOi+uem7gKbZkaoy3u8HBjsk4Pk+nusUSErq4m2u9sAe6PvnQ6j6enslN7W+cul*oPx74Sk*14qfDLTI1SzW+M0Sv4JGj0+2*l3oE3BhOf7d9q*HhK*iWOg+1VcGlYrXZjhd6X2m2ep3lP172d4UzkljvzJehq+L4zuivwfH5rgyILeJzTS8NMkeYEgTagedkY1iJx*odehi5ao+R98CxgXP8VAh9fEOPBpQB9Set2JVGFqvJ+y6V5MQlYCvqAXDqDY2PoWi8Kjwf8I1JAf32yD55*A1BLAQIUAxQAAAgIACONDVvJIpvKTQQAAG0HAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHUEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2347084654918',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Heaven23-stack',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
