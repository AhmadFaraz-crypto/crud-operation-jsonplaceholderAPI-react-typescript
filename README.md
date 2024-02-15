<br />

<div align="center"><strong>CRUD Operations (JSONPLACHOLDER APIS)</strong></div>
<br />
<div align="center">It is simple crud operations app using jsonplaceholder APIS, where user can add, update and delete posts.</div>

<br />


## Quick start


1.  Make sure that you have Node.js v16.15.1 and npm v5 or above installed.
2.  Clone this repo using `https://github.com/AhmadFaraz-crypto/crud-operation-jsonplaceholderAPI-react-typescript.git`
3.  Move to the appropriate directory: `cd crud-operation-jsonplaceholderAPI-react-typescript`.<br />
4.  Run `yarn install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `yarn start` to see the example app at `http://localhost:3000`._
5.  Run `yarn test` to run test cases.
6.  Run `yarn run clean` to delete the example app.

## Running End-to-End Tests with Playwright

To run end-to-end tests with Playwright, follow this command:

```sh
npm run test-e2e
```

By default, the tests will run in headless mode. To run the tests in non-headless mode, run:

```sh
npm run test-e2e -- --headed
```

To run the tests in a specific browser, run:

```sh
npm run test-e2e -- --project=chromium
```

To run the tests only in a specific file, run:

```sh
npm run test-e2e -- fileName.spec.ts
```

To debug a test, you can either run:

```sh
npm run test-e2e -- --debug fileName.spec.ts
```

or you can use a combination of `await page.pause()` and `npm run test:e2e -- --headed fileName.spec.ts`.


## Demo

https://youtu.be/Pk5ZZMorhyw