angular.module('app', ['ngMaterial','ui.router'])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'views/login.html'
      })
      .state('manage', {
        url : '/manage',
        templateUrl : 'views/manage.html'
      })
      .state('register', {
        url : '/register',
        templateUrl : 'views/register.html'
      })
      .state('forgotusername', {
        url : '/forgotusername',
        templateUrl : 'views/forgotusername.html'
      })
      .state('forgotpassword', {
        url : '/forgotpassword',
        templateUrl : 'views/forgotpassword.html'
      });

      $urlRouterProvider.otherwise('login');
  }]);
