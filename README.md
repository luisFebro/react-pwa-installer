#react-pwa-installer
[![GitHub license](https://img.shields.io/github/license/luisFebro/react-pwa-installer)](https://github.com/luisFebro/react-pwa-installer)

Turn your React Site into PWA App for Android, Ios and Desktop

<img src="screenshot.jpeg" align="right" title="Screenshot" width="200px">

## What is it?

`react-jwt-installer` allows you to easily inform visitors that your React Site is installable and a native-like app can be placed on a smartphone or desktop's home screen for a more integrated, fast and smooth access through the app. A banner will appear with a customizable title, icon and colors and offering your new App installation.

## Installation

```shell
npm i --save react-pwa-installer
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
                icon={`/favicon/android-chrome-192x192.png`}
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
| `title`                 | string   | Custom title for banner          |
| `icon`                  | string   | Icon for banner                  |
| `backgroundColor`                  | string   | the background color can also be gradients or nice color patterns like those [here](https://gradienta.io)                  |

## Contributing

I would appreciate feedbacks for improvements, feel free to open an issue or a pull request [here](https://github.com/luisFebro/react-pwa-installer/pulls)!

## License

`react-pwt-installer` was created by [@luisFebro](https://github.com/luisFebro). It is available under the MIT license. See the LICENSE file for more info.
