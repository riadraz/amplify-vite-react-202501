import { signInWithRedirect } from 'aws-amplify/auth';

await signInWithRedirect({
  provider: {
    custom: 'MicrosoftEntraID',
    //custom: 'MicrosoftEntraIDSAML',
    //provider: 'Apple'
  }
});

/*
Specifying a redirect URL on sign out
If you have multiple sign out redirect URLs configured, 
you may choose to override the default behavior of selecting a 
redirect URL and provide the one of your choosing when calling signOut. 
The provided redirect URL should match at least one of the configured redirect URLs.
 If no redirect URL is provided to signOut, one will be selected based on the current app domain.

 import { Amplify } from 'aws-amplify';
import { signOut } from 'aws-amplify/auth';

// Assuming the following URLS were provided manually or via the Amplify configuration file,
// redirectSignOut: 'http://localhost:3000/,https://authProvider/logout?logout_uri=https://mywebsite.com/'

signOut({
  global: false,
  oauth: {
    redirectUrl: 'https://authProvider/logout?logout_uri=https://mywebsite.com/'
  }
});

(Required for Multi-Page Applications) Complete external Sign In after Redirect
If you are developing a multi-page application, and the redirected page is not 
the same page that initiated the sign in, you will need to add the following code 
to the redirected page to ensure the sign in gets completed:

import 'aws-amplify/auth/enable-oauth-listener';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

Hub.listen("auth", ({ payload }) => {
  switch (payload.event) {
    case "signInWithRedirect":
      const user = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();
      console.log({user, userAttributes});
      break;
    case "signInWithRedirect_failure":
      // handle sign in failure
      break;
    case "customOAuthState":
      const state = payload.data; // this will be customState provided on signInWithRedirect function
      console.log(state);
      break;
  }
});
*/