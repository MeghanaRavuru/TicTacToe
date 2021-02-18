const boxes = Array.from($(".a"));
const spaces = ["","","","","","","","",""];
const otext = "0";
const xtext = "X";
let currentPlayer = otext; 
let l = [];
var win = "d";


$(".a").click(function(e){
    const id = e.target.id;
    if(spaces[id]===""){
        spaces[id] = currentPlayer;
        $(this).text(currentPlayer);
        $(this).css("color", "#192c5f");
        l[id] = currentPlayer;
        var a = [];
        a.push(winp());
        console.log(a);
        if(a[0]==='0' || a[0]==='X'){

            $("h3").text(`${a[0]} has won!!`);
            $("h3").css("color","yellow");
        }
        else if(l.length===9 && l[0]!==undefined && l[1]!==undefined && l[2]!==undefined && l[3]!==undefined && l[4]!==undefined && l[5]!==undefined && l[6]!==undefined && l[7]!==undefined && l[8]!==undefined){
            $("h3").text('Its a draw!!');
            $("h3").css("color","yellow");
        }
        currentPlayer = currentPlayer === otext ? xtext : otext; 

    }  
});

function winp(){
    if(l[0]==='0'){
        if((l[3]==='0' && l[6]=='0') || (l[4]==='0' && l[8]=='0') || (l[1]==='0' && l[2]=='0')){
            win = '0';
        }    
    }
    
    if(l[1]==='0'){
        if((l[0]==='0' && l[2]=='0') || (l[4]==='0' && l[7]=='0')){
            win = '0';
        }    
    }
    
    if(l[2]==='0'){
        if((l[0]==='0' && l[1]=='0') || (l[5]==='0' && l[8]=='0') || (l[4]==='0' && l[6]==='0')){
            win = '0';
        }    
    }
    
    if(l[3]==='0'){
        if((l[4]==='0' && l[5]=='0') || (l[0]==='0' && l[6]=='0')){
            win = '0';
        }    
    }
    
    if(l[4]==='0'){
        if((l[0]==='0' && l[8]=='0') || (l[1]==='0' && l[7]=='0') || (l[2]==='0' && l[6]=='0') || (l[3]==='0' && l[5]=='0')){
            win = '0';
        }    
    }
    
    if(l[5]==='0'){
        if((l[2]==='0' && l[8]=='0') || (l[3]==='0' && l[4]=='0')){
            win = '0';
        }    
    }
    
    if(l[6]==='0'){
        if((l[3]==='0' && l[0]=='0') || (l[4]==='0' && l[2]=='0') || (l[7]==='0' && l[8]=='0')){
            win = '0';
        }    
    }
    
    if(l[7]==='0'){
        if((l[1]==='0' && l[4]=='0') || (l[6]==='0' && l[8]=='0')){
            win = '0';
        }    
    }
    
    if(l[8]==='0'){
        if((l[2]==='0' && l[5]=='0') || (l[4]==='0' && l[0]=='0') || (l[7]==='0' && l[6]=='0')){
            win = '0';
        }    
    }

    if(l[0]==='X'){
        if((l[3]==='X' && l[6]=='X') || (l[4]==='X' && l[8]=='X') || (l[1]==='X' && l[2]=='X')){
            win = 'X';
        }    
    }
    
    if(l[1]==='X'){
        if((l[0]==='X' && l[2]=='X') || (l[4]==='X' && l[7]=='X')){
            win = 'X';
        }    
    }
    
    if(l[2]==='X'){
        if((l[0]==='X' && l[1]=='X') || (l[5]==='X' && l[8]=='X') || (l[4]==='X' && l[6]==='X')){
            win = 'X';
        }    
    }
    
    if(l[3]==='X'){
        if((l[4]==='X' && l[5]=='X') || (l[0]==='X' && l[6]=='X')){
            win = 'X';
        }    
    }
    
    if(l[4]==='X'){
        if((l[0]==='X' && l[8]=='X') || (l[1]==='X' && l[7]=='X') || (l[2]==='X' && l[6]=='X') || (l[3]==='X' && l[5]=='X')){
            win = 'X';
        }    
    }
    
    if(l[5]==='X'){
        if((l[2]==='X' && l[8]=='X') || (l[3]==='X' && l[4]=='X')){
            win = 'X';
        }    
    }
    
    if(l[6]==='X'){
        if((l[3]==='X' && l[0]=='X') || (l[4]==='X' && l[2]=='X') || (l[7]==='X' && l[8]=='X')){
            win = 'X';
        }    
    }
    
    if(l[7]==='X'){
        if((l[1]==='X' && l[4]=='X') || (l[6]==='X' && l[8]=='X')){
            win = 'X';
        }    
    }
    
    if(l[8]==='X'){
        if((l[2]==='X' && l[5]=='X') || (l[4]==='X' && l[0]=='X') || (l[7]==='X' && l[6]=='X')){
            win = 'X';
        }    
    }

    return win;
    
}



