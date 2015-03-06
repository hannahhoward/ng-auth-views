import {Provider, Module} from 'a1atscript';

@Module('auth.config', ['ui.router.state'])
@Provider('authConfig', ['$stateProvider'])
export default function authConfig($stateProvider) {
  var config = {
    authKey: "email",
    recoverable: false
  };

  var parentState = null;
  var states = {};

  this.authKey = function (name) {
    config.authKey = name;
  };

  this.enableRecovery = function() {
    config.recoverable = true;
  };

  this.parentState = function (newParentState) {
    parentState = newParentState;
    Object.keys(states).forEach((state) => {
      $stateProvider.state(parentState+"."+state, states[state])
    });
  }

  this.state = function (stateName, stateInfo) {
    states[stateName] = stateInfo;
    if (parentState) {
      $stateProvider.state(parentState+"."+stateName, stateInfo);
    }
  }

  this.$get = [function authKey() {
    return config;
  }];
}
