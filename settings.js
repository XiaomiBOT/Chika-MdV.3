/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Masukin Apikey', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['6285779150501','62857791505014','62857791505014']
global.premium = ['62857791505014']
global.ownernomer = '62857791505014'
global.ownername = 'Rangga_Official'
global.botname = 'Xiaomi-Md'
global.footer = 'XiaomiMD'
global.ig = 'https://instagram.com/rangga_botz'
global.email = 'ranggastory94@gmail.com'
global.region = 'Indonesia'
global.sc = 'chat Ownernya'
global.myweb = 'https://youtube.com/c/RANGGA BOT OFFICIAL'
global.packname = 'Xiaomi-Md'
global.author = 'WhatsApp Bot'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
