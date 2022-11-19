(async () => {
	switch (true) {
		case /^>?> /.test(body): {
			if (!isOwner) return
			let teks
			try {
				teks = await eval(`(async () => { ${(/^>>/.test(body) ? 'return ' : '') + q} })()`)
			} catch (e) {
				teks = e
			} finally {
				reply(util.format(teks))
			}
			break
		}
		case /^[$] /.test(body): {
			if (!isOwner) return
			await reply('𝘌𝘹𝘦𝘤𝘶𝘵𝘪𝘯𝘨...')
			cp.exec(q, (stderr, stdout) => {
				if (stderr) reply(stderr)
				if (stdout) reply(stdout)
			})
			break
		}
		case /^setprefix$/i.test(command): {
			if (!isOwner) return
			global.prefix = q
			reply(`𝘊𝘩𝘢𝘯𝘨𝘦𝘥 𝘵𝘰 𝘱𝘳𝘦𝘧𝘪𝘹 ${q}`)
			break
		}
		case /^(self|publi(k|c))$/i.test(command): {
			if (!isOwner) return
			global.mode = /self/i.test(body) ? '𝘚𝘦𝘭𝘧' : '𝘗𝘶𝘣𝘭𝘪𝘤'
			reply(`𝘊𝘩𝘢𝘯𝘨𝘦𝘥 𝘮𝘰𝘥𝘦 𝘵𝘰 ${mode}`)
			break
		}
		case /^set(ppbot|botpp)$/i.test(command): {
			if (!isOwner) return reply(mess.owner)
			if (/image/.test(type) || isQuotedImage) {
				let media = await conn.downloadM(quoted ? quoted[typeQuoted] : m.message[type], quoted ? typeQuoted.replace(/Message/, '') : type.replace(/Message/, ''))
				await conn.updateProfilePicture(conn.user.jid, media).then(() => reply('Success update profile picture bot')).catch(reply)
			} else if (args[0] && isUrl(args[0])) {
				await reply(mess.wait)
				await conn.updateProfilePicture(conn.user.jid, { url: args[0] }).then(() => reply('Success update profile picture bot')).catch(reply)
			} else reply(`Example:\n${prefix + command} reply image\nOr\n${prefix + command} ${pickRandom(thumbnailUrl)}`)
			break
		}
		case /^join$/i.test(command): {
			if (!isOwner) return reply(mess.owner)
			let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
			let [_, code] = q.match(linkRegex) || []
			if (!code) return reply('𝘪𝘯𝘷𝘢𝘭𝘪𝘥 url')
				await conn.groupAcceptInvite(code).then(async (gid) => {
				let groupMeta = await conn.groupMetadata(gid)
				reply(`Success join group ${groupMeta.subject}`)
			}).catch(reply)
			break
		}
		case /^restart$/i.test(command): {
			if (!isOwner) return
			await reply('𝘙𝘦𝘴𝘵𝘢𝘳𝘵𝘪𝘯𝘨...')
			process.send('reset')
			break
		}
		case /^(broadcast|bc)(group|grup|gc)$/i.test(command): {
			if (!isOwner) return reply(mess.owner)
			let grup = Object.keys(await conn.groupFetchAllParticipating())
			let readMore = (String.fromCharCode(8206)).repeat(4001)
			if (/image|video/.test(type) || isQuotedImage || isQuotedVideo || isQuotedSticker) {
				let media = await conn.downloadM(quoted ? quoted[typeQuoted] : m.message[type], quoted ? typeQuoted.replace(/Message/, '') : type.replace(/Message/, ''))
				for (let id of grup) await conn.sendFile(id, media, '', `${q}\n${readMore}「 All Group Broadcast 」`, m, { ephemeralExpiration: 24*60*60, contextInfo: { forwardingScore: 508, isForwarded: true }})
				reply('Success broadcast..')
			} else if (budy && q) {
				for (let id of grup) await conn.reply(id, `${q}\n${readMore}「 All Group Broadcast 」`, m, { ephemeralExpiration: 24*60*60, contextInfo: { forwardingScore: 508, isForwarded: true }})
				reply('Success broadcast...')
			} else reply('Lahhh..')
			break
		}
	}
})()
