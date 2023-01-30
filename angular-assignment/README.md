# Crud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## steps to follow run project
1. need to install npm before ng serve
2. install the JSON server globally onto your local machine and run npm run json-run command.db.json file is created automatically and run json-server --watch db.json
3.To implement NgRx Data we have to depend on 'NgRx Store', 'NgRx Effects', and 'NgRx Entity', so we have to install all those packages.
a. Command To Install NgRx Store
ng add @ngrx/store@latest
b. Command To Install NgRx Effects
ng add @ngrx/effects@latest
c.Command To Install NgRx Entity
ng add @ngrx/entity@latest
d.Command To Install NgRx Data
ng add @ngrx/data@latest
e.Command To Install NgRx DevTools
ng add @ngrx/store-devtools@latest
4. NgRx data depends on the Model or Entity which is the type for the data to be stored. Each model must be registered in the 'Entity MetaData'.,created car-entity-metadata.ts file.
5. created store folder inside folder interface file and entity and customurl-http-generator file and created a sepatare module for that using lazyloading.
6. dashboard.component.html is displaying html part and dashbaord.component.ts are written logic part. these component is declared in car-module.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
