let selected;
var sflag =0;
let possiblePositions;



function setup(){
    
    createCanvas(800,800);
    
    init(); //grid init
      
    possiblePositions = [];
    selected = new cellPos();    


}

function draw(){
    background(0);
    drawFrame();
//console.log(gCell)
//noLoop();
}


function mousePressed(){
    let position = checkMousePosition();
    //gCell[position.x][position.y].selected = 1;
    //console.log("possition setted"+ position)
 
    if(selected.x){//sflag == 1
        //console.log("enterd into movekaru chekking block")
    //     if(sflag == 1){
    //     sflag =0;
    // }
        let flag = 0;

        for(var i=0;i<possiblePositions.length;i++){
            if(position.x ==possiblePositions[i].x && position.y ==possiblePositions[i].y){
                moveKaru(position);
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            deselectAll();
        }
    }


   else if(gCell[position.x][position.y].karus.powno != 0 && selected.x == undefined ){//&& sflag == 0
        gCell[position.x][position.y].karus.possiblePos();
        selected = position;
        // if(sflag == 0){
        //     sflag =1;
        // }
    //    console.log("selected setted")
  //      console.log(selected);
    //    console.log("now possibleposition allocated")
        possiblePositions = gCell[selected.x][selected.y].karus.possiPos;
   //     console.log(possiblePositions)
    //    console.log("selected after")
    //    console.log(selected);
        drawFrame();
    //    console.log("over")
    }
 
    
   // position = undefined;
    
       // deselectAll();}
     
    // for(var i=0;i<gCell[position.x][position.y].karus.possiPos.length;i++){
        //gCell[gCell[position.x][position.y].karus.possiPos[i].x][gCell[position.x][position.y].karus.possiPos[i].y].possiMov= 1;
        
    //}
  //  console.log(gCell[position.x][position.y]);
}

function deselectAll(){
    selected.x=undefined;
    selected.y=undefined;
  //  possiblePositions.splice(0,possiblePositions.length);
  //possiblePositions.length = 0;
  while(possiblePositions.length>0){
    possiblePositions.pop();
  }
  
}


function moveKaru(position){
    let s= new cellPos(); 
    s.set(selected.x,selected.y);
    deselectAll();
    gCell[position.x][position.y].karus.copy(gCell[s.x][s.y].karus);
    gCell[s.x][s.y].karus.copy(nullKaru);
    
}


// function clearAllSelection(){
//     for(var i=0;i<rns;i++){
//         for(var j=0;j<rns;j++){
//             gCell=
//         }
//     }
// }


function checkMousePosition(){
    var Mx = mouseX, My =mouseY;
    let pos = new cellPos();
    for(var i=0; i<8; i++){
        if(i*gridSize<Mx && Mx < (i+1)*gridSize){
            for(var j=0;j<8;j++){
                if(j*gridSize<My && My < (j+1)*gridSize){
                    
                    pos.x = i;
                    pos.y = j;
                }
            }     
        }
    }
    //console.log(pos);
    return(pos);
}



function drawFrame(){
    for(var i=0; i<rns; i++){
        for(var j=0; j<rns; j++){
           gCell[i][j].show();
           gCell[i][j].karus.show();
        }
    }
     if(selected.length != 0){
            fill(color(0,0,255,100))
            rect(selected.x*gridSize,selected.y*gridSize,gridSize,gridSize)
        }

            fill(color(0,255,0,100))
            for(var i=0;i<possiblePositions.length;i++){
                rect(possiblePositions[i].x*gridSize,possiblePositions[i].y*gridSize,gridSize,gridSize)
            }

}












// const rns = 8;
// var gridSize;
// let boardgrid ;
// let king1;






// function setup(){
//     createCanvas(400,400);
//     gridSize = width/8;

//     king1 = new karu("k",10,2,4,gridSize);


//     boardgrid=[];
//     for(var i =0;i<rns;i++){
//          boardgrid[i]=[];
//     }
    
    

    

//     for(var i=0; i<rns; i++){
//         for(var j = 0; j<rns; j++){
//             boardgrid[i][j] = 0;
//         }
//     }
//     console.log(boardgrid);
// }

// function draw(){
    
//     background(100);

    

//     // for(var i = 0;i<=rns;i++){
//     //     for(var j = 0;j<=rns;j++){
//     //         line(i*gridSize,0,i*gridSize,j*gridSize*rns);
//     //         line(0,j*gridSize,i*gridSize*rns,j*gridSize);
//     //     }    
//     // }

//     for(var i=0; i<=rns; i++){
//         for(var j=0; j<=rns; j++){
//             if(i%2 && j%2==0 ||i%2==0 && j%2 ){
//                 fill(0);
//             }
//             else{
//                 fill(255);
//             }
            
//                 
//                // line(i*gridSize,0,i*gridSize,j*gridSize*rns);
//                // line(0,j*gridSize,i*gridSize*rns,j*gridSize);
//         }    
//     }
//     king1.show();
// }
