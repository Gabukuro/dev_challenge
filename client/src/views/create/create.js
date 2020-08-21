app.controller('addCtl',['$scope', '$http', '$location', function ($scope, $http, $location) {
    
    $scope.todoItem = null;

    $scope.submit = function(){

        $http.post('http://localhost:8000/api/to-dos/', $scope.todoItem)
            .then((response)=>{
                $location.path('/');
            })
            .catch((error)=>{
                console.log(error);
            })
        
    };
}]);