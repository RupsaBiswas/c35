class Game{
constructor(){

}

//read gameState from database
getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState=data.val();
    })
}
//write gameState into database
update(state){
    database.ref('/').update({

        gameState:state


    })
}

start(){
    if(gameState===0){
        player=new Player();
        player.getCount();

        form= new Form();
        form.display();
    }
}



}