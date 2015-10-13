angular.module('app', ['ngMaterial','ui.router','ngMessages'])
  .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl : 'views/home.html'
      })
      .state('login', {
        url : '/login',
        templateUrl : 'views/login.html',
        controller : 'formValidation'
      })
      .state('manage', {
        url : '/manage',
        templateUrl : 'views/manage.html',
        controller : 'showDialog'
      })
      .state('register', {
        url : '/register',
        templateUrl : 'views/register.html',
        controller : 'formValidation'
      })
      .state('forgotusername', {
        url : '/forgotusername',
        templateUrl : 'views/forgotusername.html'
      })
      .state('message', {
        url : '/message',
        templateUrl : 'views/message.html'
      })
      .state('forgotpassword', {
        url : '/forgotpassword',
        templateUrl : 'views/forgotpassword.html'
      });

      $urlRouterProvider.otherwise('home');
  }])
  .controller('formValidation', ['$scope', '$state', function($scope, $state){
    $scope.submit = function(){
      if($state.current.name == 'login'){
        if($scope.username && $scope.password){
          $state.go('manage');
        }
      } else if ($state.current.name == 'register') {
        if($scope.username && $scope.real_pwd && $scope.real_pwd2 && $scope.name && $scope.name){
          if($scope.real_pwd != $scope.real_pwd2){
            alert("Password don't match");
          } else {
            $state.go('home');
          }
        }
      }
    }
  }])
  .controller('showDialog', ['$scope', '$mdDialog', function($scope, $mdDialog){
    $scope.showProfile = function(){
      $mdDialog.show({
        controller: 'showDialog',
        templateUrl: 'views/profile.html',
        clickOutsideToClose:true
      })
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }])
