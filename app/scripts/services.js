'use strict';

angular.module('confusionApp')
    .constant("baseURL","http://localhost:3001/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
        this.getDishes  = function(){
            return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
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
    }])
      .service('featuredFactory', function() {

             var dish =   {   _id:0,
                                         name:'Uthapizza',
                                         image: 'images/uthapizza.png',
                                         category: 'mains',
                                         label:'Hot',
                                         price:'4.99',
                                         description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                                         };
             var promotion = {
              _id:0,
              name:'Weekend Grand Buffet',
              image: 'images/uthapizza.png',
              category: 'promotions',
              label:'New',
              price:'19.90',
              description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five chocolate deserts. Free flowing bubbly and soft drinks. All for just $19.90 per person'
              };

              var leadership = {   _id: 0,
                                        name: "Peter Pan",
                                        image: 'images/alberto.png',
                                        designation: "Chief Epicurious Officer",
                                        abbr: "CEO",
                                        description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
                                    };
              this.getDish  = function(){ return dish; };
              this.getPromotion  = function () { return promotion;};
              this.getLeader  = function () { return leadership;};
              });