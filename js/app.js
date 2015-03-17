(function(angular) {
angular.module('app', ['ngAnimate'])
  .controller('Slider', ['$scope', function($scope){
    $scope.flag = 'unslide';
    $scope.hide = 'show';
    $scope.slide = function(){
      $scope.hide = 'hide';
      if(/IEMobile/i.test(navigator.userAgent)) {
        $scope.flag = 'slideIE';
      } else{
        $scope.flag = 'slide';
      }
    };
    $scope.unslide = function(){
      $scope.hide = 'show';
      if(/IEMobile/i.test(navigator.userAgent)) {
        $scope.flag = 'unslideIE';
      } else{
        $scope.flag = 'unslide';
      }      
    };

  }]);
})(window.angular);