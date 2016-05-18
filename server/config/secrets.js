/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
export const sessionSecret = process.env.SESSION_SECRET || 'Your Session Secret goes here';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || '62351010161-eqcnoa340ki5ekb9gvids4ksgqt9hf48.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || '6cKCWD75gHgzCvM4VQyR5_TU',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};

// export const salesforce = {
//   loginUrl: process.env.SF_LOGINURL || 'https://test.salesforce.com',//https://bpsbox1-brightplan.cs10.force.com/BrightPlanWeb
//   clientId: process.env.SF_CLIENTID || '3MVG9_7ddP9KqTzeZdfdZrvmKuItHh6v4ulvu3ZA1CCTx3ZVK0mWo4nRjVp6hDw5u2F.0xAwKApIs.bWZlZL2',
//   clientSecret: process.env.SF_CLIENT_SECRET || '3998960731306368083',
//   redirectUri: process.env.SF_REDIRECT_URI || 'https://brightplan-oktana-horacio.herokuapp.com/auth/forcedotcom/callback',
//   authorizationURL: process.env.SF_REDIRECT_URI || 'https://test.salesforce.com/services/oauth2/authorize',
//   tokenURL: process.env.SF_TOKEN_URL || 'https://test.salesforce.com/services/oauth2/token'
// };

export const salesforce = {
  loginUrl: process.env.SF_LOGINURL || 'https://bpsbox1-brightplan.cs10.force.com/BrightPlanWeb',
  clientId: process.env.SF_CLIENTID || '3MVG9_7ddP9KqTzeZdfdZrvmKuItHh6v4ulvu3ZA1CCTx3ZVK0mWo4nRjVp6hDw5u2F.0xAwKApIs.bWZlZL2',
  clientSecret: process.env.SF_CLIENT_SECRET || '3998960731306368083',
  redirectUri: process.env.SF_REDIRECT_URI || 'https://brightplan-oktana-horacio.herokuapp.com/auth/forcedotcom/callback',
  authorizationURL: process.env.SF_AUTHORIZE_URL || 'https://bpsbox1-brightplan.cs10.force.com/BrightPlanWeb/services/oauth2/authorize',
  tokenURL: process.env.SF_TOKEN_URL || 'https://bpsbox1-brightplan.cs10.force.com/BrightPlanWeb/services/oauth2/token'
};


//https://bpsbox1-brightplan.cs10.force.com

export default {
  sessionSecret,
  google,
  salesforce
};
