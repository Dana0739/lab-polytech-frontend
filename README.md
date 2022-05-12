# Frontend

This project is a study frontend project made by Dana Zhetesova.
It was created with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

+ Student: Zhetesova Dana
+ Unit: Institute of Physics and Mechanics
+ Course: Magistracy, 1st course
+ Group: 5040102/10101

# Routes

+ `/auth` - log in or sign up page
+ `/employees` - shows an employees table, which can be sorted, filtered and paginated. If you are *authorised* you can also add new employee and edit or delete existing one.
+ `/employees/:{id}` - edit employee. You can do this if you are *authorised*

# Contributing
Pull requests are not welcome. This is an educational project that will never be used and developed for production, but you still can donate.

## Installation
```bash
git clone https://github.com/Dana0739/lab-polytech-frontend.git
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Project structure
+ `app.*` - main component + routing + dependencies
  + `authorisation component` - manage authorisation page `/auth`
  + `create employee form component` - manage creation form part on page `/employees`
  + `edit employee form component` - manage edit employee page `/employees/:{id}`
  + `employees table component` - manage table of employees part on page `/employees`
  + `filter sort form component` - manage filtering, sorting and paginating form part on page `/employees`
  + `header component` - manage header part (log out, log in, go back) on pages `/employees` and `/employees/:{id}`
  + `model` - entities
  + `service` - crud services
    + `authorization service` - CRUD to backend `/auth` + managing auth token in local storage
    + `employees service` - CRUD to backend `/employees`

###Useful links about managing dependencies
https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version
es5BrowserSupport - deleted in angular.json
https://stackoverflow.com/questions/54373518/ng-serve-command-show-an-error-first-and-in-last-compiled-successfully
https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version
