# My aproach
Hello, first of all I want to let you know that my knowledge with React is basic, although I develop this fronted app with the idea of being efficient and correct in relation to design and architecture of React.

## App component
My aproach was to create a main parent component that contains a Toolbar component that it set three times and recives as props the "name", the "description" and one of the three content components (Basic, Choropleth or Gradient). Before this I get the data and split into three variables (basicItem, choroplethItem, gradientItem).

## Toolbar component
Props:
- `name`: The title of the Toolbar which gets from the property "name"
- `description`: The description that is render in the Modal component which gets from the property "description"
- `contentComponent`: The content of one of three components, at the same time this components receives the data of one the three variables 

We can split this component into three parts:
- `navbar`: Here is where I set the title of the toolbar with the prop "name" and the icons that I use as buttons (info button, visibility button and collapse button).
- `contentComponent`: Here is a div tag with the className "accordionContent", inside of this div I render the content of my components (Basic, Choropleth or Gradient).
- `Modal component`: At the end is a Modal component that I use to display the prop "description"  

## Basic component
Props:
- `data`: Gets the data of the variable "basicItem"

This component render the HTML content with the data of "basicItem"

## Choropleth component
Props:
- `data`: Gets the data of the variable "choroplethItem"

This component render the HTML content with the data of "choroplethItem"

## Gradient component
Props:
- `data`: Gets the data of the variable "gradientItem"

This component render the HTML content with the data of "gradientItem". In order to render the grandient effect I create a string variable (myStyle) that contians the style and I pass this variable into a object "styleObject" with a property "background".

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
