export const environment = {
  production: true,
  auth0: {
    domain: 'smartxpo.eu.auth0.com',
    clientId: 'fGZ7ZCDyMD9nXTW3xfsQBpxoSTf2AAl5',
    callbackURL: 'https://int.v3.smartxpo.com/callback' // <-- way too specific, maybe change to something like `{base href}`
    // + remove `/callback`
  }
};
