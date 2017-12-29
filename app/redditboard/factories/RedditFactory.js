angular
.module("RyanSays")
.factory("RedditFactory", function ($http) {
    return Object.create(null, {
        "cache": {
            value: null,
            writable: true
        },
        "listReddits": {
            value: function () {
                return $http({
                    method: "GET",
                    url: "https://www.reddit.com/r/ockytop/.json"
                }).then(response => {
                    const data = response.data
                    console.log(data)
                    // Make an array of objects so we can use filters
                   this.cache = Object.keys(data).map(key => {
                        data[key].id = key
                        return data[key]
                    })
                    return this.cache
                })
            }
        }
    })
})