import {appName} from '../../../src/common/config';
import {} from '../../support/testStates';
import authModule from '../../../src/auth';
import {Module, Injector, Config} from "a1atscript";

@Config('authConfigProvider')
function config(authConfigProvider) {
  authConfigProvider.parentState('root.inner')
}

var AppModule = new Module('AppModule', ['ui.router.state', authModule, config])

describe('confirmations states', function() {

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

      $templateCache.put('confirmations/confirmations-success.tpl.html', '');
    });
  });

  describe("confirmationsSuccess", function() {

    beforeEach(function() {
      state = $state.get('root.inner.confirmationsSuccess');
    });

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/confirmed');
    });

    it('should render the sessions template', function() {
      expect(state.templateUrl).toEqual('confirmations/confirmations-success.tpl.html');
    });

    describe("when not logged in", function() {
      beforeEach(function() {
        spyOn($auth, 'validateUser').and.returnValue($q(
          (resolve, reject) => { reject(); }));
        $state.go('root.inner.confirmationsSuccess');
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
        $state.go('root.inner.confirmationsSuccess');
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
