"use strict";

function receiveMessage(event) {
  switch (event.data.name) {
  case "cineScreenShare":
    chrome.runtime.sendMessage({ action: "getScreen" }, function(id) {
      console.log("callback id:", id)
      window.postMessage({ name: "cineScreenShareResponse", id: id }, "*")
    })
    break
  case "cineCancelScreenShare":
    chrome.runtime.sendMessage({ action: "cancelGetScreen" })
    break
  }
}

function notifyHasExtension() {
  window.postMessage({name: "cineScreenShareHasExtension"}, "*");
  var hasExtensionNode = document.createElement('div')
  hasExtensionNode.id = 'cine-screenshare-has-extension'
  hasExtensionNode.style.display = 'none'
  document.body.appendChild(hasExtensionNode)
}

function main() {
  window.addEventListener("message", receiveMessage, false);
  notifyHasExtension()
}

main()
