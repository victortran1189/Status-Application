var myStatusApp= angular.module("myStatusApp", []);



myStatusApp.controller("MainCtrl", ['$scope', function ($scope) {

  $scope.myData = [
   {
       "Applications": "CRADA",
       "company": "Test",
       "Status": "Online",
       "thumb": "img/Online.png",
   },
   {
       "Applications": "Form One",
       "company": "Test",
       "Status": "Offline",
       "thumb": "img/offline.png",
   },
   {
       "Applications": "Document Tracker",
       "company": "Test",
       "Status": "Online",
       "thumb": "img/Online.png",
   }
];
}]);
