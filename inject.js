console.log("yt-d extension %cenabled%c!", "color:lightgreen", "")

function ytdDirectFetch(videoId) {
  return new window.Promise((resolve) =>
    browser.runtime.sendMessage({ videoId }).then((playerResponse) => resolve(cloneInto(playerResponse, window)))
  )
}

exportFunction(ytdDirectFetch, window, { defineAs: "ytdDirectFetch" })
