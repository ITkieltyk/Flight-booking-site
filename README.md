# FlightBooking

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3

This is a mockup of Flight booking site that mimics searching for one way flights in a specified period of time.
It has no back-end yet, so changes are only valid in one sesion.
Application allows to search for flights between cities listed in dragdowns. Flights are generated at main component and cover 60days of random flights with specified flight parameters such as company, duration of flight or plane.
To choose flight from list you have to been logged in. To do so you can use one defined user with credentials below or create own user and use its data to log in.

On next screen you can find flight summary with option to choose places.

Predefined User login: admin@admin.pl,
password: '123456'

## To do:

1. User screen with user personal data and user booked flights
2. Log Out button
3. Backend with MondoDB
4. General styles upgrade

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Manual Testing
