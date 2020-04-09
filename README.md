# TennisClubs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



### Tennis Tournaments App

About: application about management of tennis clubs and tournaments.

Application Areas:
- Guest
- User
- Admin

Guest Area:
- Register a user profile and Login
- View all tennis clubs and tennis tournaments

User Area:
- Logout 
- View all tennis clubs and tennis tournaments
- View club and tournament Details
- View User profile with attended tournaments
- Attend tournaments
- Leave tournaments

Admin Area:
- Logout 
- View all tennis clubs and tennis tournaments
- View club and tournament Details
- View User profile with attended tournaments
- View club tournaments
- Attend tournaments
- Leave tournaments
- Create tennis clubs and tournaments
- Update tennis clubs and tournaments
- Delete tennis clubs and tournaments


### Folder Structure

- app
    - core
        - components
        - guards
        - interceptors
        - services
    - store
        - tennis-clubs
        - tennis-tournaments
        - users
    - tennis-clubs
        - shared
        - tennis-club
        - tennis-club-create
        - tennis-club-details
        - tennis-club-edit
        - tennis-club-form
        - tennis-club-list
    - tennis-tournaments
        - shared
        - tennis-tournament
        - tennis-tournament-create
        - tennis-tournament-details
        - tennis-tournament-edit
        - tennis-tournament-form
        - tennis-tournament-list
        - tennis-tournament-list-by-club
    - users
        - shared
        - user-login
        - user-profile
        - user-register
