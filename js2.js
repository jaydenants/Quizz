
var PLAYERANSWER = "";

var QN = 0;
var scor = 0;



function RIGHTANSWER(ITEM){
    console.log(ITEM)
   if(QN == 0){
        var RA = quest[QN][1];
        console.log(RA == PLAYERANSWER);
        if(RA == PLAYERANSWER ){
            document.getElementById('but1').style.backgroundColor = "green";
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
   }
    else if(QN == 1){
        var RA = quest[QN][2];
        console.log(RA)
        if(RA==PLAYERANSWER){
            document.getElementById('but2').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
        
    }
    else if(QN == 2){
        var RA = quest[QN][2];
        console.log(RA,3)
        if(RA==PLAYERANSWER){
            document.getElementById('but2').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
        
    }
    else  if(QN == 3){
        var RA = quest[QN][2];
        if(RA==PLAYERANSWER){
            document.getElementById('but2').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
    }
    else  if(QN == 4){
        var RA = quest[QN][4];
        if(RA==PLAYERANSWER){
            document.getElementById('but4').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
    }
    else  if(QN == 5){
        var RA = quest[QN][2];
        if(RA==PLAYERANSWER){
            document.getElementById('but2').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
    }
    else  if(QN == 6){
        var RA = quest[QN][2];
        if(RA==PLAYERANSWER){
            document.getElementById('but2').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
    }
    else  if(QN == 7){
        var RA = quest[QN][2];
        if(RA==PLAYERANSWER){
            document.getElementById('but2').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
    }
    else  if(QN == 8){
        var RA = quest[QN][3];
        if(RA==PLAYERANSWER){
            document.getElementById('but3').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
    }
    else  if(QN == 9){
        var RA = quest[QN][3];
        if(RA==PLAYERANSWER){
            document.getElementById('but3').style.backgroundColor = 'green'
            scor++
        }else{
            ITEM.style.backgroundColor = "red";
        }
    }
}

function NEXTQUESTION(){
    console.log(QN)
    if(QN != 9){
        QN++;
        SETQUESTION();
    }
}

function PREVIOUSQUESTION(){
    console.log(QN)
    if(QN != 0){
        QN--;
        SETQUESTION()
    }
}


function QUESTIONPICK(T){
    PLAYERANSWER = T.innerHTML;
    RIGHTANSWER(T);  
}

function AGAINBUTTON(){
    location.reload();
}





SETQUESTION();

function SETQUESTION(){
    document.getElementById('score').innerHTML = scor;
    for(var j =1;j<8;j++){
        document.getElementById("but"+j).style.backgroundColor = ""
    }
    for(var j = 1;j<8;j++){
        document.getElementById("but"+j).innerHTML = ""  
    }
    document.getElementById("your").innerHTML = quest[QN][0]
    for(let i = 1;i<quest[QN].length;i++){
        document.getElementById("but"+i).innerHTML = [quest[QN][i]]
    }
    for(var j = 1;j<8;j++){
        if(document.getElementById("but"+j).innerHTML == ""){
            document.getElementById("but"+j).style.display = "none"
        }
    }
}
