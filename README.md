# React Coding Challenge

###### Built by Ross Hazelett

## Purpose

This app is my submission to a react coding challenge.
In short, the primary requirements were:

1. Make an app for a struggling local movie theater
2. Access a third party API
3. Show a Discover Movies section that returns movies and displays them by popularity
4. Allow user to search for movies and return movies from the API based on their search query
5. Filter movies by their 1-10 rating using a 5 star system
6. Overall design is less important than the functionality of the code

## Notable Design Features

##### State Management

I used Redux for state management and API calls. More specifically Redux Toolkit, which I learned while building this project and came to love for it's simplicity and the way it's organized. There were a few different ways I could have organized the project. I wanted to show a variety of React skills in this project, so I used App level state, prop drilling, as well as global redux state to handle all the various functionality.

##### Filtering

I chose to keep filtering within the component right before rendering. There are other ways I could have done this. I could have populated a separate list in redux derived from the data returned from the api, and I could have used a redux selector.

##### Modals

I used a package called react-spring-modal to handle the modal for Detail View. I am a big fan of react-spring, a wonderful animation library. React-spring-modal is build on top of the functionality of react-spring, and it seemed like a simple and clean solution to what I needed for this project.

##### Nav Links

I included nav links just to make it feel like a real website. Since navigation to different pages was outside the scope of the challenge, I didn't include any nav link functionality.

## Technology

##### React Client

- The entire client was built in React

##### Back End

- The back end was a third party api called "themoviedb"

##### Redux Toolkit

- Which has Redux Thunk built in

##### React Spring Modal

- A great modal library

##### CSS Modules

- Keeps class names scoped to component

## Try Out My App

1. I deployed the app to Netlify [here](https://react-code-challenge-ross-hazelett.netlify.app/)
2. The Github repository for the React client is [here](https://github.com/noobiwankenoobi/react-code-challenge) - clone or download project from here
