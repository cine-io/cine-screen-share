"use strict";

function receiveMessage(event) {
  switch (event.data.name) {
  case "cineScreenShareCheckForExtension":
    window.postMessage({ name: "cineScreenShareHasExtension" }, "*")
    break
  case "cineScreenShare":
    chrome.runtime.sendMessage({ action: "getScreen" }, function(id) {
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
}

function main() {
  window.addEventListener("message", receiveMessage, false);
  window.postMessage({name: "cineScreenShareHasExtension"}, "*");
}

main()
