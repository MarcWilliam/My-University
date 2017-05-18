My-University
===============

A Course Management System and social media for universities

docs folder
-------------

* ER diagram
* class diagram
* SRS
* SDD

database
----------

* db export file

back end
----------

1. make a copy of the config file in `src/config-example.ts` to `src/config.ts`
1. `npm install` to install all required tools.

* `npm run build` build the project
* `npm run watch` to keep ts watching and node js restart on every change
* `npm run serve` build then serve the nodejs 
* `npm run test` run mocha tests


front end
-----------

1. `npm install` to install all required tools.

* `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* `ng generate component {component-name}` to generate a new component. You can also use `directive`, `pipe`, `service`, `class` and `module`.
* `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).