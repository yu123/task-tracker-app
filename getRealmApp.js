import Realm from 'realm';
import {REALM_APP_ID} from '@env';

let app;

// Returns the shared instance of the Realm app.
export function getRealmApp() {
  if (app === undefined) {
    const appConfig = {
      id: REALM_APP_ID,
      timeout: 10000,
      app: {
        name: 'default',
        version: '0',
      },
    };
    app = new Realm.App(appConfig);
  }
  return app;
}
