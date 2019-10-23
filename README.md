# :plate_with_cutlery: F22 React Native Boilerplate :plate_with_cutlery:

This is a simple boilerplate that we use for our react native projects.

## :arrow_down: How to use it

Use our starter cli here (https://github.com/f22labs/f22-app-starter)

## Technologies Used

- react-navigation - https://reactnavigation.org/
- axios - https://github.com/axios/axios
- styled-components - https://www.styled-components.com/
- formik and yup - https://jaredpalmer.com/formik/docs/overview, https://github.com/jquense/yup
- react-native-simple-store - https://jasonmerino.me/react-native-simple-store
- react-native-elements - https://react-native-elements.github.io/react-native-elements/
- react-native-dotenv - https://github.com/zetachang/react-native-dotenv
- react-native-dropdownalert - https://github.com/testshallpass/react-native-dropdownalert


## Project Structure

```
 app
├── App.js
├── api
│   ├── config.js                       # Contains the base url and list of urls used for apis
│   └── manager.js                      # Contains common function to call the apis
├── components                          # Contains reusable components used in the app
│   ├── AlertMessage                    # Used for showing dropdown alert
│   │   └── AlertMessage.js
│   ├── Header                          # Contains the custom header related files
│   │   ├── Header.js
│   │   ├── HeaderCenter.js
│   │   ├── HeaderLeft.js
│   │   ├── HeaderRight.js
│   │   └── ScreenWithHeader.js
│   ├── Loader                          # Contains the Loader UI
│   │   └── Loader.js
│   └── NetInfo                         # Contains component for rendering no connection view
│       └── NetInfo.js
├── helpers                             # Helper files
│   ├── StatusBarHeight.js
│   ├── Touchable.js
│   └── validationSchema.js
├── hooks                               # Used for custom hooks
│   ├── useDropDown.js
│   └── useLoader.js
├── navigation                          # Used for navigation related files
│   ├── AppContainer.js
│   └── NavigationService.js
├── providers                           # Contains Context providers used in the app
│   ├── DropDownProvider.js
│   └── LoaderProvider.js
├── screens                             # Contains list of all screens used in the app
│   ├── FirstScreen.js
│   ├── SecondScreen.js
│   └── SplashScreen.js
├── services                            # Contains api services
│   ├── UserService.js
│   └── index.js
├── store                               # Contains config for simple store (offline storage)
│   └── index.js
├── styled_components                   # List of styled components
│   └── StyledCommon.js
└── theme                               # Contains the app theme,fonts and colors
    ├── Colors.js
    ├── Fonts.js
    └── appElementsTheme.js
```

# Misc

## Adding Fonts
 
1. Place fonts in `app/assets/fonts`.
2. `react-native link` to link the fonts.
3. Use your fonts in `app/theme/Fonts` and expose it in your app.


## .env config

 1. Create a `.env` in root of the project and copy contents of `.env.example` into this.
 2. Replace the variable with your preferred variables.
 
## Header Usage

 1. Import the `ScreenWithHeader` component in the the current screen component.
 2. Wrap the entire screen around the `<ScreenWithHeader>` component like below.
 ```
 function FirstScreen() {
  return (
    <ScreenWithHeader>
      <Text>
        First Screen
      </Text>
     // ...   All the other components go here.
    </ScreenWithHeader>
  );
}
```
#### Header Props
| Props | Type | Description |
| ------------- | ------------- |------------- |
| leftComponent | Component | Used for rendering the left component of the header  | 
| centerComponent | Component | Used for rendering the center component of the header  |
| rightComponent | Component | Used for rendering the right component of the header  |

## NetInfo Badge Usage

The NetInfo Badge is extracted into a custom component present in `app/components/NetInfo/NetInfo.js` can be imported into the Header or any custom component to display the badge.

## Custom Hooks Usage

All the custom hooks must be inside the `app/hooks` folder.

` Note - If you are using a context provider, expose them as custom hooks. check existing hooks for reference ` 

#### Included Hooks
| Hooks |  Description |
| ------------- |------------- |
| useDropdown | Used for displaying the Alert Messages | 
| useLoader  | Used for displaying the Activity Indicator  |

## API Manager & Services Usage

 1. The `{base_url}` and the endpoints must be configured in the `config.js` file.
 2. Create your services in the `app/services/{YOUR_SERVICE_NAME}.js` and follow the pattern used in the `app/services/UserService.js` and link the corresponding service in `app/services/index.js` file.
 
## Note

If you find any issues with the docs. Feel free to raise an issue. 
