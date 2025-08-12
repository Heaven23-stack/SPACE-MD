require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKWYDFuEWkmsbgQAAIEHAAAKAAAAY3JlZHMuanNvbpVUS5KjOBC9i7Z2NJg*RFREA8Zf8A*j30QvZBAglw1YEsa4w5u5xax6NReYk*URJnBVdddipqeGlUgpMl++9zK*gizHFI1RDYyvoCD4AhlqjqwuEDCAVcYxIqANIsggMEA4SYrDetxLdW6UyouZXW3RrVgqAh5PrDRYcJN6UfgFagnJE7i3QVHujzj8RUIdCrtbkHSlHG2mW1UfqPFZO5Au3Zt1KsZc3aljxUp3us0*gXuTEWKCs8QpUnRCBB7HqJ5BTD4Gf9vtJ1BYsBi5B59uLTMkO*9Gy1UHH07PwXWULlYDbqAsN8OPwQ8Orqisypt7UIPLITwoZVj3dm6ysSpFuOhUdfDOKzYzuQpf4FOcZCgaRihjmNUf5j0feGMrKerrZIYTrnZZqMcxS2CMvD6GOJRah5bk01GwCT4G*OaKmlqeD5zVQsVAlziOlWVoH4dXPORGrP*M5flue5pQi74HPiNvXnn+P7w7I87OnaylzSfC8jaGdUBuvdo676xq73XG3brTIut62zMd+jH4s9E63PvidCFtK98bdGuzwpuSnmcdP79llpc8c3JLllJvzf+ED1lJfoUSubKEBcl8jqIt2yq9nh4uNoW6ax3OFdmazipMb0UqcNv+tNqE40C+XTiyLlvqRVml10B12FIbHVfedt2TSDF14KQ+WebTo6NnVA8jYHTubUBQgikjkOE8a2JKpw1gdPFRSBB7sAtO0T6eK6JsirUNJa+SYb+aTMT95MRFcnhTaDSJdbUv7tL8CbRBQfIQUYqiAaYsJ7WHKIUJosD47UsbZOjKXnRrqomdNogxoSzIyuKYw+hN1LdLGIZ5mTG*zkK7OSACjHdhxBjOEtrQWGaQhCm+IDuFjAIjhkeKfjSICIqAwUiJfgytnUcN78JScDeOaIM2OD30wFETFSWV1yRFlvSOZkif6aeqSQuL4lOGGGiD4+OZqvCKJKmS1hEkRTGkz024DTLYpALb*Pu3P**6*u2P3xvSXzE3JSLEID5SYAB7OJ5kM6*vTO1EpfN+33QS005M8LPHN6+8iAGJ1mK13gv3+NLrXswa9w+8aY3CIR*vJa2YbSqudHuhe3Se*iEJMMCKJcO1G4is70HflbT+MRbd63l9zn2RUaLshyWKhZvFTsjeRZf1+CTNMy3Od46wigJ7bbf2icTXLeWc9jmYQz8OJof5U1MtQhccovfFuthznU40uo15f3+Ntux88dad2ShfsnmMg70UHv1K7o61ge7J8hmKqpsm5fR29qy1xtt8Ng1ynUeLlDsrVJpG8LrWu9WLix9TdHzdXvhhsEa95jfG6LEMXoX4TzVfgDem4+*tdzle18u*jKi1PnMzEl4Wm75ErnO18vI0103T39iTgdCajZcdbabi68aWF+B+*9IGxRGyOCcnYABcpHmGQBuQvGxMPMzi*Be1bJMfOslL40dImflzMJb4hCiDpwIYHVWWeUGWee3l1YzkxQDSFBggO4nWvjF5bRaFzyB7GzNgNt9UY+D+N1BLAQIUAxQAAAgIAKWYDFuEWkmsbgQAAIEHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAJYEAAAAAA==',
  
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
