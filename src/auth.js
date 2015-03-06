import {backendUrl} from 'config';
import {} from '../build/templates-app';
import Sessions from './sessions/sessions';
import Registrations from './registrations/registrations';
import Confirmations from './confirmations/confirmations';
import Passwords from './passwords/passwords';
import AuthConfig from './config/config';
import {Config, Module} from 'a1atscript';

@Config('authConfigProvider')
function authSetup(authConfigProvider) {

  // change this to a different key as the auth key
  authConfigProvider.authKey("email");

  // turn this off to remove links to reset password
  authConfigProvider.enableRecovery();

}

// remove modules as neccesary here if you don't want complex authorization
var authModule = new Module( 'auth', [
  'ng-token-auth',
  Sessions,
  Registrations,
  Confirmations,
  Passwords,
  AuthConfig,
  authSetup
]);

export default authModule;
