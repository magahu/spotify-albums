#MySpotifyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Auth configuration

For obtaining the needed token fot this app first sing in your Spotify account and 
generate the token in the following page: 
(https://developer.spotify.com/console/get-track/?id=&market=)

Then, change the token in auth_token on the following code files:

*core/services/albums/albums.service
*core/services/tracks/tracks.service


##Some views of this app


![Albums page](README_SCREENSHOTS/albums.png "Albums page")

![Albums page](README_SCREENSHOTS/album-detail.png "Album detail")

![Albums page](README_SCREENSHOTS/track-detail.png "Track detail")


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
