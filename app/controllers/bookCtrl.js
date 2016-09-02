"use strict";

app.controller("BookCtrl", function($scope, BookStorage) {
  console.log("app.controller is here");
  BookStorage.getBookList()
    .then((bookCollection) => {
      console.log(bookCollection);
      console.log(bookCollection.guides);
      $scope.guides = bookCollection.guides;
      console.log($scope.guides);
    });
});