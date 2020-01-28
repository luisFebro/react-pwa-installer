# react-pwa-installer
[![npm (scoped)](https://img.shields.io/npm/v/react-pwa-installer.svg)](https://www.npmjs.com/package/react-pwa-installer)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-pwa-installer.svg)](https://www.npmjs.com/package/react-pwa-installer)
[![GitHub license](https://img.shields.io/github/license/luisFebro/react-pwa-installer)](https://github.com/luisFebro/react-pwa-installer)


Turn your React Site into [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction  ) App for Android, iOS and Desktop with a customizable banner

<img src="screenshot.jpeg" align="right" title="Screenshot" width="200px">

## What is it?

`react-jwt-installer` allows you to easily inform visitors that your React Site is installable and a native-like app can be placed on a smartphone or desktop's home screen for a more integrated, fast and smooth access through the app. A banner will appear with a customizable title, icon and colors and offering your new App installation.

## Installation

```shell
$ npm i --save react-pwa-installer
```

## Usage

```javascript
import PwaInstaller from 'react-jwt-installer';
```

Then add the component to the main component of your app:

```js
            ...
            <AllModals />
            <PwaInstaller
                title="<strong>Download</strong>our app to homescreen<br />and have a faster access experience"
                icon={`/favicon/mobile-icon-192x192.png`}
            />
        <Footer />
    </BrowserRouter>
    );
}
```

## Options

All options are passed as props.

| Prop                     | Type     | Description                      |
| ------------------------ | -------- | -------------------------------- |
| `icon (mandatory)`                  | string   | Icon for banner. This need to be a relative path where your icon is located in your project                  |
| `title (optional)`                 | string   | Your title for the banner. Note that you can add html tags to customize or even break rows with a HTML parser         |
| `backgroundColor (optional)`                  | string   | the background color can also be gradients or nice color patterns like those [here](https://gradienta.io)                  |

## Contributing

I would appreciate feedbacks for improvements, feel free to open an issue or a pull request [here](https://github.com/luisFebro/react-pwa-installer/pulls)!

## License

`react-pwt-installer` was created by [@luisFebro](https://github.com/luisFebro). It is available under the MIT license. See the [LICENSE.md](https://github.com/luisFebro/react-pwa-installer/blob/master/LICENSE) file for more info.

## Disclaimer

Please, note that this package is still under construction and it may not work in your project as expected. Soon it will be ready to shine.