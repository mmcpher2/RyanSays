

const app = angular.module("RyanSays", ["ngRoute"])

// angular.module("RyanSays").config(function ($routeProvider) {
//     /**
//      * Configure all Angular application routes here
//      */
//     $routeProvider.
//             when(`/auth`, {
//                 templateUrl: "app/auth/partials/auth.html",
//                 controller: "AuthCtrl"
//             })
//         // when("/employees/list", {
//         //     templateUrl: "app/employees/partials/list.html",
//         //     controller: "EmployeeListCtrl"
//         // })
//         // .when('/employees/new', {
//         //     templateUrl: 'app/employees/partials/create.html',
//         //     controller: 'EmployeeCreateCtrl'
//         // })
//         // .when('/employees/detail/:employeeId', { // <-- Magic happens here
//         //     templateUrl: 'app/employees/partials/detail.html',
//         //     controller: 'EmployeeDetailCtrl'
//         // })
//         // .otherwise('/employees/list')
// })