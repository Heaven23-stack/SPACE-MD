require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAPNCCFvCAjnUTwQAAHEHAAAKAAAAY3JlZHMuanNvbpVU246jOBD9F78STQKBEJBaWkLSXHInIbfVPBgwxAkYYhsIM8q*r0h3z*TD7qiXJ1MuVZ0655R*ApJjhqaoAfpPUFBcQY7aI28KBHQwKuMYUdABEeQQ6GDpdNOwyGNhKIS140S7sTocK1sy7RtNxvFMvqsL6yZZi9f6BTw6oCiDFId*KKiyc1POrMOrkoWTzO9x7eyQvudHrkzUaNQn06lwT3016c1fwKOtCDHFJJkUZ5QhCtMpalYQ06*BtyaeKRBxxq6vuRnOAm*f35a3lTRZFb1GO4bLnkXwftUd7sKvwa*O83tZGFfVVeLVJsDKfuFvnau7ushQo6*VIuT3cTzDjKzf4DOcEBQ5ESIc8+bLvDvmEZLZoF4ER1+1b9s8DiXsUHyxGjia023tm*emGbgDiX0N+KGWt0p47W138clWp*XeO5PNqkACX5vje3Wr+ht+q5pIM4zPwFf0wyvX*8M7mh+aAbprNFvG8Zx70RYjCdcbxo0Njb3jcuY3mjEwDf*6NfjePVHttR3JVwX+MJec9pt1QofLY99dLvfdylI2925zyyJ*8hs+5CX9E8r6NN5Py2VQ87PCgnIszJ1eV6gMQgyfL+RDRD0Kq8jdbRptJxpW6ttzwR3G6mKym5eSV9nHxf56VJi2xCYUBgW8ny7Jy3OiK2qcCOjiowMoSjDjFHKck2dM7nUAjKoNCiniT3rBkXr1gvFuNs4rKVikqUG6QrAW5oPbXoEzYxweLvzoLKTs+AI6oKB5iBhDkY0Zz2kzR4zBBDGg**29Awi68zfh2nYDsQNiTBn3SVmkOYw+VP24hGGYl4RvGhKa7QFRoH8KI84xSVjLY0kgDc+4QuYZcgb0GKYM*ZoQURQBndMS*dpaM49a4l1tM5mtPAN0QPYUBEdAB1Jf1kRR7Suq1hvqovgX+1a3dWFRfCOIgw5In3kDcagNeqKiyIqmtHlt+PELYFsvQhzilAEdmC5K+0ptTZxVLrK1ZRmTxDCTtvXHQB*OeGN+jafN+jKOh9tASNLJzI819XBdB7UXn+Z4b6k1QqedHPs*hi**UgTo4K4G*tpD6+l0JtiNdV16ajyOJt2D86OWwsvAcK6ojojoNWmUiEHghDji9yC94dTNb6+5lp6EzFXUypMX48Ao7CmzktZGHRChCofoc7NgI0gukoy5aK8HzTJdSVwpQ4oLZS+Knu8I23iXFztSpN6sX2QwV+zQXJ*6I39uD*re0bktpFoaXeqVtbSO5f5mbt3k3bPPnUnf3yr8dFMrVfsbY*RcfQJbAb8g3Rvy1mK9R+dTkffX5D82cuQ7mF2dut+dSN3c9UzR7iJRmVjDyUHaOum5HNok2yFbnHfB4*G9A4oU8jinGdABLs45QaADaF62lnVInP+hlzlyHON98hQybvxegy3OEOMwK4Auqoo8kEVZVN6yVjQvbMjOLQmWbGRl6+nGKIoNh*xjq4DRfi5XwOMfUEsBAhQDFAAACAgA80IIW8ICOdRPBAAAcQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2349117357908',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
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
