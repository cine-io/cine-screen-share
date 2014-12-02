# cine-screen-share

Allow screen-sharing through WebRTC in a desktop (browser) environment.
Currently only supported with Chrome (via an extension).

## Configure and Start the Server

Next, you can run the Node.js web server (with self-signed SSL support):

```bash
$ cd web
$ npm install
$ node server.js
```

Then, browse to http://localhost.cine.io:9090 or https://localhost.cine.io:9443

## Getting Started on Chrome

Chrome only allows screen sharing via an extension with the
[chrome.desktopCapture API][chrome-desktop-capture]. It also requires that the
data is sent over SSL.

First, install the extension locally:

1. Open [chrome://extensions][chrome-extensions].
2. Click the `Load unpacked extension...` button.
3. Select the [chrome-extension][chrome-extension] folder and click `Select`.

If you want to update the version on the Chrome Web Store, you can visit the
[developer dashboard][chrome-developer-dashboard] to upload a new zip file of
everything in the [chrome-extension][chrome-extension] folder.

## Getting Started on Firefox

Firefox screen-sharing only works with Firefox version 33.1 or later. To make
it work, you'll need to edit your advanced preferences:

1. Open [about:config][firefox-config].
2. In the search box, type `media.getusermedia`.
3. Ensure that the `media.getusermedia.screensharing.enabled` setting is `true`.
4. Append `cine.io,*.cine.io` to the `media.getusermedia.screensharing.allowed_domains` setting.


<!-- external links -->

[chrome-desktop-capture]:https://developer.chrome.com/extensions/desktopCapture
[chrome-extensions]:chrome://extensions
[firefox-config]:about:config
[chrome-extension]:/chrome-extension
[chrome-developer-dashboard]:https://chrome.google.com/webstore/developer/dashboard
