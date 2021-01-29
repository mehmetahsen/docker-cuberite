const mineflayer = require('mineflayer')

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node jumper.js <host> [<port>] [<name>] [<password>]')
  process.exit(1)
}

const bot = mineflayer.createBot({
  host: process.argv[2] ? process.argv[2] : 'localhost',
  port: process.argv[3] ? parseInt(process.argv[3]) : 25565,
  username: process.argv[4] ? process.argv[4] : 'testbot',
  password: process.argv[5]
})

bot.once('spawn', () => {
  bot.setControlState('jump', true)
  bot.chat(bot.spawnPoint.toString())
  bot.chat('Servus!')
  bot.quit()
})
