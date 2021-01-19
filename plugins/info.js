let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: MowGuazu
╠➥ Script: @MowGuazuBot
║
╠➥ Facebook = Huehe
╠➥ Instagram: @mhehe69
╠➥ YouTube: BPBM ODFICIAL
║
╠═〘 Thanks To 〙 ═
╠➥ Xstart Soft
╠➥ FeArt bot
╠➥ DeX1265
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Saweria : https://saweria.co/damariogg
╠➥ Trakteer : https://trakteer.id/damariogg
╠➥ Smartfren : 0888-0675-6044
║
║>Request? Wa.me/6288806756044
║
╠═〘 MOWGUAZU BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

