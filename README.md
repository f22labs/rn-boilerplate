## :plate_with_cutlery: F22 React Native Boilerplate :plate_with_cutlery:

This is a simple boilerplate that we for our react native projects.

# Technologies Used

- react-navigation
- axios
- styled-components
- formik and yup
- react-native-simple-store
- react-native-elements
- react-native-dotenv
- react-native-dropdownalert

## :arrow_down: How to use it

Make sure you have `yarn` installed on your machine.

1.  Clone this project and delete `.git` folder.
2.  Run `yarn` to install the dependencies.
3.  Then `yarn rename [YOUR_PROJECT_NAME]` to rename the project.
4.  Then you're good to go.

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
