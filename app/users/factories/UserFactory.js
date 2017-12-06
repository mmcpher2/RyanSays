

angular
.module("RyanSays")
.factory("UserFactory", function ($http) {
    return Object.create(null, {
        // "cache": {
        //     value: null,
        //     writable: true
        // },
        // "find": {
        //     value: function (searchString) {
        //         const result = this.cache.find(s => {
        //             return s.firstName.includes(searchString) ||
        //                    s.lastName.includes(searchString)
        //         })
        //         return result}
        // },
        // "list": {
        //     value: function () {
        //         return $http({
        //             method: "GET",
        //             url: "https://ryansays-293c9.firebaseio.com/users/.json"
        //         }).then(response => {
        //             const data = response.data
        //             // Make an array of objects so we can use filters
        //            this.cache = Object.keys(data).map(key => {
        //                 data[key].id = key
        //                 return data[key]
        //             })
        //             return this.cache
        //         })
        //     }
        // },
        // "single": {
        //     value: function (key) {
        //         return $http({
        //             method: "GET",
        //             url: `https://ryansays-293c9.firebaseio.com/users/${key}/.json`
        //         }).then(response => {
        //             return response.data
        //         })
        //     }
        // },
        "add": {
            value: function (userObj) {
                return $http({
                    method: "POST",
                    url: "https://ryansays-293c9.firebaseio.com/users/.json",
                    data: userObj
                })
            }
        },
    //     "fire": {
    //         value: function (employee, key) {
    //             employee.employmentEnd = Date.now()
    //             return $http({
    //                 method: "PUT",
    //                 url: `https://ryansays-293c9.firebaseio.com/users/${key}/.json`,
    //                 data: employee
    //             })
    //         }
    //     },
    //     "murder": {
    //         value: function (key) {
    //             return $http({
    //                 method: "DELETE",
    //                 url: `https://ryansays-293c9.firebaseio.com/users/${key}/.json`,
    //             })
    //         }
    //     }
    })
})