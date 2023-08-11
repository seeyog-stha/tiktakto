let temp=document.getElementsByClassName("items")
let choice=true;
for(let key in temp){
    temp[key].value=null;
    temp[key].addEventListener("click",function myfun(){
        if(choice){
            temp[key].innerText="X"
            temp[key].value=1
            choice=false
            temp[key].removeEventListener("click",myfun)
            checkwinner()
            document.getElementById("playerchng").innerText="PLAYER 2 (O)"   
        }
        else{
            temp[key].innerText="O"
            temp[key].value=0
        
            choice=true
            temp[key].removeEventListener("click",myfun)
           checkwinner()
            document.getElementById("playerchng").innerText="PLAYER 1 (X)"           
        }
    })
}
function checkwinner(){
    // horizontal
    if(temp[0].value==1&&temp[1].value==1&&temp[2].value==1){
      
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(0,1,2)
       return 2
    }
    else if(temp[3].value==1&&temp[4].value==1&&temp[5].value==1){
        
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(3,4,5)
       return 2
    }
    else if(temp[6].value==1&&temp[7].value==1&&temp[8].value==1){
        
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(6,7,8)
       return 2
    }
    else if(temp[0].value==0&&temp[1].value==0&&temp[2].value==0){
      
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(0,1,2)
       return 2
    }
    else if(temp[3].value==0&&temp[4].value==0&&temp[5].value==0){
        
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(3,4,5)
       return 2
    }
    else if(temp[6].value==0&&temp[7].value==0&&temp[8].value==0){
        
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(6,7,8)
       return 2
    }
  
    // vertical
     else if(temp[0].value==1&&temp[3].value==1&&temp[6].value==1){
      
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(0,3,6)
       return 2
    }
    else if(temp[1].value==1&&temp[4].value==1&&temp[7].value==1){
        
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(1,4,7)
       return 2
    }
    else if(temp[2].value==1&&temp[5].value==1&&temp[8].value==1){
        
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(2,5,8)
       return 2
    }
    else if(temp[0].value==0&&temp[3].value==0&&temp[6].value==0 ){
      
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(0,3,6)
       return 2
    }
    else if(temp[1].value==0&&temp[4].value==0&&temp[7].value==0){
        
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(1,4,7)
       return 2
    }
    else if(temp[2].value==0&&temp[5].value==0&&temp[8].value==0){
        
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(2,5,8)
       return 2
    }
   
    // // diagonal 
    else if(temp[0].value==1&&temp[4].value==1&&temp[8].value==1){
      
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(0,4,8)
       return 2
    }
    else if(temp[2].value==1&&temp[4].value==1&&temp[6].value==1){
        
        document.getElementById("display").innerText="Player 1 is the winner"
        colorme(2,4,6)
       return 2
    }
    else if(temp[0].value==0&&temp[4].value==0&&temp[8].value==0){
        
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(0,4,8)
       return 2
    }
    else if(temp[2].value==0&&temp[4].value==0&&temp[6].value==0){
        
        document.getElementById("display").innerText="Player 2 is the winner"
        colorme(2,4,6)
       return 2
    }
  
    // draw case
    else if(draw()==true){
        document.getElementById("display").innerText="Draw"
    }
    else {
        return 0;
    }
}
function draw(){
  for(let x of temp){
  
    if(x.value===null){
       
        return false
    }
  }
   return true

}
function colorme(x,y,z){
    temp[x].style.background="red"
    temp[y].style.background="red"
    temp[z].style.background="red"
    temp=null
}
