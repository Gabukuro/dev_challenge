app.controller('todoItemCtl',['$scope', '$stateParams', '$http', '$location', function ($scope, $stateParams, $http, $location) {

    let id = $stateParams.id;


    $http.get('http://localhost:8000/api/to-dos/' + id)
        .then((response)=> {

            let todoItem = response.data;

            if(todoItem.complete == "Complete") {
                todoItem.complete = true;
            } else {
                todoItem.complete = false;
            }

            $scope.todoItem = todoItem;
            
        })
        .catch((error) =>{
            console.log(error);
        });

    $scope.update = function(){

        let todoItem = $scope.todoItem;

        if(todoItem.complete == true) {
            todoItem.complete = "Complete";
        } else {
            todoItem.complete = "Not complete";
        }

        $http.put('http://localhost:8000/api/to-dos/' + id, todoItem)
            .then((response)=>{
                $location.path('/');
            })
            .catch((error)=>{
                console.log(error);
            });

    }

}]);