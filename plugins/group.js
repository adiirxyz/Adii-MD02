(async () => {
	switch (true) {
		case /^leave$/i.test(command): {
			if (!isGroup) return reply(mess.group)
			await reply(`${decodeURI('%F0%9F%91%8B')} 𝘎𝘰𝘰𝘥𝘣𝘺𝘦...`).then(() => conn.groupLeave(from))
			break
		}
		case /^hidetag$/i.test(command): {
			if (isGroup && (isAdmin || isOwner)) {
				conn.reply(from, q, null, { mentions: groupMetadata.participants.map(v => v.id) })
			} else reply(isGroup ? mess.admin : mess.group)
			break
		}
		case /^tagall$/i.test(command): {
			if (!isGroup) return reply(mess.group)
			let member = groupMetadata.participants.map(v => v.id)
			let teks = q + '\n\n', num = 1
			for (let x of member) teks += `${num++}. @${x.split('@')[0]}\n`
			reply(teks.trim(), { mentions: member })
			break
		}
		case /^revoke$/i.test(command): {
			if (!isGroup) return reply(mess.group)
			if (!isAdmin) return reply(mess.admin)
			if (!isBotAdmin) return reply(mess.botAdmin)
			await conn.groupRevokeInvite(from).then(() => reply('𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘳𝘦𝘷𝘰𝘬𝘦 𝘭𝘪𝘯𝘬'))
			break
		}
		case /^gro?up$/i.test(command): {
			if (!isGroup) return reply(mess.group)
			if (!isAdmin) return reply(mess.admin)
			if (!isBotAdmin) return reply(mess.botAdmin)
			if (/tutup|close|buka|open/i.test(args[0])) await conn.groupSettingUpdate(from, /tutup|close/i.test(args[0]) ? 'announcement' : 'not_announcement').then(() => reply(`Success ${args[0]} group`))
			else {
				let buttons = [{ buttonId: `${prefix + command} open` , buttonText: { displayText: 'Open', type: 1 }}, { buttonId: `${prefix + command} close`, buttonText: { displayText: 'Close', type: 1 }}]
				conn.sendMessage(from, { text: '𝘊𝘩𝘰𝘰𝘴𝘦 𝘵𝘺𝘱𝘦', buttons }, { quoted: m })
			}
			break
		}
		case /^link(gro?up|gc)?$/i.test(command): {
			if (!isGroup) return reply(mess.group)
			if (!isBotAdmin) return reply(mess.botAdmin)
			await conn.groupInviteCode(from).then(res => {
				let buttons = [{ buttonId: m.key.id, buttonText: { displayText: 'Ok', type: 1 }}, { buttonId: prefix + 'revoke', buttonText: { displayText: 'Revoke', type: 1 }}]
				conn.sendMessage(from, { text: `https://chat.whatsapp.com/${res}`, footer: `𝘎𝘳𝘰𝘶𝘱 𝘭𝘪𝘯𝘬 𝘰𝘧 : ${groupName}`, buttons }, { quoted: m })
			}).catch(reply)
			break
		}
		case /^setpp(gro?up|gc)$/i.test(command): {
			if (!isGroup) return reply(mess.group)
			if (!isAdmin) return reply(mess.admin)
			if (!isBotAdmin) return reply(mess.botAdmin)
			if (/image/.test(type) || isQuotedImage) {
				await reply(mess.wait)
				let media = await conn.downloadM(quoted ? quoted[typeQuoted] : m.message[type], quoted ? typeQuoted.replace(/Message/, '') : type.replace(/Message/, ''))
				await conn.updateProfilePicture(from, media).then(() => reply('𝘋𝘰𝘯𝘦')).catch(reply)
			} else if (args[0] && isUrl(args[0])) {
				await reply(mess.wait)
				await conn.updateProfilePicture(from, { url: args[0] }).then(() => reply('𝘋𝘰𝘯𝘦')).catch(reply)
			} else reply(`𝘌𝘹𝘢𝘮𝘱𝘭𝘦:\n${prefix + command} 𝘱𝘪𝘤𝘵𝘶𝘳𝘦\n𝘰𝘳\n${prefix + command} ${pickRandom(thumbnailUrl)}`)
			break
		}
		case /^(promote|demote)$/i.test(command): {
			if (!isGroup) return reply(mess.group)
			if (!isAdmin) return reply(mess.admin)
			if (!isBotAdmin) return reply(mess.botAdmin)
			let action = /pro/i.test(body) ? 'promote' : 'demote'
			let users = quoted ? [m.message[type].contextInfo.participant] : mentionedJid
			if (!users[0]) return reply(`Example:\n${prefix + command} @tag\nOr\n${prefix + command} 𝘳𝘦𝘱𝘭𝘺 𝘢𝘥𝘮𝘪𝘯 𝘮𝘦𝘴𝘴𝘢𝘨𝘦`)
			if (mentionedJid.length > 1) return reply('𝘑𝘶𝘴𝘵 𝘵𝘢𝘨 𝘰𝘯𝘦 𝘱𝘦𝘰𝘱𝘭𝘦')
			await conn.groupParticipantsUpdate(from, users, action).then(() => reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 ${action}`)).catch(reply)
			break
		}
	}
})()
