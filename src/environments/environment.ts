// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// https://angularfirebase.com/lessons/development-and-production-environments-for-angular-firebase-projects/

export const environment = {
  production: false,
  	firebaseConfig: {
      apiKey: "AIzaSyAbdcqUi85_mnxGhvnZohm-Gd9LywFwxPc",
    authDomain: "gavalpodev.firebaseapp.com",
     databaseURL: "https://gavalpodev.firebaseio.com",
     storageBucket: "gavalpodev.appspot.com"
  }
};

