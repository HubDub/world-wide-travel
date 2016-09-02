"use strict";

app.controller("BookCtrl", function($scope, $q, $http) {
  let getBookList = () => {
    return $q((resolve, reject) => {
      $http.get("../../data/guides.json")
        .success((bookObject) => {
          console.log(bookObject);
          resolve(bookObject);
        })
        .error((error) => {
          reject(error);
        });
    });
  };
  getBookList().then(function(bookCollection) {
    $scope.guides = bookCollection.guides;
  });
});
