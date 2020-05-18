# i18n Angular
<p align=“center”>
    <img *src*=“./src/assets/i18n-angular.gif” *alt*=“i18n-angular”/>
</p>


This project is a demonstration of how to internationalisation an Angular application. The project was generated with [~Angular CLI~](~https://github.com/angular/angular-cli~) version 8.3.23.

Here you can see the application running using the locales:
- English
- Spanish
- Portuguese

## Run application
To run this application you can choose to run in development or production, but:

- If you run in development the project doesn’t work when you click on buttons, this because when you run in development you need pass a configuration flag set what locale you want to run. 
- If you generate a production version, then you will need to use a proxy to redirect your request. In my case, I’m using the __NGINX__

## Development server

Run `ng serve` for a dev server and the project load default `messages.xlf` file. 

> The default locale for Angular applications when not configured is __en-US__

### Run with an English locale
Run `ng serve --configurations=en` or just `ng serve --c=en` for a dev server and the project will load the `messages.en.xlf`

> Navigate to `http://localhost:4200/en`. The app will automatically reload if you change any of the source files.

### Run with a Spanish locale
Run `ng serve --configurations=es` or just `ng serve --c=es` for a dev server and the project will load the `messages.es.xlf`

> Navigate to `http://localhost:4200/es`. The app will automatically reload if you change any of the source files.

### Run with a Portuguese locale
Run `ng serve --configurations=pt` or just `ng serve --c=pt` for a dev server and the project will load the `messages.pt.xlf`

> Navigate to `http://localhost:4200/pt`. The app will automatically reload if you change any of the source files.


## Build

### Default build
Run `ng build` to build the project. 

### Locales build
Run `ng build --c=production-en && ng build --c=production-es && ng build --c=production-pt` to build the project for all locales. 

The build artefacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

