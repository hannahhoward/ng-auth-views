import {appName} from '../../../src/common/config';
import {} from '../../support/testStates';
import authModule from '../../../src/auth';
import {Module, Injector, Config} from "a1atscript";

@Config('authConfigProvider')
function config(authConfigProvider) {
  authConfigProvider.parentState('root.inner');
}

var AppModule = new Module('AppModule', ['ui.router.state', authModule, config])

describe('Password Recovery states', function() {

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

      $templateCache.put('passwords/passwords-request.tpl.html', '');
      $templateCache.put('passwords/passwords-request-success.tpl.html', '');
      $templateCache.put('passwords/passwords-update.tpl.html', '');
      $templateCache.put('passwords/passwords-update-success.tpl.html', '');
    });
  });

  describe("passwordsRequest", function() {

    beforeEach(function() {
      state = $state.get('root.inner.passwordsRequest');
    });

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/reset-password');
    });

    it('should render the passwords request template', function() {
      expect(state.templateUrl).toEqual('passwords/passwords-request.tpl.html');
    });

    it('should use the passwords request controller', function() {
      expect(state.controller).toEqual('PasswordsRequestCtrl');
    });

  });

  describe("passwordsRequestSuccess", function() {

    beforeEach(function() {
      state = $state.get('root.inner.passwordsRequestSuccess');
    });

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/reset-password-sent');
    });

    it('should render the passwords request template', function() {
      expect(state.templateUrl).toEqual('passwords/passwords-request-success.tpl.html');
    });

  });

  describe("passwordsUpdate", function() {

    beforeEach(function() {
      state = $state.get('root.inner.passwordsUpdate');
    });

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/update-password');
    });

    it('should render the passwords update template', function() {
      expect(state.templateUrl).toEqual('passwords/passwords-update.tpl.html');
    });

    it('should use the passwords request controller', function() {
      expect(state.controller).toEqual('PasswordsUpdateCtrl');
    });

    describe("when not logged in", function() {
      beforeEach(function() {
        spyOn($auth, 'validateUser').and.returnValue($q(
          (resolve, reject) => { reject(); }));
        $state.go('root.inner.passwordsUpdate');
        $rootScope.$digest();
      });

      it("should not transition successfully", function() {
        expect($state.current.name).not.toBe(state.name);
      });
    });

    describe("when logged in", function() {
      beforeEach(function() {
        spyOn($auth, 'validateUser').and.returnValue($q(
          (resolve, reject) => { resolve("Awesome"); }));
        $state.go('root.inner.passwordsUpdate', {location: false});
        $rootScope.$apply();
      });

      it("should transition successfully", function() {
        expect($state.current.name).toBe(state.name);
      });

      it("should resolve isAdmin", function() {
        expect($injector.invoke($state.current.resolve.onlyAdmin).$$state.value).toBe('Awesome');
      });
    });
  });

  describe("passwordsUpdateSuccess", function() {

    beforeEach(function() {
      state = $state.get('root.inner.passwordsUpdateSuccess');
    });

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/updated-password');
    });

    it('should render the sessions template', function() {
      expect(state.templateUrl).toEqual('passwords/passwords-update-success.tpl.html');
    });

    describe("when not logged in", function() {
      beforeEach(function() {
        spyOn($auth, 'validateUser').and.returnValue($q(
          (resolve, reject) => { reject(); }));
        $state.go('root.inner.passwordsUpdateSuccess');
        $rootScope.$digest();
      });

      it("should not transition successfully", function() {
        expect($state.current.name).not.toBe(state.name);
      });
    });

    describe("when logged in", function() {
      beforeEach(function() {
        spyOn($auth, 'validateUser').and.returnValue($q(
          (resolve, reject) => { resolve("Awesome"); }));
        $state.go('root.inner.passwordsUpdateSuccess', {location: false});
        $rootScope.$apply();
      });

      it("should transition successfully", function() {
        expect($state.current.name).toBe(state.name);
      });

      it("should resolve isAdmin", function() {
        expect($injector.invoke($state.current.resolve.onlyAdmin).$$state.value).toBe('Awesome');
      });
    });
  });
});
