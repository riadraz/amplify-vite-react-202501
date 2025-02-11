/*
import { defineAuth, secret } from '@aws-amplify/backend';
export const auth = defineAuth({
  loginWith: {
    email: true,
     
     externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET')
      },
    
      signInWithApple: {
        clientId: secret('SIWA_CLIENT_ID'),
        keyId: secret('SIWA_KEY_ID'),
        privateKey: secret('SIWA_PRIVATE_KEY'),
        teamId: secret('SIWA_TEAM_ID')
      },
      loginWithAmazon: {
        clientId: secret('LOGINWITHAMAZON_CLIENT_ID'),
        clientSecret: secret('LOGINWITHAMAZON_CLIENT_SECRET')
      },
      facebook: {
        clientId: secret('FACEBOOK_CLIENT_ID'),
        clientSecret: secret('FACEBOOK_CLIENT_SECRET')
      },
      oidc: [
        {
          name: 'MicrosoftEntraID',
          clientId: secret('MICROSOFT_ENTRA_ID_CLIENT_ID'),
          clientSecret: secret('MICROSOFT_ENTRA_ID_CLIENT_SECRET'),
          issuerUrl: '<your-issuer-url>',
        },
      ],
      saml: {
        name: 'MicrosoftEntraIDSAML',
        metadata: {
          metadataContent: '<your-url-hosting-saml-metadata>', // or content of the metadata file
          metadataType: 'URL', // or 'FILE'
        },
      },
     
      callbackUrls: [
        'http://localhost:5173/profile',
        'https://mywebsite.com/profile'
      ],
      logoutUrls: ['http://localhost:5173/', 'https://mywebsite.com'],
      
    }
      
  }
});
*/


 // Define and configure your auth resource
 // @see https://docs.amplify.aws/gen2/build-a-backend/auth
 
 import { defineAuth, secret } from '@aws-amplify/backend';

 export const auth = defineAuth({
   loginWith: {
     email: true,
     externalProviders: {
       google: {
         clientId: secret('GOOGLE_CLIENT_ID'),
         clientSecret: secret('GOOGLE_CLIENT_SECRET'),
         scopes: ['profile'],
         attributeMapping: {
          email: 'email'
        },
       },
       
       callbackUrls: [
         'http://localhost:5173/home',
         'https://amplify-vite-react-202501.moses20608.click/home'
       ],
       logoutUrls: ['http://localhost:5173/', 'https://amplify-vite-react-202501.moses20608.click'],
     }
   }
 });