angular
    .module ("TodoApp" ,[])
    .controller("TodoController", TodoController);

function TodoController ($scope) {
    $scope.hello="Hello from todo controller";
}