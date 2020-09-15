# Amirha.com

## New 2020 version TODOs left

- [ ] Update text for project cards
- [ ] Use something like https://www.npmjs.com/package/react-scroll-section for smooth scrolling
- [ ] Refactor history section. Some of the new requirements to consider:
      - Responsive
      - Smother animation
      - One time animation (right now if you scroll to the very and scroll back up, it will cause a reanimation)
      - Proper padding/formatting of boxes and content inside them
- [ ] Investigate: sticky top nav?
- [ ] Optimise mobile view formatting
- [ ] clean up main app.js and divide into components
- [ ] Remove old components/file/code and clean up

## Story book

I'm experimenting with storybook for developing components in isolation before the app.

### Why

To design the system with components in mind  to encourage code modularisation
and reusability. This will make iterative changes to the website easier to add
thus allowing the website to hae independently evolving components

### Setup

Following  https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/

Ran `https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/`

To start it up:

```bash
npm run storybook
```

** BELOW IS README FROM CRA (to be modified and useful sections to be kept) **
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Favicon

Favicon was generated at https://favicon.io/favicon-generator/?t=AA&ff=Roboto&fs=80&fc=%23FFFFFF&b=rounded&bc=%23293d5a

## Timeline component

The animation for this component was created based on this article: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
