This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Name

GIPHY Search

## Appoarch 
* Choose to use React & Redux to completed.
* Go to the website https://developers.giphy.com/, register for a API key.
* Find the search endpoint in document, read the part of request parameters.For the requirement, 
  get the request url: http://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=USER_INPUT_ITEM  
* In main Component <App />, include the <SearchBox /> and result set of the image elements.
* In <SearchBox />, binding this.state.field to input value with the onChange event. And dispatch an action of "GET_GIFS"
  when user click the search button.
* For getGifs(), using axios GET to retrieve the response data from GIPHY API.
* Then depends on action type of "GET_GIFS", filter the result for update the state.
* In <App /> render function, using map function to return a list of <div class="grid-item"></div> elements.Then
  put it in JSX in <App /> using expression like {gifsItems}.
* For css hover animation, choose to use transform: scale(1.2) and opacity of <p> text of ID.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
