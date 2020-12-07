# E4E
1. Getting Started with Create React App
2. Chatbot

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Chatbot
[Click here to test API in postman](https://www.getpostman.com/collections/b5a6074f5a6d9278a859)

For user query = ```براہ کرم پانچویں جماعت کے اسلامیات کا پہلا باب کھولیں```
the response is

```{
    "text": "براہ کرم پانچویں جماعت کے اسلامیات کا پہلا باب کھولیں",
    "intents": [
        {
            "id": "680708539259936",
            "name": "lesson",
            "confidence": 0.9995
        }
    ],
    "entities": {
        "chap:chap": [
            {
                "id": "416998306151215",
                "name": "chap",
                "role": "chap",
                "start": 38,
                "end": 42,
                "body": "پہلا",
                "confidence": 0.9919,
                "entities": [],
                "value": "پہلا",
                "type": "value"
            }
        ],
        "sub:sub": [
            {
                "id": "758951058298102",
                "name": "sub",
                "role": "sub",
                "start": 26,
                "end": 34,
                "body": "اسلامیات",
                "confidence": 0.9927,
                "entities": [],
                "value": "اسلامیات",
                "type": "value"
            }
        ],
        "class:class": [
            {
                "id": "665386327477421",
                "name": "class",
                "role": "class",
                "start": 9,
                "end": 16,
                "body": "پانچویں",
                "confidence": 0.986,
                "entities": [],
                "value": "پانچویں",
                "type": "value"
            }
        ]
    },
    "traits": {}
}```
