let handler = async m => m.reply(`
╭─「 Donasi • MowGuazuBot 」
│ • Saweria : https://saweria.co/damariogg
│ • Trakteer : https://trakteer.id/damariogg
│ • Smartfren: [0888-0675-6044]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6288806756044
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
