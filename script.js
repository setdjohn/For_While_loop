{var wrapperEle = document.body.querySelector(".wrapper");
}

{var pHP = 5;
var dHP = 10;
var dHPEle = document.body.querySelector(".dHP");
var pHPEle = document.body.querySelector(".pHP");
}

{document.body.querySelector(".dHP").innerHTML=dHP;
document.body.querySelector(".pHP").innerHTML=pHP;
}

{var prompter1 = prompt("Type a number between 1 and 5")
var pDMG = Math.floor(Math.random() * prompter1 + 1);
var dDMG = Math.floor(Math.random() * 2 + 1);
var dTaken = dHP-pDMG;
var pTaken = pHP-dDMG;
}

for(var i=0; i<4; i++){
repeat=Number(prompt("Type a number between 1 and 5"))
document.body.querySelector(".dHP").innerHTML=dTaken;
document.body.querySelectior(".dHP").innerHTML=pTaken;
}

wrapperEle.innerHTML="Program ended";