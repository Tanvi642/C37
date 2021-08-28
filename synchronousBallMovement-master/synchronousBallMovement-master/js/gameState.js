class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display();
        } 
    }
    play(){
        form.hide();
        Player.getallplayersinfo();
        if(allplayers!==undefined){
            var position=130;
            for(var plr in allplayers){
                position+=20;
                if(plr==="player"+player.index){
                    fill("red");
 }
                else{
                    fill("black");

                }
                text(allplayers[plr].name+":"+allplayers[plr].distance,120,position);
            }
        }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
        player.distance+=50;
        player.update();

    }
    
        
        
    }
}
