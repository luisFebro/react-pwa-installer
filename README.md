# react-pwa-installer
[![npm (scoped)](https://img.shields.io/npm/v/react-pwa-installer.svg)](https://www.npmjs.com/package/react-pwa-installer)
[![GitHub license](https://img.shields.io/github/license/luisFebro/react-pwa-installer)](https://github.com/luisFebro/react-pwa-installer)


Turn your React Site into [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction) App for Android, iOS and Desktop with a customizable banner.

<img src="screenshot.jpeg" align="right" title="Screenshot" width="200px">

## 👀 What does this package do?

`react-pwa-installer` allows you to easily inform visitors that your React Site is installable and a native-like app can be placed on a smartphone or desktop's home screen for a more integrated, fast and smooth access through the app. A banner will appear with a customizable title, icon and colors and offering your new App installation. You can also control when this component should appear and how.  👌

## 🔥 Live Demo
You can see one example from the customized installation banner here: [awesome-pwa-demo](https://luisfebro.github.io/awesome-pwa-demo)

## 📖 Instructions
Note that this component's installation is a piece in the process of building a complete PWA App. I will write an article on Medium Media to a complete step-by-step to get it done from `manifest.json` to `service worker` that requires to run your app. Let me know if you have a genuine interest about that, contact me here: mr.febro@gmail.com

## 🔧 Installation

```shell
$ npm i --save react-pwa-installer
```

## 👈 Usage

```javascript
import PwaInstaller from 'react-pwa-installer';
```

Then add the component to the main component of your app:

```js
            ...
            <AllModals />
            <PwaInstaller
                title="<strong>Download your awesome app here</strong><br />and have a faster and awesome<br />access experience"
                icon={`/icons/cool-192.png`}
            />
        <Footer />
    </BrowserRouter>
    );
}
```

## ⚙️ API - props

These are props that allow you customize the component as follows:

| Prop                     | Type     | Default Value |Description                      |
| ------------------------ | -------- | -------- | -------------------------------- |
| `icon (mandatory)`                  | string   | - | Icon for banner. This need to be a relative path where your icon is located in your project                  |
| `title (optional)`                 | string   | `add to homescreen` | Your title for the banner. Note that you can add html tags to customize or even break rows with a HTML parser         |
| `color (optional)`                  | string   | `black` | the color for both the closing button and action text to call your users to download your app                  |
| `backgroundColor (optional)`                  | string   | `white` | the background color can also be gradients or nice color patterns like those [here](https://gradienta.io)                  |
| `run (optional)`                  | boolean   | `true` | this allow you run the banner programmatically. You can use something like `useState` to switch the state after some user's action (e.g after user registration) |

## 💪 Contributing

I would appreciate feedbacks for improvements or new ideas... feel free to open an issue or a pull request [here](https://github.com/luisFebro/react-pwa-installer/pulls)!

## ©️ License

`react-pwt-installer` was created by [@luisFebro](https://github.com/luisFebro). It is available under the MIT license. See the [LICENSE.md](https://github.com/luisFebro/react-pwa-installer/blob/master/LICENSE) file for more info.

## ⚠️ Disclaimer

Please, note that this package is still under construction and it may not work in your project as expected. Come back a few hours...
