exports.menu = (clockString, prefix) => {
	let tanggal = new Date().toLocaleString('id', { dateStyle: 'full' })
	let waktu = new Date().getHours()
	waktu = waktu > 2 && waktu < 4 ? 'Dini Hari' : waktu < 11 ? 'Pagi' : waktu < 16 ? 'Siang' : waktu < 19 ? 'Sore' : 'Malam'
	let time = new Date().toLocaleString('id', { timeStyle: 'long' })
	return `Gabisa baca? Yntkts

𝘙𝘦𝘯𝘻-𝘣𝘰𝘵

- 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯
• 𝙻𝚒𝚋𝚛𝚊𝚛𝚢: 𝘉𝘢𝘪𝘭𝘦𝘺𝘴-𝘮𝘥
• 𝚅𝚎𝚛𝚜𝚒𝚘𝚗: 1.0.0
• 𝙿𝚛𝚎𝚏𝚒𝚡: ${prefix}
• 𝚃𝚊𝚗𝚐𝚐𝚊𝚕: ${tanggal}
• 𝚆𝚊𝚔𝚝𝚞: ${waktu} || ${time}
• 𝚃𝚒𝚖𝚎 𝚁𝚞𝚗𝚗𝚒𝚗𝚐: ${clockString(process.uptime())}

𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘬𝘦𝘵𝘶𝘬 List Menu
𝘶𝘯𝘵𝘶𝘬 𝘮𝘦𝘭𝘪𝘩𝘢𝘵 𝘴𝘦𝘮𝘶𝘢 𝘱𝘦𝘳𝘪𝘯𝘵𝘢𝘩
`.trim()
}

exports.allmenu = (prefix) => {
        return `*𝙰𝚕𝚕 𝚏𝚎𝚊𝚝𝚞𝚛𝚎𝚜*

- *𝙼𝚊𝚔𝚎𝚛*
• ${prefix}kannagen <teks>
• ${prefix}trumptweet <teks>
• ${prefix}memegen <teks|teks>

- *𝚂𝚎𝚊𝚛𝚌𝚑*
• ${prefix}google <query>
• ${prefix}ytsearch <query>
• ${prefix}whatmusic <caption / reply>

- *𝙶𝚊𝚖𝚎*
• ${prefix}susunkata
• ${prefix}tebakkata
• ${prefix}tebakgambar

- *𝚁𝚊𝚗𝚍𝚘𝚖 𝚒𝚖𝚊𝚐𝚎*
• ${prefix}neko
• ${prefix}waifu

- *𝙲𝚘𝚗𝚟𝚎𝚛𝚝*
• ${prefix}toimg <reply>
• ${prefix}tourl <caption / reply>
• ${prefix}stiker <caption / reply / url> [-crop]

- *𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛*
• ${prefix}igdl <url>
• ${prefix}ytmp3 <url>
• ${prefix}ytmp4 <url>
• ${prefix}play <query>
• ${prefix}pixiv <id / url>
• ${prefix}stickertele <url>
• ${prefix}twitter <url> [-hd]
• ${prefix}tiktok <url> [-mp3]
• ${prefix}nhentaipdf <code>
• ${prefix}pinterest <query / url>
• ${prefix}soundcloud <query / url>

- *𝙶𝚛𝚞𝚙*
• ${prefix}link
• ${prefix}leave
• ${prefix}revoke
• ${prefix}tagall [teks]
• ${prefix}hidetag [teks]
• ${prefix}group [option]
• ${prefix}demote <@tag / reply>
• ${prefix}promote <@tag /reply>
• ${prefix}setppgrup <caption / reply / url>

- *𝙼𝚒𝚜𝚌*
• cekprefix
• ${prefix}ping
• ${prefix}runtime
• ${prefix}listgroup
• ${prefix}get <url>
• ${prefix}ssweb <url>
• ${prefix}delete <reply>

- *𝙲𝚛𝚎𝚊𝚝𝚘𝚛 𝙾𝚗𝚕𝚢*
• $
• > / >>
• ${prefix}self
• ${prefix}public
• ${prefix}restart
• ${prefix}join <url>
• ${prefix}setprefix [prefix]
• ${prefix}setppbot <caption / reply / url>
`.trim()
}

exports.tos = (prefix) => {
	return `
𝙸𝚍𝚔 owner.
`.trim()
}

exports.mess = {
	wait: '𝘎𝘪𝘷𝘦 𝘮𝘦 𝘱𝘳𝘰𝘤𝘦𝘴𝘴 𝘵𝘩𝘪𝘴 𝘴𝘩𝘪𝘵...',
	group: '𝘛𝘩𝘦 𝘨𝘪𝘷𝘦𝘯 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘪𝘴 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳 𝘨𝘳𝘰𝘶𝘱!',
	admin: '𝘛𝘩𝘦 𝘨𝘪𝘷𝘦𝘯 𝘤𝘰𝘮𝘮𝘢𝘯𝘥 𝘪𝘴 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳 𝘈𝘥𝘮𝘪𝘯!',
	botAdmin: '𝘎𝘪𝘷𝘦 𝘮𝘦 𝘢𝘥𝘮𝘪𝘯 𝘵𝘰 𝘶𝘴𝘦 𝘵𝘩𝘪𝘴 𝘤𝘰𝘮𝘮𝘢𝘯𝘥!',
	owner: '𝘈𝘳𝘦 𝘺𝘰𝘶 𝘮𝘺 𝘰𝘸𝘯𝘦𝘳?'
}
