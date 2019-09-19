app.service('services',function($http){

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
    this.reset=function(dataObj){
        console.log("dataObj",dataObj);
        
        $http({
            method:'POST',
            url:'http://localhost:3000/reset',
            data: dataObj
        })
        .then(function(success){
            console.log("data after api call", success);
            
        },function(error){
            console.log("data after api call", error);
            
        })
    }
})


