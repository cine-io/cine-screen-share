# cine-screen-share

Allow screen-sharing through WebRTC in a desktop (browser) environment.
Currently only supported with Chrome (via an extension).

## Getting Started on Chrome

Chrome only allows screen sharing via an extension with the
[chrome.desktopCapture API][chrome-desktop-capture]. It also requires that the
data is sent over SSL.

First, install the extension locally:

1. Open your [Chrome Extensions Settings][chrome-extensions].
2. Click the `Load unpacked extension...` button.
3. Select the [chrome-extension][chrome-extension] folder and click `Select`.

Next, you can run the Node.js web server (with self-signed SSL support):

```bash
$ cd web
$ npm install
$ node server.js
```

Then, browse to https://localtest.me:9090

If you want to update the version on the Chrome Web Store, you can visit the
[developer dashboard][chrome-developer-dashboard] to upload a new zip file of
everything in the [chrome-extension][chrome-extension] folder.

<!-- external links -->

[chrome-desktop-capture]:https://developer.chrome.com/extensions/desktopCapture
[chrome-extensions]:chrome://extensions
[chrome-extension]:/chrome-extension
[chrome-developer-dashboard]:https://chrome.google.com/webstore/developer/dashboard
