"use strict";

app.factory("BookStorage", ($q, $http) => {
  let getBookList = () => {
    return $q((resolve, reject) => {
      $http.get("../../data/guides.json")
        .success((bookObject) => {
          resolve(bookObject);
        })
        .error((error) => {
          reject(error);
        });
    });
  };
  return {getBookList};
});