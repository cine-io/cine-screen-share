var pendingRequestId = null

chrome.runtime.onMessage.addListener(function (msg, sender, cb) {
  console.log("msg:", msg)
  if (!msg) return true

  switch (msg.action) {
  case "getScreen":
    pendingRequestId = chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], sender.tab, function (id) {
      cb(id)
    })
    break
  case "cancelGetScreen":
    if (pendingRequestId != null) {
      chrome.desktopCapture.cancelChooseDesktopMedia(pendingRequestId)
      pendingRequestId = null
    }
    break
  }

  return true
})
