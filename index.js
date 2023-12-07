var btn= document.getElementById("btn")
var opr=document.getElementById("opr")
const ans=document.getElementById("equal").addEventListener("click", calculate());

function calculate(){
if(opr==="+"){
        ans=btn+btn;
}elseif(opr==="-"){
        ans=btn-btn;
}elseif(opr==="/"){
        ans=btn/btn;
}elseif(opr==="*"){
        ans=btn*btn;
    }
    
}