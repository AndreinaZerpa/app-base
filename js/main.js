var addressApp = angular.module('addressApp', ['ngRoute'])

.config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                      templateUrl: 'templates/list.html',
                      controller: 'listController',
                      reloadOnSearch: false,
                    })
                    .when('/contact',{
                      templateUrl: 'templates/contact.html',
                      controller: 'contactController',
                      reloadOnSearch:false,
                    })
})

  .controller('mainController', function ($scope){
   var datos = localStorage.getItem("addressApp_data");
   if (datos != null){
     $scope.contacts = [];
     var rawContacts = JSON.parse(datos);
     _(rawContacts).forEach(function (value){
       $scope.contacts.push(new Contact(value));

     });
   } else {
     $scope.contacts = [
       new Contact({first_name: "Andre", last_name: "Zerpa",email:"andreinazerpa24@gmail.com",country:"es"}),
       new Contact({first_name: "Andre2", last_name: "Zerpa2",email:"andreinazerpa24@gmail2.com",country:"es"}),

     ];
   }
   console.debug($scope.contacts);
 })

 .controller('listController', function ($scope){

 })


  .controller('contactController', function ($scope){

  })
