# AngGl 02/02/17

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

install 3rd party libraries
```shell
npm install jquery golden-layout bootstrap --save

npm install
```
copy js and css files to their respective assets folder

-- getting an error when accessing the css
files from the assets folder.  Using ../node_modules is working for now.  Need to install font-awesome?

add the following to the angular-cli.json file

```shell
    "styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.css",
    "../node_modules/golden-layout/src/css/goldenlayout-base.css",
    "../node_modules/golden-layout/src/css/goldenlayout-dark-theme.css",
    "styles.css"
    ],
    "scripts": [
    "assets/js/jquery.js",
    "assets/js/bootstrap.js",
    "assets/js/goldenlayout.js"
    ],

```
create new component
```shell
ng generate component panels

```

Thank you to david-ergoss http://embed.plnkr.co/QEATW0/ for getting panels in my project

02/03/17 -- time to add a chart


## App structure

```
...
|-- config      # directory with build configs and tools
|   ...
|   |-- html-elements-plugin       # webpack plugin example
|   ...
|   |-- karma.conf.js              # unit tests config
|   |-- protractor.conf.js         # e2e tests config
|   ...
|   |-- webpack.common.js          # webpack configs for different environments
|   |-- webpack.dev.js
|   |-- webpack.prod.js
|   |-- webpack.test.js
|   ...
|
|-- src
|   |-- app
|   |   |-- +feature-module-1        # by convension async modules are prefixed with + sign
|   |       |-- feature-module-1.component.html
|   |       |-- feature-module-1.component.ts
|   |       |-- feature-module-1.module.ts
|   |       |-- feature-module-1-routing.module.ts
|   |   |-- +feature-module-2
|   |   ...
|   |   |-- core                      # core module for app wide injectable service instancess
|   |       |-- api
|   |       |-- guards                # prevent core module of being loaded twice
|   |       |-- core.module.ts
|   |
|   |   |-- shared                    # dir with common directives, components, services, pipes
|   |       |-- chat
|   |       |-- forms
|   |       |-- graphs
|   |       ...
|   |       |-- smartadmin.config.ts  # smartadmin setup file
|   |       |-- smartadmin.module.ts  # shared module useful for reexport common functionality
|   |   ...
|   |   |-- app.module.ts       # app root module
|   |   |-- app.resolver.ts     # here you can async fetch data for app before init
|   |   |-- app.routing.ts      # top routes definition
|   |   |-- app.service.ts      # global app state service
|   |   |-- environment.ts      # env specific providers
|   |
|   |-- assets           # static resources folder
|   |   |-- css
|   |   |-- fonts
|   |   ...
|   |-- custom-typings.d.ts      # typescript definitions tweaks
|   |-- index.html
|   |-- main.browser.ts          # app entry point
|   |-- polyfills.browser.ts     # polyfills for browsers
|   |-- vendor.browser.ts        # common vendor chunk
|
...
|-- package.json
...

```

https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14 refer to for changes

# Get Angular 2 QuickStart seed (1st logged attempt)

Go to [angular.io](https://angular.io/docs/ts/latest/guide/setup.html) for detailed instructions.

```shell
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
```
# Install 3rd party apps using npm

```shell
npm install jquery --save
npm install @types/jquery --save-dev
npm install amcharts --save
npm install @types/amcharts --save-dev
npm install google-maps --save
npm install @types/google-maps --save-dev
npm install bootstrap --save
npm install @types/bootstrap --save-dev

npm install golden-layout --save

npm install
```

```shell
npm install --save jquery amcharts google-maps bootstrap golden-layout

npm install --save-dev @types/jquery @types/amcharts @types/google-maps @types/bootstrap

npm install
```

so frustrating
https://github.com/angular/quickstart/issues/370


# Myproj  (attempt #2)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

ng new my_proj
cd my_proj

## https://github.com/angular/angular-cli#3rd-party-library-installation

npm install jquery --save
npm install @types/jquery --save-dev
npm install amcharts --save
npm install @types/amcharts --save-dev
npm install google-maps --save
npm install @types/google-maps --save-dev
npm install bootstrap --save
npm install @types/bootstrap --save-dev

npm install golden-layout --save

## Create typings.d.ts file for any libraries that do not have @types available:
declare module 'golden-layout';

## To use the library, add the following code to the component:

import * as goldenLayout from 'golden-layout';
goldenLayout.method();

## https://github.com/angular/angular-cli#global-library-installation

npm install bootstrap@next ('@next' didn't work for me, but bootstrap is working)
npm install

## edit the angular-cli.json to include bootstrap files - see github for details

npm install

01/31/17
## Using cli generate components panels
## by 11:30 I can't get past this error: __WEBPACK_IMPORTED_MODULE_1_golden_layout__ is not a constructor
## Thinking of making the switch back to quickstart so I can edit the systemjs.config -- I cannot figure
## out how to get webpack to look for golden layouts index.ds.t

moved onto:

# My Installation using smart admin theme which uses webpack (attempt #3)

[ Download ](https://wrapbootstrap.com/theme/smartadmin-responsive-webapp-WB0573SK0) Smart Admin theme.
I used the Angular 2 - lite version so that jquery and bootstrap would already be included

using command prompt:
```shell
ng init
```
answer 'no' when asked to overwrite existing files.

**

add Golden Layout

```shell
npm install golden-layout --save

npm install
```

jquery was out of date - update libraries
```shell
npm update
```

When it's time to use the seed project, these libraries need to be installed:
```shell
npm install --save jquery amcharts google-maps bootstrap golden-layout

npm install
```
install jquery-ui also?

Attempt to add new component using cli.  Error:  You have to be inside an angular-cli project in order to
use the generate command.  So 'ng init' did not work.  Figure it out later.  Install new components manually.

Kept getting crazy errors.

This sucks ...
