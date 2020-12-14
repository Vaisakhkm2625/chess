//main variables
var rns = 8;
var gridSize =50;
let gCell;
let nullKaru;


class cellPos{
    constructor(){
        this.x;
        this.y;
    }
    set(x,y){
        this.x =x;
        this.y =y;
    }
}
    


class karu {
    constructor(symbel,powerno,team,pos_x,pos_y){
        this.syb = symbel;
        this.possiPos = [];
        this.team = team;
        this.powno = powerno;
        this.pos = new cellPos();
        this.pos.x = pos_x;
        this.pos.y =pos_y;
    }
    set(symbel,powerno,team){
        this.syb = symbel;
        this.powno = powerno;
        this.team = team;

    }
    copy(v){
        this.syb = v.syb;
        this.powno = v.powno;
        this.team = v.team;
    }
    show(){
      //  textColor(50,255,255)
      //  text(this.syb,this.x*this.GS,this.y*this.GS);
      fill(color(0,255,0));
      textAlign(CENTER,CENTER);
      //rect(this.pos.x*gridSize,this.pos.y*gridSize,10,10);
      text(this.syb,this.pos.x*gridSize+gridSize/2,this.pos.y*gridSize+gridSize/2);
    }

    possiblePos(){
        while(this.possiPos.length>0)
        {this.possiPos.pop();}
        if(this.powno == 1){
            if(this.pos.y == 1 && this.team == 0){
                console.log(this.pos.x +"+"+this.pos.y)
                this.possiPos.push(new cellPos());
                this.possiPos[0].set(this.pos.x,this.pos.y+1);
                this.possiPos.push(new cellPos());
                this.possiPos[1].set(this.pos.x,this.pos.y+2);
            }
            else if( this.pos.y == 6 && this.team == 1){
                this.possiPos.push(new cellPos());
                this.possiPos[0].set(this.pos.x,this.pos.y-1);
                this.possiPos.push(new cellPos());
                this.possiPos[1].set(this.pos.x,this.pos.y-2);
            }
            else if(this.team == 0){
                this.possiPos.push(new cellPos());
                this.possiPos[0].set(this.pos.x,this.pos.y+1);
            }
            else if(this.team == 1){
                this.possiPos.push(new cellPos());
                this.possiPos[0].set(this.pos.x,this.pos.y-1);
            }

        }
    }

}   


class girdCell{
    constructor(){
    this.colour;
   // this.selected = 0;
   // this.possiMov = 0;
    this.karus = new karu();
   }
    show(){
        fill(this.colour);
        rect(this.karus.pos.x*gridSize,this.karus.pos.y*gridSize,gridSize,gridSize);  
        // if(this.selected == 1){
        //     fill(color(0,0,255,100))
        //     rect(this.karus.pos.x*gridSize,this.karus.pos.y*gridSize,gridSize,gridSize)
        // }
        // if(this.possiMov == 1){
        //     fill(color(0,255,0,100))
        //     rect(this.karus.pos.x*gridSize,this.karus.pos.y*gridSize,gridSize,gridSize)
        // }
//        console.log("b" + this.karus.pos.x +"+"+ this.karus.pos.y)
    }
}





function init(){
 
    nullKaru = new karu("n",0,10,10);
    

    gCell=[];
    for(var i =0;i<rns;i++){
        gCell[i]=[];
        for(var j = 0; j<rns; j++){
            gCell[i][j] = new girdCell();
                if(i%2 && j%2==0 ||i%2==0 && j%2 ){
                    gCell[i][j].colour = 0; //black
                }
                else{
                    gCell[i][j].colour = 255; //white
                }
             //   gCell[i][j].selected = 0;    
            gCell[i][j].karus.copy(nullKaru);
            gCell[i][j].karus.pos.x = i;
            gCell[i][j].karus.team = 2;
            gCell[i][j].karus.pos.y = j;
        }
    }

    _initPos();

    //powerno of 
    //king =10
    //queen = 9
    //rooks = 5
    //knights = 4
    //bishops =3
    //pawn = 1
    //https://en.wikipedia.org/wiki/Chess


}

function _initPos(){


       //powerno of 
    //king =10
    //queen = 9
    //rooks = 5
    //knights = 4
    //bishops =3
    //pawn = 1
    //https://en.wikipedia.org/wiki/Chess

    gCell[0][0].karus.set("bR1",5,0);
    gCell[1][0].karus.set("bK1",4,0);
    gCell[2][0].karus.set("bB1",3,0);
    gCell[3][0].karus.set("bQ",9,0);
    gCell[4][0].karus.set("b^K",10,0);
    gCell[5][0].karus.set("bB2",3,0);
    gCell[6][0].karus.set("bK2",4,0);
    gCell[7][0].karus.set("bR2",5,0);

    gCell[0][1].karus.set("bP1",1,0);
    gCell[1][1].karus.set("bP2",1,0);
    gCell[2][1].karus.set("bP3",1,0);
    gCell[3][1].karus.set("bP4",1,0);
    gCell[4][1].karus.set("bP5",1,0);
    gCell[5][1].karus.set("bP6",1,0);
    gCell[6][1].karus.set("bP7",1,0);
    gCell[7][1].karus.set("bP8",1,0);
    
    gCell[0][7].karus.set("wR1",5,1);
    gCell[1][7].karus.set("wK1",4,1);
    gCell[2][7].karus.set("wB1",3,1);
    gCell[3][7].karus.set("wQ",9,1);
    gCell[4][7].karus.set("w^K",10,1);
    gCell[5][7].karus.set("wB2",3,1);
    gCell[6][7].karus.set("wK2",4,1);
    gCell[7][7].karus.set("wR2",5,1);

    gCell[0][6].karus.set("wP1",1,1);
    gCell[1][6].karus.set("wP2",1,1);
    gCell[2][6].karus.set("wP3",1,1);
    gCell[3][6].karus.set("wP4",1,1);
    gCell[4][6].karus.set("wP5",1,1);
    gCell[5][6].karus.set("wP6",1,1);
    gCell[6][6].karus.set("wP7",1,1);
    gCell[7][6].karus.set("wP8",1,1);


}