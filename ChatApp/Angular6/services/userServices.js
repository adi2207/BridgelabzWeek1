app.service('services',function($http,$state,$scope){

    this.register=function(dataObj){
        console.log("dataObj",dataObj);
        
        $http({
            method:'POST',
            url:'http://localhost:3000/register',
            data: dataObj
        })
        .then(function(success){
            console.log("data after api call", success);
            
        },function(error){
            console.log("data after api call", error);
            
        })
    }
    this.login=function(dataObj){
        console.log("dataObj",dataObj);
        
        $http({
            method:'POST',
            url:'http://localhost:3000/login',
            data: dataObj
        })
        .then(function(success){
            $state.go('getUsersState');
            console.log("data after api call", success);
            
        },function(error){
            console.log("data after api call", error);
            
        })
    }
    this.forgot=function(dataObj){
        console.log("dataObj",dataObj);
        
        $http({
            method:'POST',
            url:'http://localhost:3000/forgot',
            data: dataObj
        })
        .then(function(success){
            console.log("data after api call", success);
            
        },function(error){
            console.log("data after api call", error);
            
        })
    }
    this.reset=function(dataObj,token){
        console.log("dataObj",dataObj);
        $http({
            method:'POST',
            url:'http://localhost:3000/reset',
            headers:{
                'token':token
            },
            data: dataObj
        })
        .then(function(success){
            console.log("data after api call", success);
            
        },function(error){
            console.log("data after api call", error);
            
        })
    }
    this.getUsers=function(){
        $http({
            method:'GET',
            url:'http://localhost:3000/getAllUsers',
        })
        .then(function(success){
            console.log("data after api call", success);
            $scope.bookList=success.data;
            //console.log(bookList);

        },function(error){
            console.log("data after api call", error);
            
        })
    }
})


