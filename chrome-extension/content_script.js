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

function main() {
  window.addEventListener("message", receiveMessage, false);
  window.postMessage({name: "cineScreenHasExtension"}, "*");
}

main()
