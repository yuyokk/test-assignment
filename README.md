# Test assignment project

Project is bootstrapped with [create-react-app](https://facebook.github.io/create-react-app/)

Deployed to Netlify <https://vonq-test-assignment.netlify.com>

## Dev notes

- No Router/Redux used
- Used plain CSS (BEM methodology) without any preprocessors or libraries
- ~~Used [lazy](https://github.com/yuyokk/test-assignment/blob/59c3ba4595caab73048c029771f6d7f1beb53b4b/src/components/JobPosition/index.js#L3-L4) to code-split Edit/Sumary views~~ Not supported on IE11 :|

### What to improve?

- Make inputs validation more strict:
  - accept values for "A minimum No. years of experience" in range from 1 to 99
  - accept values for "No. of working hours" in range from 1 to 168
  - Min working hours has be to less than Max woking hours value
- Apply red border on checkboxes when user submits the form without selecting "Level of education"
- Increase test coverage
- Use some CSS-in-JS (e.g. [styled-components](https://www.styled-components.com/)) library for common components (Input, Button, Icon etc)

## Running project locally

Inside the project folder, you can run these built-in commands:

- `npm start` - runs the app in development mode on <http://localhost:3000>
- `npm test` - runs test watcher in an interactive mode
- `npm run build` - builds the app for production to the `build` folder
