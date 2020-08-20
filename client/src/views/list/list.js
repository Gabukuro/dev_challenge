app.controller('indexCtl', ['$scope', '$http', function($scope, $http) {

    $scope.delete = function(index){
        
        $http({
            mthod: 'DELETE',
            url: `http://localhost:8000/to-dos/${index}`
            }).then(function(result){
    
                
    
            }), function(data, status){
                console.log(data);
            };
    };
    
    $scope.description = 'Olá';
    
    $http({
        mthod: 'GET',
        url: 'http://localhost:8000/to-dos/'
        }).then(function(result){

            $scope.todoItems = result.data.data;

            console.log(result.data);

        }), function(data, status){
            console.log(data);
        };

}]);