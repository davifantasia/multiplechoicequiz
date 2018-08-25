// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCB7InKCkEXgzNbN4x202Zeqtoa6I-ff6g",
    authDomain: "muiltiplechoicequiz.firebaseapp.com",
    databaseURL: "https://muiltiplechoicequiz.firebaseio.com",
    projectId: "muiltiplechoicequiz",
    storageBucket: "muiltiplechoicequiz.appspot.com",
    messagingSenderId: "469060733265"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
