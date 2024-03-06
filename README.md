### Available scripts

`yarn install` - install dependencies

`yarn start` - run development server

`yarn build` - build distributor package

`yarn test` - run tests on jest

### About the project

You can view project here: https://users-list-react-js.vercel.app/

1) Modular Application Architecture
2) The modules are in src/modules
3) Components are in src/kit (UI kit)
4) Data Store: Redux (src/store)

10 tests were written for the project in jest, which test the main functionality of the project - search, filtering, highlighting users

### Project functionality

1) get a list of users by REST API
2) display users
3) deleting users
4) users recovery
5) user search by name, username, email
6) color highlighting what we are looking for

### Technical task

You need to create a page with a list of users downloaded from https://jsonplaceholder.typicode.com/users. List users. Display the fields name, username and email in the list. Each user should have a button to remove him from the list. The page needs a filter to search for a user in the form of a single text field. The search must be performed using the name, username and email fields. When performing a search in the list, you need to highlight parts of the text that match the value in the filter. You also need to add a Reset button, which will reset the filter and restore deleted users.

### Node version

The project is made on nodejs v21.6.1, yarn v1.22.21, any current version will do

### Stack

TypeScript, React, Redux, Saas, HTML5, Jest
