import {State, Resolve} from "stateInjector";
import {Module, Injector, Config} from "a1atscript";
import {} from './support/testStates';
import {appName} from 'config';
import authModule from '../src/auth';

@State('page')
class RootInnerPageState {
  constructor() {
    this.templateUrl = 'awesome/awesome.html';
    this.controller = 'AwesomeController';
  }

  @Resolve('Backend')
  model(Backend) {
  }

  @Resolve('AuthService')
  user(AuthService) {
  }

}

@Config('authConfigProvider')
function config(authConfigProvider) {
  authConfigProvider.parentState('root.inner')
}

var AppModule = new Module('AppModule', ['ui.router.state', RootInnerPageState, authModule, config])

describe("State Injection", function() {

  beforeEach(function() {
    var injector = new Injector();
    injector.instantiate(AppModule);
    module(`${appName}.testStates`);
    module('AppModule');
  });

  describe("state", function() {

    var state;

    beforeEach(inject(function($state) {
      state = $state.get('root.inner.page');
    }));

    it("should setup state correctly", function() {
      expect(state.templateUrl).toEqual('awesome/awesome.html');
      expect(state.controller).toEqual('AwesomeController');
      expect(state.resolve.model['$inject']).toEqual(['Backend']);
    });

  });
});
