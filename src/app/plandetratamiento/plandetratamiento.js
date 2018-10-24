var app = angular.module('app', []);

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
}]);

app.controller('appController', function ($scope, $window) {
    var data = 'Peso:Talla:Edad:',
        blob = new Blob([data], { type: 'file.xlsx' }),
        url = $window.URL || $window.webkitURL;
    $scope.fileUrl = url.createObjectURL(blob);
    
});