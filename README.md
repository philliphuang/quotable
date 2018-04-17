# quotable
CS179 Project 2  
Team TemporoParietal Junction: Tiffany Yu, Phillip Huang, Joy Li  
Found live here: https://tyu268.github.io/quotable/

## Setup

This web app uses React and React Redux. First, clone the repository. Then, to install the dependencies, run
```
cd quotable
npm install
```
Once the dependencies are installed, you may view the application by running `npm start`. This will allow for live reloading as you edit any of the files in the app.

## Deployment

Ensure that the `homepage` field in `package.json` is pointing to the desired GitHub Page URL. Then, run `npm run deploy` to create a production build and deploy to the page.

## Documentation

We built this concept as a single-page app using React and Redux. Relevant code can be mostly found in the `src` folder. Within `src`, the main pages of the app can be found in the `containers` folder, and small UI components can be found in the `components` folder. 