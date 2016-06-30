# Installation

Make sure you have `node` and `npm` installed.
You can get them both bundled together with the [nodejs installer](https://nodejs.org/en/) for windows or mac for free.

After cloning the repository, open a command line, go to directory you cloned the repository to and run `npm install`.

# Build & watch

During development use `npm run watch` (once) to build the project and start watching for changes.

`npm start` will start a local webserver on `http://localhost:3000` so that you can preview your changes.
If you want a different port, set an environment variable `PORT`: `PORT=5000 npm start`.

To enable logs, set `DEBUG` environment variable: `DEBUG=* npm start`.

# Test

To run the tests, run `npm test`.
