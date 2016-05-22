'use strict';

angular.module('confusionApp')
    .constant("baseURL","http://localhost:3001/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
        this.getDishes  = function(){
            return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
        };
    }])
    .service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
      this.getFeedbacks  = function(){
        return $resource(baseURL+"feedback/:id",null,  {'save':{method:'POST' }});
      };
    }])
    .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
        var corpfac = {};
        corpfac.getLeaders  = function(){
            return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
        };
        corpfac.getPromotions  = function(){
            return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
        };
        return corpfac;
    }]);