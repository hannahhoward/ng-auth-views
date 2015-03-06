System.registerModule("../vendor/a1atscript/dist/annotations", [], function() {
  "use strict";
  var __moduleName = "../vendor/a1atscript/dist/annotations";
  var NgAnnotation = function NgAnnotation() {
    for (var dependencies = [],
        $__1 = 0; $__1 < arguments.length; $__1++)
      dependencies[$__1] = arguments[$__1];
    this.dependencies = dependencies;
  };
  ($traceurRuntime.createClass)(NgAnnotation, {}, {});
  var NgNamedAnnotation = function NgNamedAnnotation(token) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : [];
    this.dependencies = dependencies;
    this.token = token;
  };
  ($traceurRuntime.createClass)(NgNamedAnnotation, {}, {});
  var Config = function Config() {
    $traceurRuntime.superConstructor($Config).apply(this, arguments);
  };
  var $Config = Config;
  ($traceurRuntime.createClass)(Config, {}, {}, NgAnnotation);
  var Run = function Run() {
    $traceurRuntime.superConstructor($Run).apply(this, arguments);
  };
  var $Run = Run;
  ($traceurRuntime.createClass)(Run, {}, {}, NgAnnotation);
  var Controller = function Controller() {
    $traceurRuntime.superConstructor($Controller).apply(this, arguments);
  };
  var $Controller = Controller;
  ($traceurRuntime.createClass)(Controller, {}, {}, NgNamedAnnotation);
  var Directive = function Directive() {
    $traceurRuntime.superConstructor($Directive).apply(this, arguments);
  };
  var $Directive = Directive;
  ($traceurRuntime.createClass)(Directive, {}, {}, NgNamedAnnotation);
  var Service = function Service() {
    $traceurRuntime.superConstructor($Service).apply(this, arguments);
  };
  var $Service = Service;
  ($traceurRuntime.createClass)(Service, {}, {}, NgNamedAnnotation);
  var Factory = function Factory() {
    $traceurRuntime.superConstructor($Factory).apply(this, arguments);
  };
  var $Factory = Factory;
  ($traceurRuntime.createClass)(Factory, {}, {}, NgNamedAnnotation);
  var Provider = function Provider() {
    $traceurRuntime.superConstructor($Provider).apply(this, arguments);
  };
  var $Provider = Provider;
  ($traceurRuntime.createClass)(Provider, {}, {}, NgNamedAnnotation);
  var Value = function Value() {
    $traceurRuntime.superConstructor($Value).apply(this, arguments);
  };
  var $Value = Value;
  ($traceurRuntime.createClass)(Value, {}, {}, NgNamedAnnotation);
  var Constant = function Constant() {
    $traceurRuntime.superConstructor($Constant).apply(this, arguments);
  };
  var $Constant = Constant;
  ($traceurRuntime.createClass)(Constant, {}, {}, NgNamedAnnotation);
  var Filter = function Filter() {
    $traceurRuntime.superConstructor($Filter).apply(this, arguments);
  };
  var $Filter = Filter;
  ($traceurRuntime.createClass)(Filter, {}, {}, NgNamedAnnotation);
  var Animation = function Animation() {
    $traceurRuntime.superConstructor($Animation).apply(this, arguments);
  };
  var $Animation = Animation;
  ($traceurRuntime.createClass)(Animation, {}, {}, NgNamedAnnotation);
  var Module = function Module() {
    $traceurRuntime.superConstructor($Module).apply(this, arguments);
  };
  var $Module = Module;
  ($traceurRuntime.createClass)(Module, {}, {}, NgNamedAnnotation);
  return {
    get Config() {
      return Config;
    },
    get Run() {
      return Run;
    },
    get Controller() {
      return Controller;
    },
    get Directive() {
      return Directive;
    },
    get Service() {
      return Service;
    },
    get Factory() {
      return Factory;
    },
    get Provider() {
      return Provider;
    },
    get Value() {
      return Value;
    },
    get Constant() {
      return Constant;
    },
    get Filter() {
      return Filter;
    },
    get Animation() {
      return Animation;
    },
    get Module() {
      return Module;
    }
  };
});
System.registerModule("../vendor/a1atscript/dist/injectorTypes", [], function() {
  "use strict";
  var __moduleName = "../vendor/a1atscript/dist/injectorTypes";
  var $__0 = System.get("../vendor/a1atscript/dist/annotations"),
      Config = $__0.Config,
      Run = $__0.Run,
      Controller = $__0.Controller,
      Directive = $__0.Directive,
      Service = $__0.Service,
      Factory = $__0.Factory,
      Provider = $__0.Provider,
      Value = $__0.Value,
      Constant = $__0.Constant,
      Animation = $__0.Animation,
      Filter = $__0.Filter;
  var ListInjector = function ListInjector() {};
  ($traceurRuntime.createClass)(ListInjector, {instantiate: function(module, dependencyList) {
      var $__1 = this;
      dependencyList.forEach((function(dependencyObject) {
        $__1.instantiateOne(module, dependencyObject.dependency, dependencyObject.metadata);
      }));
    }}, {});
  var ConfigInjector = function ConfigInjector() {
    $traceurRuntime.superConstructor($ConfigInjector).apply(this, arguments);
  };
  var $ConfigInjector = ConfigInjector;
  ($traceurRuntime.createClass)(ConfigInjector, {
    get annotationClass() {
      return Config;
    },
    instantiateOne: function(module, config, metadata) {
      config['$inject'] = metadata.dependencies;
      module.config(config);
    }
  }, {}, ListInjector);
  var RunInjector = function RunInjector() {
    $traceurRuntime.superConstructor($RunInjector).apply(this, arguments);
  };
  var $RunInjector = RunInjector;
  ($traceurRuntime.createClass)(RunInjector, {
    get annotationClass() {
      return Run;
    },
    instantiateOne: function(module, run, metadata) {
      run['$inject'] = metadata.dependencies;
      module.run(run);
    }
  }, {}, ListInjector);
  var ControllerInjector = function ControllerInjector() {
    $traceurRuntime.superConstructor($ControllerInjector).apply(this, arguments);
  };
  var $ControllerInjector = ControllerInjector;
  ($traceurRuntime.createClass)(ControllerInjector, {
    get annotationClass() {
      return Controller;
    },
    instantiateOne: function(module, controller, metadata) {
      controller['$inject'] = metadata.dependencies;
      module.controller(metadata.token, controller);
    }
  }, {}, ListInjector);
  var DirectiveInjector = function DirectiveInjector() {
    $traceurRuntime.superConstructor($DirectiveInjector).apply(this, arguments);
  };
  var $DirectiveInjector = DirectiveInjector;
  ($traceurRuntime.createClass)(DirectiveInjector, {
    get annotationClass() {
      return Directive;
    },
    instantiateOne: function(module, directive, metadata) {
      directive['$inject'] = metadata.dependencies;
      module.directive(metadata.token, directive);
    }
  }, {}, ListInjector);
  var ServiceInjector = function ServiceInjector() {
    $traceurRuntime.superConstructor($ServiceInjector).apply(this, arguments);
  };
  var $ServiceInjector = ServiceInjector;
  ($traceurRuntime.createClass)(ServiceInjector, {
    get annotationClass() {
      return Service;
    },
    instantiateOne: function(module, service, metadata) {
      service['$inject'] = metadata.dependencies;
      module.service(metadata.token, service);
    }
  }, {}, ListInjector);
  var FactoryInjector = function FactoryInjector() {
    $traceurRuntime.superConstructor($FactoryInjector).apply(this, arguments);
  };
  var $FactoryInjector = FactoryInjector;
  ($traceurRuntime.createClass)(FactoryInjector, {
    get annotationClass() {
      return Factory;
    },
    instantiateOne: function(module, factory, metadata) {
      factory['$inject'] = metadata.dependencies;
      module.factory(metadata.token, factory);
    }
  }, {}, ListInjector);
  var ProviderInjector = function ProviderInjector() {
    $traceurRuntime.superConstructor($ProviderInjector).apply(this, arguments);
  };
  var $ProviderInjector = ProviderInjector;
  ($traceurRuntime.createClass)(ProviderInjector, {
    get annotationClass() {
      return Provider;
    },
    instantiateOne: function(module, provider, metadata) {
      provider['$inject'] = metadata.dependencies;
      module.provider(metadata.token, provider);
    }
  }, {}, ListInjector);
  var ValueInjector = function ValueInjector() {
    $traceurRuntime.superConstructor($ValueInjector).apply(this, arguments);
  };
  var $ValueInjector = ValueInjector;
  ($traceurRuntime.createClass)(ValueInjector, {
    get annotationClass() {
      return Value;
    },
    instantiateOne: function(module, value, metadata) {
      value['$inject'] = metadata.dependencies;
      module.value(metadata.token, value);
    }
  }, {}, ListInjector);
  var ConstantInjector = function ConstantInjector() {
    $traceurRuntime.superConstructor($ConstantInjector).apply(this, arguments);
  };
  var $ConstantInjector = ConstantInjector;
  ($traceurRuntime.createClass)(ConstantInjector, {
    get annotationClass() {
      return Constant;
    },
    instantiateOne: function(module, constant, metadata) {
      constant['$inject'] = metadata.dependencies;
      module.constant(metadata.token, constant);
    }
  }, {}, ListInjector);
  var AnimationInjector = function AnimationInjector() {
    $traceurRuntime.superConstructor($AnimationInjector).apply(this, arguments);
  };
  var $AnimationInjector = AnimationInjector;
  ($traceurRuntime.createClass)(AnimationInjector, {
    get annotationClass() {
      return Animation;
    },
    instantiateOne: function(module, animation, metadata) {
      animation['$inject'] = metadata.dependencies;
      module.animation(metadata.token, animation);
    }
  }, {}, ListInjector);
  var FilterInjector = function FilterInjector() {
    $traceurRuntime.superConstructor($FilterInjector).apply(this, arguments);
  };
  var $FilterInjector = FilterInjector;
  ($traceurRuntime.createClass)(FilterInjector, {
    get annotationClass() {
      return Filter;
    },
    instantiateOne: function(module, filter, metadata) {
      filter['$inject'] = metadata.dependencies;
      module.filter(metadata.token, filter);
    }
  }, {}, ListInjector);
  return {
    get ListInjector() {
      return ListInjector;
    },
    get ConfigInjector() {
      return ConfigInjector;
    },
    get RunInjector() {
      return RunInjector;
    },
    get ControllerInjector() {
      return ControllerInjector;
    },
    get DirectiveInjector() {
      return DirectiveInjector;
    },
    get ServiceInjector() {
      return ServiceInjector;
    },
    get FactoryInjector() {
      return FactoryInjector;
    },
    get ProviderInjector() {
      return ProviderInjector;
    },
    get ValueInjector() {
      return ValueInjector;
    },
    get ConstantInjector() {
      return ConstantInjector;
    },
    get AnimationInjector() {
      return AnimationInjector;
    },
    get FilterInjector() {
      return FilterInjector;
    }
  };
});
System.registerModule("../vendor/a1atscript/dist/Injector", [], function() {
  "use strict";
  var __moduleName = "../vendor/a1atscript/dist/Injector";
  var Module = System.get("../vendor/a1atscript/dist/annotations").Module;
  var $__1 = System.get("../vendor/a1atscript/dist/injectorTypes"),
      ConfigInjector = $__1.ConfigInjector,
      RunInjector = $__1.RunInjector,
      ControllerInjector = $__1.ControllerInjector,
      DirectiveInjector = $__1.DirectiveInjector,
      ServiceInjector = $__1.ServiceInjector,
      FactoryInjector = $__1.FactoryInjector,
      ProviderInjector = $__1.ProviderInjector,
      ValueInjector = $__1.ValueInjector,
      ConstantInjector = $__1.ConstantInjector,
      AnimationInjector = $__1.AnimationInjector,
      FilterInjector = $__1.FilterInjector;
  var registeredInjectors = {};
  function registerInjector(name, InjectorClass) {
    registeredInjectors[name] = new InjectorClass();
  }
  registerInjector('config', ConfigInjector);
  registerInjector('run', RunInjector);
  registerInjector('controller', ControllerInjector);
  registerInjector('directive', DirectiveInjector);
  registerInjector('service', ServiceInjector);
  registerInjector('factory', FactoryInjector);
  registerInjector('provider', ProviderInjector);
  registerInjector('value', ValueInjector);
  registerInjector('constant', ConstantInjector);
  registerInjector('animation', AnimationInjector);
  registerInjector('filter', FilterInjector);
  var Injector = function Injector() {
    var appNamePrefix = arguments[0] !== (void 0) ? arguments[0] : "";
    this.appNamePrefix = appNamePrefix;
    this.injectedModules = {};
  };
  ($traceurRuntime.createClass)(Injector, {
    get annotationClass() {
      return Module;
    },
    instantiate: function(moduleClass) {
      var metadata = this._getAnnotatedClass(moduleClass);
      if (!metadata) {
        return undefined;
      }
      if (this.injectedModules[metadata.token]) {
        return this.injectedModules[metadata.token];
      }
      var sortedDependencies = this._sortModuleDependencies(metadata);
      sortedDependencies = this._sortSelf(metadata, moduleClass, sortedDependencies);
      var moduleDependencies = this._instantiateModuleDependencies(sortedDependencies.module);
      var moduleName = metadata.token;
      if (this.appNamePrefix && moduleName != this.appNamePrefix) {
        moduleName = (this.appNamePrefix + "." + moduleName);
      }
      var instantiatedModule = angular.module(moduleName, moduleDependencies);
      delete sortedDependencies.module;
      this._instantiateOtherDependencies(sortedDependencies, instantiatedModule);
      this.injectedModules[metadata.token] = moduleName;
      return moduleName;
    },
    _sortSelf: function(metadata, moduleClass, sortedDependencies) {
      if (metadata == moduleClass) {
        return sortedDependencies;
      } else {
        var selfDependency = this._sortDependency(moduleClass, false);
        return this._mergeSortedDependencies(sortedDependencies, selfDependency);
      }
    },
    _getAnnotatedClass: function(moduleClass) {
      if (moduleClass instanceof Module) {
        moduleClass.injectable = false;
        return moduleClass;
      } else {
        var metadata = this._getModuleAnnotation(moduleClass);
        return metadata;
      }
    },
    _getDependencyType: function(dependency) {
      var annotations = dependency.annotations;
      for (var i = 0; i < annotations.length; i++) {
        var annotation = annotations[i];
        var foundInjector = Object.keys(registeredInjectors).find((function(key) {
          return annotation instanceof registeredInjectors[key].annotationClass;
        }));
        if (foundInjector) {
          return {
            key: foundInjector,
            metadata: annotation
          };
        }
      }
      return null;
    },
    _getModuleAnnotation: function(dependency) {
      return dependency.annotations.find((function(annotation) {
        return annotation instanceof Module;
      }));
    },
    _mergeSortedDependencies: function(sorted1, sorted2) {
      var newSorted = {};
      Object.assign(newSorted, sorted1);
      Object.keys(sorted2).forEach((function(key) {
        if (newSorted[key]) {
          newSorted[key] = newSorted[key].concat(sorted2[key]);
        } else {
          newSorted[key] = sorted2[key];
        }
      }));
      return newSorted;
    },
    _sortDependency: function(dependency) {
      var checkModule = arguments[1] !== (void 0) ? arguments[1] : true;
      var $__2 = this;
      var sorted = {};
      if (typeof dependency === "string" || dependency instanceof Module) {
        sorted.module = [dependency];
      } else if (dependency.annotations) {
        if (checkModule && this._getModuleAnnotation(dependency)) {
          sorted.module = [dependency];
        } else {
          var dependencyType = this._getDependencyType(dependency);
          if (dependencyType) {
            sorted[dependencyType.key] = [{
              dependency: dependency,
              metadata: dependencyType.metadata
            }];
          }
        }
      } else {
        Object.keys(dependency).forEach((function(key) {
          var subDependency = dependency[key];
          var sortedSubDependencies = $__2._sortDependency(subDependency);
          sorted = $__2._mergeSortedDependencies(sorted, sortedSubDependencies);
        }));
      }
      return sorted;
    },
    _sortModuleDependencies: function(moduleClass) {
      var $__2 = this;
      var sorted = {};
      moduleClass.dependencies.forEach((function(dependency) {
        var newSortedDependencies = $__2._sortDependency(dependency);
        sorted = $__2._mergeSortedDependencies(sorted, newSortedDependencies);
      }));
      return sorted;
    },
    _moduleMetadata: function(moduleClass) {
      return moduleClass.annotations.find((function(value) {
        return value instanceof Module;
      }));
    },
    _instantiateModuleDependencies: function(moduleDependencies) {
      var $__2 = this;
      var returnedDependencies = [];
      if (moduleDependencies) {
        moduleDependencies.forEach((function(moduleDependency) {
          if (typeof moduleDependency === "string") {
            returnedDependencies.push(moduleDependency);
          } else {
            returnedDependencies.push($__2.instantiate(moduleDependency));
          }
        }));
      }
      return returnedDependencies;
    },
    _instantiateOtherDependencies: function(sortedDependencies, instantiatedModule) {
      Object.keys(sortedDependencies).forEach((function(dependencyType) {
        registeredInjectors[dependencyType].instantiate(instantiatedModule, sortedDependencies[dependencyType]);
      }));
    }
  }, {});
  return {
    get registerInjector() {
      return registerInjector;
    },
    get Injector() {
      return Injector;
    }
  };
});
System.registerModule("../vendor/a1atscript/dist/DirectiveObject", [], function() {
  "use strict";
  var __moduleName = "../vendor/a1atscript/dist/DirectiveObject";
  var ListInjector = System.get("../vendor/a1atscript/dist/injectorTypes").ListInjector;
  var registerInjector = System.get("../vendor/a1atscript/dist/Injector").registerInjector;
  var DirectiveObject = function DirectiveObject(token) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : [];
    this.dependencies = dependencies;
    this.token = token;
  };
  ($traceurRuntime.createClass)(DirectiveObject, {}, {});
  var DirectiveObjectInjector = function DirectiveObjectInjector() {
    $traceurRuntime.superConstructor($DirectiveObjectInjector).apply(this, arguments);
  };
  var $DirectiveObjectInjector = DirectiveObjectInjector;
  ($traceurRuntime.createClass)(DirectiveObjectInjector, {
    get annotationClass() {
      return DirectiveObject;
    },
    _createFactoryArray: function(ConstructorFn) {
      var args = ConstructorFn.$inject || [];
      var factoryArray = args.slice();
      factoryArray.push((function() {
        for (var args = [],
            $__3 = 0; $__3 < arguments.length; $__3++)
          args[$__3] = arguments[$__3];
        var directive = new (Function.prototype.bind.apply(ConstructorFn, $traceurRuntime.spread([null], args)))();
        for (var key in directive) {
          directive[key] = directive[key];
        }
        return directive;
      }));
      return factoryArray;
    },
    _cloneFunction: function(original) {
      return function() {
        return original.apply(this, arguments);
      };
    },
    _override: function(object, methodName, callback) {
      object[methodName] = callback(object[methodName]);
    },
    instantiateOne: function(module, directiveObject, metadata) {
      directiveObject['$inject'] = metadata.dependencies;
      if (!directiveObject.prototype.compile) {
        directiveObject.prototype.compile = (function() {});
      }
      var originalCompileFn = this._cloneFunction(directiveObject.prototype.compile);
      this._override(directiveObject.prototype, 'compile', function() {
        return function() {
          originalCompileFn.apply(this, arguments);
          if (directiveObject.prototype.link) {
            return directiveObject.prototype.link.bind(this);
          }
        };
      });
      var factoryArray = this._createFactoryArray(directiveObject);
      module.directive(metadata.token, factoryArray);
    }
  }, {}, ListInjector);
  registerInjector('directiveObject', DirectiveObjectInjector);
  return {get DirectiveObject() {
      return DirectiveObject;
    }};
});
System.registerModule("../vendor/a1atscript/dist/a1atscript", [], function() {
  "use strict";
  var __moduleName = "../vendor/a1atscript/dist/a1atscript";
  var $___46__46__47_vendor_47_a1atscript_47_dist_47_Injector__ = System.get("../vendor/a1atscript/dist/Injector");
  var $___46__46__47_vendor_47_a1atscript_47_dist_47_annotations__ = System.get("../vendor/a1atscript/dist/annotations");
  var $___46__46__47_vendor_47_a1atscript_47_dist_47_DirectiveObject__ = System.get("../vendor/a1atscript/dist/DirectiveObject");
  return $traceurRuntime.exportStar({}, $___46__46__47_vendor_47_a1atscript_47_dist_47_Injector__, $___46__46__47_vendor_47_a1atscript_47_dist_47_annotations__, $___46__46__47_vendor_47_a1atscript_47_dist_47_DirectiveObject__);
});
System.registerModule("../src/config/config", [], function() {
  "use strict";
  var __moduleName = "../src/config/config";
  var $__0 = System.get("../vendor/a1atscript/dist/a1atscript"),
      Provider = $__0.Provider,
      Module = $__0.Module;
  function authConfig($stateProvider) {
    var config = {
      authKey: "email",
      recoverable: false
    };
    var parentState = null;
    var states = {};
    this.authKey = function(name) {
      config.authKey = name;
    };
    this.enableRecovery = function() {
      config.recoverable = true;
    };
    this.parentState = function(newParentState) {
      parentState = newParentState;
      Object.keys(states).forEach((function(state) {
        $stateProvider.state(parentState + "." + state, states[state]);
      }));
    };
    this.state = function(stateName, stateInfo) {
      states[stateName] = stateInfo;
      if (parentState) {
        $stateProvider.state(parentState + "." + stateName, stateInfo);
      }
    };
    this.$get = [function authKey() {
      return config;
    }];
  }
  var $__default = authConfig;
  Object.defineProperty(authConfig, "annotations", {get: function() {
      return [new Module('auth.config', ['ui.router.state']), new Provider('authConfig', ['$stateProvider'])];
    }});
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/stateInjector", [], function() {
  "use strict";
  var __moduleName = "../src/stateInjector";
  var registerInjector = System.get("../vendor/a1atscript/dist/a1atscript").registerInjector;
  var State = function State(stateName) {
    this.stateName = stateName;
  };
  ($traceurRuntime.createClass)(State, {}, {});
  var Resolve = function Resolve() {
    for (var inject = [],
        $__2 = 0; $__2 < arguments.length; $__2++)
      inject[$__2] = arguments[$__2];
    this.inject = inject;
  };
  ($traceurRuntime.createClass)(Resolve, {}, {});
  var StateInjector = function StateInjector() {};
  ($traceurRuntime.createClass)(StateInjector, {
    get annotationClass() {
      return State;
    },
    annotateResolves: function(state) {
      state.resolve = {};
      for (var prop in state) {
        if (typeof state[prop] == "function") {
          var resolveItem = state[prop];
          resolveItem.annotations.forEach((function(annotation) {
            if (annotation instanceof Resolve) {
              resolveItem['$inject'] = annotation.inject;
              state.resolve[prop] = resolveItem;
            }
          }));
        }
      }
    },
    instantiate: function(module, dependencyList) {
      var injector = this;
      module.config(["authConfigProvider", function(authConfigProvider) {
        dependencyList.forEach((function(dependencyObject) {
          var metadata = dependencyObject.metadata;
          var StateClass = dependencyObject.dependency;
          var state = new StateClass();
          injector.annotateResolves(state);
          authConfigProvider.state(metadata.stateName, state);
        }));
      }]);
    }
  }, {});
  var AdminOnlyState = function AdminOnlyState() {};
  ($traceurRuntime.createClass)(AdminOnlyState, {onlyAdmin: function($auth) {
      return $auth.validateUser();
    }}, {});
  Object.defineProperty(AdminOnlyState.prototype.onlyAdmin, "annotations", {get: function() {
      return [new Resolve('$auth')];
    }});
  var LoggedInOnlyState = function LoggedInOnlyState() {
    $traceurRuntime.superConstructor($LoggedInOnlyState).apply(this, arguments);
  };
  var $LoggedInOnlyState = LoggedInOnlyState;
  ($traceurRuntime.createClass)(LoggedInOnlyState, {}, {}, AdminOnlyState);
  var TrackAdminState = function TrackAdminState() {};
  ($traceurRuntime.createClass)(TrackAdminState, {isAdmin: function($auth) {
      return $auth.validateUser().then((function(success) {
        return true;
      }), (function(failure) {
        return false;
      })).then((function(bool) {
        return bool;
      }));
    }}, {});
  Object.defineProperty(TrackAdminState.prototype.isAdmin, "annotations", {get: function() {
      return [new Resolve('$auth')];
    }});
  registerInjector('state', StateInjector);
  return {
    get State() {
      return State;
    },
    get Resolve() {
      return Resolve;
    },
    get StateInjector() {
      return StateInjector;
    },
    get AdminOnlyState() {
      return AdminOnlyState;
    },
    get LoggedInOnlyState() {
      return LoggedInOnlyState;
    },
    get TrackAdminState() {
      return TrackAdminState;
    }
  };
});
System.registerModule("../src/confirmations/confirmationsStates", [], function() {
  "use strict";
  var __moduleName = "../src/confirmations/confirmationsStates";
  var $__0 = System.get("../src/stateInjector"),
      State = $__0.State,
      LoggedInOnlyState = $__0.LoggedInOnlyState;
  var ConfirmationsSuccessState = function ConfirmationsSuccessState() {
    this.url = '^/confirmed';
    this.templateUrl = 'confirmations/confirmations-success.tpl.html';
  };
  ($traceurRuntime.createClass)(ConfirmationsSuccessState, {}, {}, LoggedInOnlyState);
  Object.defineProperty(ConfirmationsSuccessState, "annotations", {get: function() {
      return [new State('confirmationsSuccess')];
    }});
  return {get ConfirmationsSuccessState() {
      return ConfirmationsSuccessState;
    }};
});
System.registerModule("../src/confirmations/confirmations", [], function() {
  "use strict";
  var __moduleName = "../src/confirmations/confirmations";
  var Module = System.get("../vendor/a1atscript/dist/a1atscript").Module;
  var ConfirmationsStates = System.get("../src/confirmations/confirmationsStates");
  var confirmations = new Module('auth.confirmations', ['ui.router.state', 'ng-token-auth', ConfirmationsStates]);
  var $__default = confirmations;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/passwords/passwordsControllers", [], function() {
  "use strict";
  var __moduleName = "../src/passwords/passwordsControllers";
  var Controller = System.get("../vendor/a1atscript/dist/a1atscript").Controller;
  function PasswordsRequestController($scope, $auth, $state, $lrdToast, Serializer) {
    $scope.passwordRequest = {email: ''};
    $scope.passwordRequestSubmit = function() {
      var serializer = new Serializer();
      $auth.requestPasswordReset(serializer.serialize({user: $scope.passwordRequest})).then(function(resp) {
        $state.go('root.inner.passwordsRequestSuccess');
      }).catch(function(resp) {
        $lrdToast.errorList(resp.data.errors);
      });
    };
  }
  Object.defineProperty(PasswordsRequestController, "annotations", {get: function() {
      return [new Controller('PasswordsRequestCtrl', ['$scope', '$auth', '$state', '$lrdToast', 'Serializer'])];
    }});
  function PasswordsUpdateController($scope, $auth, $state, $lrdToast, Serializer) {
    $scope.passwordUpdate = {
      password: '',
      passwordConfirmation: ''
    };
    $scope.passwordUpdateSubmit = function() {
      var serializer = new Serializer();
      $auth.updatePassword(serializer.serialize({user: $scope.passwordUpdate})).then(function(resp) {
        $state.go('root.inner.passwordsUpdateSuccess');
      }).catch(function(resp) {
        $lrdToast.errorList(resp.data.errors, "We could not update your password because:");
      });
    };
  }
  Object.defineProperty(PasswordsUpdateController, "annotations", {get: function() {
      return [new Controller('PasswordsUpdateCtrl', ['$scope', '$auth', '$state', '$lrdToast', 'Serializer'])];
    }});
  return {
    get PasswordsRequestController() {
      return PasswordsRequestController;
    },
    get PasswordsUpdateController() {
      return PasswordsUpdateController;
    }
  };
});
System.registerModule("../src/passwords/passwordsStates", [], function() {
  "use strict";
  var __moduleName = "../src/passwords/passwordsStates";
  var $__0 = System.get("../src/stateInjector"),
      State = $__0.State,
      Resolve = $__0.Resolve,
      LoggedInOnlyState = $__0.LoggedInOnlyState;
  var PasswordsRequestState = function PasswordsRequestState() {
    this.url = '^/reset-password';
    this.controller = 'PasswordsRequestCtrl';
    this.templateUrl = 'passwords/passwords-request.tpl.html';
  };
  ($traceurRuntime.createClass)(PasswordsRequestState, {}, {});
  Object.defineProperty(PasswordsRequestState, "annotations", {get: function() {
      return [new State('passwordsRequest')];
    }});
  var PasswordsRequestSuccessState = function PasswordsRequestSuccessState() {
    this.url = '^/reset-password-sent';
    this.templateUrl = 'passwords/passwords-request-success.tpl.html';
  };
  ($traceurRuntime.createClass)(PasswordsRequestSuccessState, {}, {});
  Object.defineProperty(PasswordsRequestSuccessState, "annotations", {get: function() {
      return [new State('passwordsRequestSuccess')];
    }});
  var PasswordsUpdateState = function PasswordsUpdateState() {
    this.url = '^/update-password';
    this.controller = 'PasswordsUpdateCtrl';
    this.templateUrl = 'passwords/passwords-update.tpl.html';
  };
  ($traceurRuntime.createClass)(PasswordsUpdateState, {}, {}, LoggedInOnlyState);
  Object.defineProperty(PasswordsUpdateState, "annotations", {get: function() {
      return [new State('passwordsUpdate')];
    }});
  var PasswordsUpdateSuccessState = function PasswordsUpdateSuccessState() {
    this.url = '^/updated-password';
    this.templateUrl = 'passwords/passwords-update-success.tpl.html';
  };
  ($traceurRuntime.createClass)(PasswordsUpdateSuccessState, {}, {}, LoggedInOnlyState);
  Object.defineProperty(PasswordsUpdateSuccessState, "annotations", {get: function() {
      return [new State('passwordsUpdateSuccess')];
    }});
  return {
    get PasswordsRequestState() {
      return PasswordsRequestState;
    },
    get PasswordsRequestSuccessState() {
      return PasswordsRequestSuccessState;
    },
    get PasswordsUpdateState() {
      return PasswordsUpdateState;
    },
    get PasswordsUpdateSuccessState() {
      return PasswordsUpdateSuccessState;
    }
  };
});
System.registerModule("../src/passwords/passwords", [], function() {
  "use strict";
  var __moduleName = "../src/passwords/passwords";
  var Module = System.get("../vendor/a1atscript/dist/a1atscript").Module;
  var PasswordsStates = System.get("../src/passwords/passwordsStates");
  var PasswordsControllers = System.get("../src/passwords/passwordsControllers");
  var passwords = new Module('auth.passwords', ['ui.router.state', 'ng-token-auth', PasswordsStates, PasswordsControllers]);
  var $__default = passwords;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/common/inflector", [], function() {
  "use strict";
  var __moduleName = "../src/common/inflector";
  var $__0 = System.get("../vendor/a1atscript/dist/a1atscript"),
      Module = $__0.Module,
      Service = $__0.Service;
  var Inflector = function Inflector() {};
  ($traceurRuntime.createClass)(Inflector, {
    camelize: function(key) {
      if (!angular.isString(key)) {
        return key;
      }
      return key.replace(/_[\w\d]/g, function(match, index, string) {
        return index === 0 ? match : string.charAt(index + 1).toUpperCase();
      });
    },
    humanize: function(key) {
      if (!angular.isString(key)) {
        return key;
      }
      return key.replace(/_/g, ' ').replace(/(\w+)/g, function(match) {
        return match.charAt(0).toUpperCase() + match.slice(1);
      });
    },
    underscore: function(key) {
      if (!angular.isString(key)) {
        return key;
      }
      return key.replace(/[A-Z]/g, function(match, index) {
        return index === 0 ? match : '_' + match.toLowerCase();
      });
    },
    dasherize: function(key) {
      if (!angular.isString(key)) {
        return key;
      }
      return key.replace(/[A-Z]/g, function(match, index) {
        return index === 0 ? match : '-' + match.toLowerCase();
      });
    },
    pluralize: function(value) {
      return value + 's';
    }
  }, {});
  var $__default = Inflector;
  Object.defineProperty(Inflector, "annotations", {get: function() {
      return [new Module('inflector'), new Service('Inflector')];
    }});
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/common/serializer", [], function() {
  "use strict";
  var __moduleName = "../src/common/serializer";
  var Inflector = System.get("../src/common/inflector").default;
  var $__1 = System.get("../vendor/a1atscript/dist/a1atscript"),
      Module = $__1.Module,
      Factory = $__1.Factory,
      Provider = $__1.Provider;
  function SerializerProvider() {
    var defaultOptions = {
      underscore: undefined,
      camelize: undefined,
      pluralize: undefined,
      exclusionMatchers: []
    };
    this.underscore = function(fn) {
      defaultOptions.underscore = fn;
      return this;
    };
    this.camelize = function(fn) {
      defaultOptions.camelize = fn;
      return this;
    };
    this.pluralize = function(fn) {
      defaultOptions.pluralize = fn;
      return this;
    };
    this.exclusionMatchers = function(exclusions) {
      defaultOptions.exclusionMatchers = exclusions;
      return this;
    };
    this.$get = ['$injector', 'Inflector', function($injector, Inflector) {
      defaultOptions.underscore = defaultOptions.underscore || Inflector.underscore;
      defaultOptions.camelize = defaultOptions.camelize || Inflector.camelize;
      defaultOptions.pluralize = defaultOptions.pluralize || Inflector.pluralize;
      function Serializer() {
        this.exclusions = {};
        this.inclusions = {};
        this.serializeMappings = {};
        this.deserializeMappings = {};
        this.customSerializedAttributes = {};
        this.preservedAttributes = {};
        this.options = angular.extend({excludeByDefault: false}, defaultOptions || {});
      }
      Serializer.prototype.exclude = function() {
        var exclusions = this.exclusions;
        angular.forEach(arguments, function(attributeName) {
          exclusions[attributeName] = false;
        });
        return this;
      };
      Serializer.prototype.only = function() {
        var inclusions = this.inclusions;
        this.options.excludeByDefault = true;
        angular.forEach(arguments, function(attributeName) {
          inclusions[attributeName] = true;
        });
        return this;
      };
      Serializer.prototype.rename = function(javascriptName, jsonName, bidirectional) {
        this.serializeMappings[javascriptName] = jsonName;
        if (bidirectional || bidirectional === undefined) {
          this.deserializeMappings[jsonName] = javascriptName;
        }
        return this;
      };
      Serializer.prototype.add = function(attributeName, value) {
        this.customSerializedAttributes[attributeName] = value;
        return this;
      };
      Serializer.prototype.preserve = function(attributeName) {
        this.preservedAttributes[attributeName] = true;
        return this;
      };
      Serializer.prototype.isExcludedFromSerialization = function(attributeName) {
        if ((this.options.excludeByDefault && !this.inclusions.hasOwnProperty(attributeName)) || this.exclusions.hasOwnProperty(attributeName)) {
          return true;
        }
        if (this.options.exclusionMatchers) {
          var excluded = false;
          angular.forEach(this.options.exclusionMatchers, function(matcher) {
            if (angular.isString(matcher)) {
              excluded = excluded || attributeName.indexOf(matcher) === 0;
            } else if (angular.isFunction(matcher)) {
              excluded = excluded || matcher.call(undefined, attributeName);
            } else if (matcher instanceof RegExp) {
              excluded = excluded || matcher.test(attributeName);
            }
          });
          return excluded;
        }
        return false;
      };
      Serializer.prototype.getSerializedAttributeName = function(attributeName) {
        var mappedName = this.serializeMappings[attributeName] || attributeName;
        var mappedNameExcluded = this.isExcludedFromSerialization(mappedName),
            attributeNameExcluded = this.isExcludedFromSerialization(attributeName);
        if (this.options.excludeByDefault) {
          if (mappedNameExcluded && attributeNameExcluded) {
            return undefined;
          }
        } else {
          if (mappedNameExcluded || attributeNameExcluded) {
            return undefined;
          }
        }
        return this.underscore(mappedName);
      };
      Serializer.prototype.isExcludedFromDeserialization = function(attributeName) {
        return false;
      };
      Serializer.prototype.getDeserializedAttributeName = function(attributeName) {
        var camelizedName = this.camelize(attributeName);
        camelizedName = this.deserializeMappings[attributeName] || this.deserializeMappings[camelizedName] || camelizedName;
        if (this.isExcludedFromDeserialization(attributeName) || this.isExcludedFromDeserialization(camelizedName)) {
          return undefined;
        }
        return camelizedName;
      };
      Serializer.prototype.serializeValue = function(data) {
        var result = data,
            self = this;
        if (angular.isArray(data)) {
          result = [];
          angular.forEach(data, function(value) {
            result.push(self.serializeValue(value));
          });
        } else if (angular.isObject(data)) {
          if (angular.isDate(data)) {
            return data;
          }
          result = {};
          angular.forEach(data, function(value, key) {
            if (!angular.isFunction(value)) {
              self.serializeAttribute(result, key, value);
            }
          });
        }
        return result;
      };
      Serializer.prototype.serializeAttribute = function(data, attribute, value) {
        var serializedAttributeName = this.getSerializedAttributeName(attribute);
        if (serializedAttributeName === undefined) {
          return;
        }
        data[serializedAttributeName] = this.serializeValue(value);
      };
      Serializer.prototype.serialize = function(data) {
        var result = this.serializeValue(data),
            self = this;
        if (angular.isObject(result)) {
          angular.forEach(this.customSerializedAttributes, function(value, key) {
            if (angular.isFunction(value)) {
              value = value.call(data, data);
            }
            self.serializeAttribute(result, key, value);
          });
        }
        return result;
      };
      Serializer.prototype.deserializeValue = function(data) {
        var result = data,
            self = this;
        if (angular.isArray(data)) {
          result = [];
          angular.forEach(data, function(value) {
            result.push(self.deserializeValue(value));
          });
        } else if (angular.isObject(data)) {
          if (angular.isDate(data)) {
            return data;
          }
          result = {};
          angular.forEach(data, function(value, key) {
            self.deserializeAttribute(result, key, value);
          });
        }
        return result;
      };
      Serializer.prototype.deserializeAttribute = function(data, attribute, value) {
        var attributeName = this.getDeserializedAttributeName(attribute);
        if (attributeName === undefined) {
          return;
        }
        if (this.preservedAttributes[attributeName]) {
          data[attributeName] = value;
        } else {
          data[attributeName] = this.deserializeValue(value);
        }
      };
      Serializer.prototype.deserialize = function(data) {
        return this.deserializeValue(data);
      };
      Serializer.prototype.pluralize = function(value) {
        if (this.options.pluralize) {
          return this.options.pluralize(value);
        }
        return value;
      };
      Serializer.prototype.underscore = function(value) {
        if (this.options.underscore) {
          return this.options.underscore(value);
        }
        return value;
      };
      Serializer.prototype.camelize = function(value) {
        if (this.options.camelize) {
          return this.options.camelize(value);
        }
        return value;
      };
      return Serializer;
    }];
  }
  Object.defineProperty(SerializerProvider, "annotations", {get: function() {
      return [new Provider('Serializer')];
    }});
  function RequestInterceptor(Serializer) {
    var serializer = new Serializer();
    return function(elem, operation, what) {
      var retElem = elem;
      if (operation === 'post' || operation === 'put') {
        retElem = serializer.serialize(elem);
      }
      return retElem;
    };
  }
  Object.defineProperty(RequestInterceptor, "annotations", {get: function() {
      return [new Factory('RequestInterceptor', ['Serializer'])];
    }});
  function ResponseInterceptor(Serializer) {
    var serializer = new Serializer();
    return function(data, operation, what, url, response, deferred) {
      return serializer.deserialize(data);
    };
  }
  Object.defineProperty(ResponseInterceptor, "annotations", {get: function() {
      return [new Factory('ResponseInterceptor', ['Serializer'])];
    }});
  var Serializer = new Module('serializer', [Inflector, SerializerProvider, RequestInterceptor, ResponseInterceptor]);
  var $__default = Serializer;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/common/environment", [], function() {
  "use strict";
  var __moduleName = "../src/common/environment";
  var environment = {
    backendUrl: 'http://localhost:3000/',
    name: "development"
  };
  return {get environment() {
      return environment;
    }};
});
System.registerModule("../src/common/config", [], function() {
  "use strict";
  var __moduleName = "../src/common/config";
  var environment = System.get("../src/common/environment").environment;
  var backendUrl = (function() {
    var cookies = [];
    if (document.cookie) {
      cookies = document.cookie.split(';');
    }
    var matches = cookies.filter((function(cookie) {
      return /^lrdBackendUrl=/.test(cookie);
    }));
    if (matches.length > 0) {
      return matches[0].split('=')[1];
    } else {
      return environment.backendUrl;
    }
  }());
  var appName = "LRD-CMS2";
  var configuration = {
    backendUrl: backendUrl,
    appName: appName
  };
  if (environment.name) {
    configuration.appTitle = (configuration.appName + " - " + environment.name);
  } else {
    configuration.appTitle = configuration.appName;
  }
  return {
    get backendUrl() {
      return backendUrl;
    },
    get appName() {
      return appName;
    },
    get configuration() {
      return configuration;
    }
  };
});
System.registerModule("../src/common/toast/compiler", [], function() {
  "use strict";
  var __moduleName = "../src/common/toast/compiler";
  var appName = System.get("../src/common/config").appName;
  function lrdCompilerService($q, $http, $injector, $compile, $controller, $templateCache) {
    this.compile = function(options) {
      var templateUrl = options.templateUrl;
      var template = options.template || '';
      var controller = options.controller;
      var controllerAs = options.controllerAs;
      var resolve = options.resolve || {};
      var locals = options.locals || {};
      var transformTemplate = options.transformTemplate || angular.identity;
      angular.forEach(resolve, function(value, key) {
        if (angular.isString(value)) {
          resolve[key] = $injector.get(value);
        } else {
          resolve[key] = $injector.invoke(value);
        }
      });
      angular.extend(resolve, locals);
      if (templateUrl) {
        resolve.$template = $http.get(templateUrl, {cache: $templateCache}).then(function(response) {
          return response.data;
        });
      } else {
        resolve.$template = $q.when(template);
      }
      return $q.all(resolve).then(function(locals) {
        var template = transformTemplate(locals.$template);
        var element = angular.element('<div>').html(template).contents();
        var linkFn = $compile(element);
        return {
          locals: locals,
          element: element,
          link: function link(scope) {
            locals.$scope = scope;
            if (controller) {
              var ctrl = $controller(controller, locals);
              element.data('$ngControllerController', ctrl);
              element.children().data('$ngControllerController', ctrl);
              if (controllerAs) {
                scope[controllerAs] = ctrl;
              }
            }
            return linkFn(scope);
          }
        };
      });
    };
  }
  angular.module((appName + ".compiler"), []).service('$lrdCompiler', ['$q', '$http', '$injector', '$compile', '$controller', '$templateCache', lrdCompilerService]);
  return {};
});
System.registerModule("../src/common/toast/interimElement", [], function() {
  "use strict";
  var __moduleName = "../src/common/toast/interimElement";
  var appName = System.get("../src/common/config").appName;
  System.get("../src/common/toast/compiler");
  angular.module((appName + ".interimElement"), [(appName + ".compiler")]).factory('$$interimElement', ['$q', '$rootScope', '$timeout', '$rootElement', '$animate', '$lrdCompiler', InterimElementFactory]);
  function InterimElementFactory($q, $rootScope, $timeout, $rootElement, $animate, $lrdCompiler) {
    return function createInterimElementService(defaults) {
      var stack = [];
      var parent = $rootElement.find('body');
      if (!parent.length) {
        parent = $rootElement;
      }
      defaults = angular.extend({
        parent: parent,
        onShow: function(scope, $el, options) {
          return $animate.enter($el, options.parent);
        },
        onRemove: function(scope, $el, options) {
          return $animate.leave($el);
        }
      }, defaults || {});
      var service;
      service = {
        show: show,
        hide: hide,
        cancel: cancel
      };
      return service;
      function show(options) {
        if (stack.length) {
          service.hide();
        }
        var interimElement = new InterimElement(options);
        stack.push(interimElement);
        return interimElement.show().then(function() {
          return interimElement.deferred.promise;
        });
      }
      function hide(success) {
        var interimElement = stack.shift();
        interimElement.remove().then(function() {
          interimElement.deferred.resolve(success);
        });
      }
      function cancel(reason) {
        var interimElement = stack.shift();
        interimElement.remove().then(function() {
          interimElement.deferred.reject(reason);
        });
      }
      function InterimElement(options) {
        var self;
        var hideTimeout,
            element;
        options = options || {};
        options = angular.extend({scope: options.scope || $rootScope.$new(options.isolateScope)}, defaults, options);
        self = {
          options: options,
          deferred: $q.defer(),
          show: function() {
            return $lrdCompiler.compile(options).then(function(compiledData) {
              element = compiledData.link(options.scope);
              var ret = options.onShow(options.scope, element, options);
              return $q.when(ret).then(startHideTimeout);
              function startHideTimeout() {
                if (options.hideDelay) {
                  hideTimeout = $timeout(service.hide, options.hideDelay);
                }
              }
            });
          },
          cancelTimeout: function() {
            if (hideTimeout) {
              $timeout.cancel(hideTimeout);
              hideTimeout = undefined;
            }
          },
          remove: function() {
            self.cancelTimeout();
            var ret = options.onRemove(options.scope, element, options);
            return $q.when(ret).then(function() {
              options.scope.$destroy();
            });
          }
        };
        return self;
      }
    };
  }
  return {};
});
System.registerModule("../src/common/toast/swipe", [], function() {
  "use strict";
  var __moduleName = "../src/common/toast/swipe";
  var appName = System.get("../src/common/config").appName;
  (function() {
    angular.module((appName + ".swipe"), ['ng']).factory("$lrdSwipe", function() {
      var attachNoop = function() {
        return angular.noop;
      };
      return function SwipeService(scope, eventTypes) {
        if (!eventTypes) {
          eventTypes = "swipeleft swiperight";
        }
        return function configureFor(element, onSwipeCallback, attachLater) {
          var hammertime = new Hammer(element[0], {recognizers: addRecognizers([], eventTypes)});
          if (!attachLater) {
            attachSwipe();
          }
          scope.$on('$destroy', function() {
            hammertime.destroy();
          });
          return attachSwipe;
          function swipeHandler(ev) {
            ev.srcEvent.stopPropagation();
            if (angular.isFunction(onSwipeCallback)) {
              scope.$apply(function() {
                onSwipeCallback(ev);
              });
            }
          }
          function attachSwipe() {
            hammertime.on(eventTypes, swipeHandler);
            return function detachSwipe() {
              hammertime.off(eventTypes);
            };
          }
          function addRecognizers(list, events) {
            var hasPanning = (events.indexOf("pan") > -1);
            var hasSwipe = (events.indexOf("swipe") > -1);
            if (hasPanning) {
              list.push([Hammer.Pan, {direction: Hammer.DIRECTION_HORIZONTAL}]);
            }
            if (hasSwipe) {
              list.push([Hammer.Swipe, {direction: Hammer.DIRECTION_HORIZONTAL}]);
            }
            return list;
          }
        };
      };
    }).directive("lrdSwipeLeft", ['$parse', '$lrdSwipe', function LRDSwipeLeft($parse, $lrdSwipe) {
      return {
        restrict: 'A',
        link: swipePostLink($parse, $lrdSwipe, "SwipeLeft")
      };
    }]).directive("lrdSwipeRight", ['$parse', '$lrdSwipe', function LRDSwipeRight($parse, $lrdSwipe) {
      return {
        restrict: 'A',
        link: swipePostLink($parse, $lrdSwipe, "SwipeRight")
      };
    }]);
    function swipePostLink($parse, $lrdSwipe, name) {
      return function(scope, element, attrs) {
        var direction = name.toLowerCase();
        var directiveName = "lrd" + name;
        var parentGetter = $parse(attrs[directiveName]) || angular.noop;
        var configureSwipe = $lrdSwipe(scope, direction);
        var requestSwipe = function(locals) {
          parentGetter(scope, locals);
        };
        configureSwipe(element, function onHandleSwipe(ev) {
          if (ev.type == direction) {
            requestSwipe();
          }
        });
      };
    }
  })();
  return {};
});
System.registerModule("../src/common/toast/toast", [], function() {
  "use strict";
  var __moduleName = "../src/common/toast/toast";
  var appName = System.get("../src/common/config").appName;
  var $__1 = System.get("../vendor/a1atscript/dist/a1atscript"),
      Factory = $__1.Factory,
      Controller = $__1.Controller,
      Directive = $__1.Directive,
      Module = $__1.Module;
  System.get("../src/common/toast/swipe");
  System.get("../src/common/toast/interimElement");
  var Inflector = System.get("../src/common/inflector").default;
  function lrdToastDirective() {
    return {restrict: 'E'};
  }
  Object.defineProperty(lrdToastDirective, "annotations", {get: function() {
      return [new Directive('$lrdToast')];
    }});
  function lrdToastErrorListCtrl($scope, type, header, messages) {
    $scope.type = type;
    $scope.header = header;
    $scope.messages = messages;
  }
  Object.defineProperty(lrdToastErrorListCtrl, "annotations", {get: function() {
      return [new Controller('$lrdToastErrorListCtrl', ['$scope', 'type', 'header', 'messages'])];
    }});
  function lrdToastErrorCtrl($scope, type, message) {
    $scope.type = type;
    $scope.message = message;
  }
  Object.defineProperty(lrdToastErrorCtrl, "annotations", {get: function() {
      return [new Controller('$lrdToastErrorCtrl', ['$scope', 'type', 'message'])];
    }});
  function lrdToastNoticeCtrl($scope, type, message) {
    $scope.type = type;
    $scope.message = message;
  }
  Object.defineProperty(lrdToastNoticeCtrl, "annotations", {get: function() {
      return [new Controller('$lrdToastNoticeCtrl', ['$scope', 'type', 'message'])];
    }});
  function lrdToastService($timeout, $$interimElement, $animate, $lrdSwipe, Inflector) {
    var factoryDef = {
      onShow: onShow,
      onRemove: onRemove,
      position: 'bottom left',
      hideDelay: 3000
    };
    var toastElement = angular.element(document.getElementById("toast_main"));
    var $lrdToast = $$interimElement(factoryDef);
    $lrdToast.notice = function(message) {
      var type = arguments[1] !== (void 0) ? arguments[1] : "notice";
      return this.show({
        parent: toastElement,
        templateUrl: "toast/notice.tpl.html",
        position: 'top left',
        locals: {
          type: type,
          message: message
        },
        controller: '$lrdToastNoticeCtrl'
      });
    };
    $lrdToast.error = function(message) {
      var type = arguments[1] !== (void 0) ? arguments[1] : "error";
      return this.show({
        parent: toastElement,
        templateUrl: "toast/error.tpl.html",
        position: 'top left',
        locals: {
          type: type,
          message: message
        },
        controller: '$lrdToastErrorCtrl'
      });
    };
    $lrdToast.errorList = function(errors) {
      var header = arguments[1] !== (void 0) ? arguments[1] : "";
      var type = arguments[2] !== (void 0) ? arguments[2] : "error";
      var messages = [];
      if (Array.isArray(errors)) {
        messages = errors;
      } else {
        for (var key in errors) {
          if (errors.hasOwnProperty(key)) {
            messages.push((Inflector.humanize(key) + " " + errors[key]));
          }
        }
      }
      return this.show({
        parent: toastElement,
        templateUrl: "toast/error-list.tpl.html",
        position: 'top left',
        locals: {
          type: type,
          header: header,
          messages: messages
        },
        controller: '$lrdToastErrorListCtrl'
      });
    };
    return $lrdToast;
    function onShow(scope, element, options) {
      element.addClass(options.position);
      options.parent.addClass(toastOpenClass(options.position));
      var configureSwipe = $lrdSwipe(scope, 'swipeleft swiperight');
      options.detachSwipe = configureSwipe(element, function(ev) {
        element.addClass(ev.type);
        $timeout($lrdToast.hide);
      });
      return $animate.enter(element, options.parent);
    }
    function onRemove(scope, element, options) {
      options.detachSwipe();
      options.parent.removeClass(toastOpenClass(options.position));
      return $animate.leave(element);
    }
    function toastOpenClass(position) {
      return 'lrd-toast-open-' + (position.indexOf('top') > -1 ? 'top' : 'bottom');
    }
  }
  Object.defineProperty(lrdToastService, "annotations", {get: function() {
      return [new Factory('$lrdToast', ['$timeout', '$$interimElement', '$animate', '$lrdSwipe', 'Inflector'])];
    }});
  var Toast = new Module('toast', [(appName + ".interimElement"), (appName + ".swipe"), Inflector, lrdToastDirective, lrdToastErrorListCtrl, lrdToastErrorCtrl, lrdToastNoticeCtrl, lrdToastService]);
  var $__default = Toast;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/registrations/registrationsControllers", [], function() {
  "use strict";
  var __moduleName = "../src/registrations/registrationsControllers";
  var Controller = System.get("../vendor/a1atscript/dist/a1atscript").Controller;
  function RegistrationsController($scope, $auth, $state, $lrdToast, Serializer) {
    $scope.registration = {
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: ''
    };
    $scope.registrationSubmit = function() {
      var serializer = new Serializer();
      $auth.submitRegistration(serializer.serialize({user: $scope.registration})).then(function(resp) {
        $state.go('root.inner.registrationsSuccess');
      }).catch(function(resp) {
        $lrdToast.errorList(resp.data.errors, "We cannot process your registration because:");
      });
    };
  }
  var $__default = RegistrationsController;
  Object.defineProperty(RegistrationsController, "annotations", {get: function() {
      return [new Controller('RegistrationsCtrl', ['$scope', '$auth', '$state', '$lrdToast', 'Serializer'])];
    }});
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/registrations/registrationsStates", [], function() {
  "use strict";
  var __moduleName = "../src/registrations/registrationsStates";
  var State = System.get("../src/stateInjector").State;
  var RegistrationsState = function RegistrationsState() {
    this.url = '^/sign-up';
    this.controller = 'RegistrationsCtrl';
    this.templateUrl = 'registrations/registrations.tpl.html';
  };
  ($traceurRuntime.createClass)(RegistrationsState, {}, {});
  Object.defineProperty(RegistrationsState, "annotations", {get: function() {
      return [new State('registrations')];
    }});
  var RegistrationsSuccessState = function RegistrationsSuccessState() {
    this.url = '^/signed-up';
    this.templateUrl = 'registrations/registrations-success.tpl.html';
  };
  ($traceurRuntime.createClass)(RegistrationsSuccessState, {}, {});
  Object.defineProperty(RegistrationsSuccessState, "annotations", {get: function() {
      return [new State('registrationsSuccess')];
    }});
  return {
    get RegistrationsState() {
      return RegistrationsState;
    },
    get RegistrationsSuccessState() {
      return RegistrationsSuccessState;
    }
  };
});
System.registerModule("../src/registrations/registrations", [], function() {
  "use strict";
  var __moduleName = "../src/registrations/registrations";
  var Module = System.get("../vendor/a1atscript/dist/a1atscript").Module;
  var Toast = System.get("../src/common/toast/toast").default;
  var Serializer = System.get("../src/common/serializer").default;
  var RegistrationsStates = System.get("../src/registrations/registrationsStates");
  var RegistrationsController = System.get("../src/registrations/registrationsControllers").default;
  var registrations = new Module('auth.registrations', ['ui.router.state', 'ng-token-auth', Toast, Serializer, RegistrationsStates, RegistrationsController]);
  var $__default = registrations;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/sessions/sessionsControllers", [], function() {
  "use strict";
  var __moduleName = "../src/sessions/sessionsControllers";
  var Controller = System.get("../vendor/a1atscript/dist/a1atscript").Controller;
  function SessionsController($scope, $auth, $state, $lrdToast, Serializer, authConfig, Inflector) {
    $scope.session = {password: ''};
    $scope.session[authConfig.authKey] = '';
    $scope.authKey = authConfig.authKey;
    $scope.humanAuthKey = Inflector.humanize(authConfig.authKey);
    $scope.passwordShow = authConfig.recoverable;
    $scope.sessionSubmit = function() {
      var serializer = new Serializer();
      $auth.submitLogin(serializer.serialize({user: $scope.session})).then(function(resp) {
        $state.go('root.inner.sessionsSuccess');
      }).catch(function(resp) {
        $lrdToast.error(resp.errors);
      });
    };
  }
  var $__default = SessionsController;
  Object.defineProperty(SessionsController, "annotations", {get: function() {
      return [new Controller('SessionsCtrl', ['$scope', '$auth', '$state', '$lrdToast', 'Serializer', 'authConfig', 'Inflector'])];
    }});
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/sessions/sessionsStates", [], function() {
  "use strict";
  var __moduleName = "../src/sessions/sessionsStates";
  var $__0 = System.get("../src/stateInjector"),
      State = $__0.State,
      Resolve = $__0.Resolve,
      LoggedInOnlyState = $__0.LoggedInOnlyState;
  var SessionsState = function SessionsState() {
    this.url = '^/sign-in';
    this.controller = 'SessionsCtrl';
    this.templateUrl = 'sessions/sessions.tpl.html';
  };
  ($traceurRuntime.createClass)(SessionsState, {}, {});
  Object.defineProperty(SessionsState, "annotations", {get: function() {
      return [new State('sessions')];
    }});
  var SessionsSuccessState = function SessionsSuccessState() {
    this.url = '^/signed-in';
    this.templateUrl = 'sessions/sessions-success.tpl.html';
  };
  ($traceurRuntime.createClass)(SessionsSuccessState, {}, {}, LoggedInOnlyState);
  Object.defineProperty(SessionsSuccessState, "annotations", {get: function() {
      return [new State('sessionsSuccess')];
    }});
  return {
    get SessionsState() {
      return SessionsState;
    },
    get SessionsSuccessState() {
      return SessionsSuccessState;
    }
  };
});
System.registerModule("../src/sessions/sessions", [], function() {
  "use strict";
  var __moduleName = "../src/sessions/sessions";
  var Module = System.get("../vendor/a1atscript/dist/a1atscript").Module;
  var Toast = System.get("../src/common/toast/toast").default;
  var Inflector = System.get("../src/common/inflector").default;
  var Serializer = System.get("../src/common/serializer").default;
  var Config = System.get("../src/config/config").default;
  var SessionsStates = System.get("../src/sessions/sessionsStates");
  var SessionsController = System.get("../src/sessions/sessionsControllers").default;
  var sessions = new Module('auth.sessions', ['ui.router.state', 'ng-token-auth', Toast, Inflector, Serializer, Config, SessionsStates, SessionsController]);
  var $__default = sessions;
  return {get default() {
      return $__default;
    }};
});
System.registerModule("../src/auth.js", [], function() {
  "use strict";
  var __moduleName = "../src/auth.js";
  var backendUrl = System.get("../src/common/config").backendUrl;
  var Sessions = System.get("../src/sessions/sessions").default;
  var Registrations = System.get("../src/registrations/registrations").default;
  var Confirmations = System.get("../src/confirmations/confirmations").default;
  var Passwords = System.get("../src/passwords/passwords").default;
  var AuthConfig = System.get("../src/config/config").default;
  var $__6 = System.get("../vendor/a1atscript/dist/a1atscript"),
      Config = $__6.Config,
      Module = $__6.Module;
  function authSetup($authProvider, authConfigProvider) {
    var location = window.location.href;
    var confirmationLocation = location.split("#")[0] + "#/confirmed";
    var passwordResetSuccessLocation = location.split("#")[0] + "#/update-password";
    $authProvider.configure({
      apiUrl: backendUrl,
      tokenValidationPath: 'users/validate_token',
      signOutUrl: 'users/sign_out',
      emailRegistrationPath: 'users',
      accountUpdatePath: 'users',
      accountDeletePath: 'users',
      passwordResetPath: 'users/password',
      passwordUpdatePath: 'users/password',
      emailSignInPath: 'users/sign_in',
      storage: 'localStorage',
      confirmationSuccessUrl: confirmationLocation,
      passwordResetSuccessUrl: passwordResetSuccessLocation
    });
    authConfigProvider.authKey("email");
    authConfigProvider.enableRecovery();
  }
  Object.defineProperty(authSetup, "annotations", {get: function() {
      return [new Config('$authProvider', 'authConfigProvider')];
    }});
  var authModule = new Module('auth', ['ng-token-auth', Sessions, Registrations, Confirmations, Passwords, AuthConfig, authSetup]);
  var $__default = authModule;
  return {get default() {
      return $__default;
    }};
});
System.get("../src/auth.js" + '');

//# sourceMappingURL=ng-auth-views.map
