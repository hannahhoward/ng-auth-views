import {appName} from '../../../src/common/config';
import {} from '../../support/testStates';
import authModule from '../../../src/auth';
import {Module, Injector, Config} from "a1atscript";

@Config('authConfigProvider')
function config(authConfigProvider) {
  authConfigProvider.parentState('root.inner')
}

var AppModule = new Module('AppModule', ['ui.router.state', authModule, config])

describe('registrations states', function() {

  var $rootScope, $state, $injector, state, $auth, $q;
  beforeEach(function() {
    var injector = new Injector();
    injector.instantiate(AppModule);
    module(`${appName}.testStates`);
    module('AppModule');
  });

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache, _$q_, _$auth_) {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      $q = _$q_;

      $auth = _$auth_;

      $templateCache.put('registrations/registrations.tpl.html', '');
      $templateCache.put('registrations/registrations-success.tpl.html', '');
    });
  });

  describe("registrations", function() {

    beforeEach(function() {
      state = $state.get('root.inner.registrations');
    });

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/sign-up');
    });

    it('should render the sessions template', function() {
      expect(state.templateUrl).toEqual('registrations/registrations.tpl.html');
    });

    it('should use the sessions controller', function() {
      expect(state.controller).toEqual('RegistrationsCtrl');
    });

  });

  describe("registrationsSuccess", function() {

    beforeEach(function() {
      state = $state.get('root.inner.registrationsSuccess');
    });

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/signed-up');
    });

    it('should render the sessions template', function() {
      expect(state.templateUrl).toEqual('registrations/registrations-success.tpl.html');
    });

  });

});
