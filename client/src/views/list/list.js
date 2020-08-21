app.controller('indexCtl', ['$scope', '$http', function($scope, $http) {

    $scope.delete = function(index){

        console.log(index);
        
        $http.delete('http://localhost:8000/api/to-dos/'+index)
            .then((result)=>{

                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            });

    };
        
    $http.get('http://localhost:8000/api/to-dos/')
        .then((response)=> {
            $scope.todoItems = response.data.data;
        })
        .catch((error) =>{
            console.log(error);
        });

}]);