class Player{
    constructor(){

 }

 //read the playerCount from the database
getCount(){
var playerCountRef= database.ref('playerCount');
playerCountRef.on("value",function(data){
    playerCount= data.val();
})
}
//write the playerCount in the database
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })

}

//write the name in the database
update(name){
    var playerIndex="player"+ playerCount
    database.ref(playerIndex).set({
        name:name
        
    })
}




}