![Test Coverage-shield-badge-1](https://img.shields.io/badge/Test%20Coverage-100%25-brightgreen.svg)

# Node Module Seed

A repo to kickstart your next typescript private node module.

### Whats included:

* [Typescript](https://www.typescriptlang.org/) - typed superset of JavaScript
* [GruntJs](https://gruntjs.com/) - task and build tool
* [Jasmine](https://jasmine.github.io/) - tests written in Jasmine
* [Istanbul](https://istanbul.js.org/) - test coverage
* [Webpack](https://webpack.js.org/) - module bundler

# Getting started

1. To start your new node module using this seed app, clone this repo to a new
directory:

```
git clone https://github.com/nathan-andosen/node-module-seed.git my-module-name
cd my-module-name
git remote rm origin
```

2. Now you can start working on your module. Delete both classes in the _/src_ directory and both of the spec files in the _/spec/ directory. __IMPORTANT:__ Do not delete the _always.spec.ts_ file just yet, you always need a spec file so that the generated output goes into the directory _/compiled/src/_. Once you create your own spec file, you can delete the _always.spec.ts_ file.

# Development

``npm run init`` - Setup the app for development (run once after cloning)

``npm run dev`` - Run this command when you want to work on this app. It will
compile typescript, run tests and watch for file changes.

## Distribution

``npm run build -- -v <version>`` - Create a distribution build of the app.

__-v (version)__ - _[Optional]_ Either "patch", "minor" or "major". Increase
the version number in the package.json file.

The build command creates a _/compiled_ directory which has all the javascript
compiled code and typescript definitions. As well, a _/dist_ directory is 
created that contains a minified javascript file.

## Testing

_Tests are automatically ran when you do a build._

``npm run test`` - Run the tests. The tests will be ran in a nodejs environment.
You can run the tests in a browser environment by opening the file 
_/spec/in-browser/SpecRunner.html_.

# Using the module

### Typescript

```javascript
import { ClassOne } from 'node-module-seed';
let classOne = new ClassOne();
```

### Javascript (browser)

Simple include the minified file in your page. Webpack is used to compile the 
minified file, it places all the code into a global property called XApp. You
can change this in the _/webpack.config.js_ file.

```
<script src="dist/my-class.js" type="text/javascript"></script>

var classOne = new XApp.ClassOne();
```



## License

MIT © [Nathan Anderson](https://github.com/nathan-andosen)