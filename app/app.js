"use strict";

console.log("app.js is here");
// here I'm creating the angular module variable
var app = angular.module("TravelBookApp", ["ngRoute"]);

app.config(function($routeProvider) {
  console.log("inside app.config");
  $routeProvider.
    when("/items/list", {
      templateUrl: "partials/guide-list.html",
      controller: "BookCtrl"
    });
});