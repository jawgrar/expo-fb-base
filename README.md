# expo-fb-base

Template for Expo app on web, iOS and android with Firebase (auth, analytics, etc...)

## Use it

### Add your config

Put firebase config in `config/local.ts` as
```
export default {
  firebaseConfig: {
    apiKey: "XXXX",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "XXXX",
    appId: "XXXX",
    measurementId: "XXXX",
  },
};
```

And, add both `google-services.json` and `GoogleService-Info.plist` to the root folder.


### Test with Detox

Comming soon

## Example app

Comming soon
