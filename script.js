//var shortcuts vv
var CURRENT_HEALTH_NUMBER =document.getElementById("current-health");
var TOTAL_HEALTH_NUMBER =document.getElementById("full-health"); 
var HEALTH_BAR_LENGTH = document.getElementById("bar");
var GET_ENEMY = document.getElementById("enemy");
var BAR_STAT = document.getElementById("hello");
var STATUS = document.getElementById("status");
var GAME_OVER = document.getElementById("game-end");
//var shortcuts ^^
function attack(){
CURRENT_HEALTH_NUMBER.innerHTML--;
if(CURRENT_HEALTH_NUMBER.innerHTML<="0"){
    STATUS.innerHTML=" Dead";
    CURRENT_HEALTH_NUMBER.style.display="none";
    HEALTH_BAR_LENGTH.style.width="0px";
    TOTAL_HEALTH_NUMBER.style.display="none";
    GET_ENEMY.style.display="none";
}else if(CURRENT_HEALTH_NUMBER.innerHTML==="9"){
HEALTH_BAR_LENGTH.style.width="180px";
}else if(CURRENT_HEALTH_NUMBER.innerHTML==="8"){
    HEALTH_BAR_LENGTH.style.width="160px";
    }else if(CURRENT_HEALTH_NUMBER.innerHTML==="7"){
        HEALTH_BAR_LENGTH.style.width="140px";
        }else if(CURRENT_HEALTH_NUMBER.innerHTML==="6"){
            HEALTH_BAR_LENGTH.style.width="120px";
        }else if(CURRENT_HEALTH_NUMBER.innerHTML==="5"){
            HEALTH_BAR_LENGTH.style.width="100px";
            }else if(CURRENT_HEALTH_NUMBER.innerHTML==="4"){
                HEALTH_BAR_LENGTH.style.width="80px";
                }else if(CURRENT_HEALTH_NUMBER.innerHTML==="3"){
                    HEALTH_BAR_LENGTH.style.width="60px";
                    HEALTH_BAR_LENGTH.style.backgroundColor="red";
                    }else if(CURRENT_HEALTH_NUMBER.innerHTML==="2"){
                        HEALTH_BAR_LENGTH.style.width="40px";
                        HEALTH_BAR_LENGTH.style.backgroundColor="red";
                    }else if(CURRENT_HEALTH_NUMBER.innerHTML==="1"){
                        HEALTH_BAR_LENGTH.style.width="20px";
                        HEALTH_BAR_LENGTH.style.backgroundColor="red"
                        }
}
document.getElementById("console").innerHTML='';
