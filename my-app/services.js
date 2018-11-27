app.factory('firstFactoryMethod', ['$resource', function ($resource) {
    return $resource('https://jsonplaceholder.typicode.com/todos', {}, {
        show: {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            isArray: true
        }
    });
}])