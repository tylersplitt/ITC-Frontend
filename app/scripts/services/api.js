'use strict';

angular.module('itcFrontendApp')

.service('Api', function(ApiUrl, $http) {

  var urlBase = ApiUrl.getUrl();

  this.getAllAthletes = function() {
    return $http.get(urlBase + 'athletes/');
  };

  this.getAllAthletesBy = function(filter) {
    return $http.get(urlBase + 'athletes/?' + filter);
  };

  this.getAthlete = function(id) {
    return $http.get(urlBase + 'athletes/getAthlete/' + id + '/');
  };

  this.getAthleteResults = function(id) {
    return $http.get(urlBase + 'athletes/getAthleteResults/' + id + '/');
  };

  this.getAthletePRs = function(id) {
    return $http.get(urlBase + 'athletes/getAthleteBests/' + id + '/');
  };

  this.getAllEvents = function() {
    return $http.get(urlBase + 'events/');
  };

  this.getEvent = function(id) {
    return $http.get(urlBase + 'events/getEvent/' + id + '/');
  };

  this.getAllTopPerformances = function() {
    return $http.get(urlBase + 'events/getTopPerformances/');
  };

  this.getAllRecords = function() {
    return $http.get(urlBase + 'events/getRecords/');
  };

  this.getAllMeets = function() {
    return $http.get(urlBase + 'meets/');
  };

  this.getAllMeetsBy = function(filter) {
    return $http.get(urlBase + 'meets/?' + filter);
  };

  this.getMeet = function(id) {
    return $http.get(urlBase + 'meets/getMeet/' + id + '/');
  };

  this.getAllResults = function() {
    return $http.get(urlBase + 'results/');
  };

  this.getResult = function(id) {
    return $http.get(urlBase + 'results/getResult/' + id + '/');
  };

  this.getAllNews = function() {
    return $http.get(urlBase + 'news/');
  };

  this.getAllNewsBy = function(filter) {
    return $http.get(urlBase + 'news/?' + filter);
  };

  this.getNews = function(id) {
    return $http.get(urlBase + 'news/getNews/' + id + '/');
  };
});
