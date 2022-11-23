console.log("background: working!")

browser.runtime.onMessage.addListener(({ videoId }) => {
  if (videoId.length !== 11) return

  return fetch(`https://www.youtube.com/watch?v=${videoId}`, {
    headers: { "User-Agent": "Mozilla/5.0 AppleWebKit Chrome/999 Safari" },
  })
    .then((v) => v.text())
    .then((body) => {
      const code = body.match(/ytInitialPlayerResponse\s*=\s*(\{.*?\});/)?.[1]

      return JSON.parse(code)
    })
})
