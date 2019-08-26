var rl=require('readline-sync');

function checkIfOccupied(row,col,occupiedArray){
    if(occupiedArray[row][col]=='O'||occupiedArray[row][col]=='X')
        return 1;
}
function getRandomInt(){
    return Math.floor(Math.random() * Math.floor(3));
}

function createNewGameArray(){
    var newGameArr = new Array(3);
    for (var i = 0; i < 3; i++) {
        newGameArr[i] = new Array(3);
        for(var j=0;j<3;j++)
        {
            newGameArr[i][j] = '-';
        }
    }
    return newGameArr;
}

function getUserInput(occupiedArray){
    var row=rl.question("what row do you want to fill in?");
    var col=rl.question("what col do you wnat to fill in ?");
    if(checkIfOccupied(row,col)){
        console.log("this place is occupied, try another spot!");
        getUserInput(occupiedArray);
    }
    else{
        occupiedArray[row][col]='X';
    }
    return occupiedArray;
}

function getCompInput(occupiedArray){
    var row=getRandomInt();
    var col=getRandomInt();
    if(checkIfOccupied(row,col)){
        getCompInput(occupiedArray);
    }
    else{
        occupiedArray[row][col]='O';
    }
    return occupiedArray;
}
function isDraw(){
    
}

function checkWin(array){
    if(
        (array[0][0]==array[0][1]==array[0][2])
        ||(array[1][0]==array[1][1]==array[1][2])
        ||(array[2][0]==array[2][1]==array[2][2])
        ||(array[0][0]==array[1][0]==array[2][0])
        ||(array[0][1]==array[1][1]==array[2][1])
        ||(array[0][2]==array[1][2]==array[2][2])
        ||(array[0][0]==array[1][1]==array[2][2])
        ||(array[2][0]==array[1][1]==array[0][2])
        )
        return 1;
    else
        return 0;
}

function solve(){
    
    var newGameArr=createNewGameArray();
    //console.log(newGameArr);
    while(1){
        newGameArr=getCompInput(newGameArr);
        if(checkWin(newGameArr)){
            console.log("COMP WON!!");
            break;
        }
        newGameArr=getUserInput(newGameArr);
        if(checkWin(newGameArr)){
            console.log("USER WON!!");
            break;
        }
        if(isDraw(newGameArr)){
            console.log("Game draw!!");
            break;
        }
    }
} 

solve();