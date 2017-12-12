angular
.module("RyanSays")
.factory("ChatFactory", function ($http) {
    return Object.create(null, {
        "cache": {
            value: null,
            writable: true
        },
        "listChats": {
            value: function () {
                return $http({
                    method: "GET",
                    url: "https://ryansays-293c9.firebaseio.com/chats/.json"
                }).then(response => {
                    const data = response.data
                    // Make an array of objects so we can use filters
                   this.cache = Object.keys(data).map(key => {
                        data[key].id = key
                        return data[key]
                    })
                    return this.cache
                })
            }
        },
        "addChat": {
            value: function (chatObj) {
                return $http({
                    method: "POST",
                    url: "https://ryansays-293c9.firebaseio.com/chats/.json",
                    data: chatObj
                })
            }
        },

    })
})