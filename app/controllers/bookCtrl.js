"use strict";

app.controller("BookCtrl", function($scope, BookStorage) {
  BookStorage.getBookList()
    .then((bookCollection) => {
      console.log(bookCollection);
      console.log(bookCollection.guides);
      $scope.guides = bookCollection.guides;
      console.log($scope.guides);
    });
});