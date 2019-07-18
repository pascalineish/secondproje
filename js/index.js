var dd= parseInt(prompt("enter the day"));
var mm= parseInt(prompt("enter the month"));
var yyyy= parseInt(prompt("enter year"));
var gender= prompt("enter gender");
var cc= (yyyy-1)/100 + 1;
var ccc=parseFloat(cc);
var day= parseFloat(( ((ccc/4) -2*ccc+1)+((5*yyyy/4))+((26*(mm+1)/10))+ dd)) % 7;
var day =(day.toFixed(0));
if (day==0 && gender =='male') {
alert("Kwasi");
}
else if (day== 1 && gender =='male') {
alert("Kwadwo");
}
else if (day== 2 && gender =='male'){
alert("Kwabena");
}
else if (day==3 && gender =='male'){
alert("Kwaku");
}
else if (day== 4 && gender =='male'){
alert("Yaw");
}
else if (day==5 && gender =='male'){
alert("Kofi");
}
else if (day==6 && gender =='male'){
alert("Kwame");
}
else if (day==0 && gender =='female'){
alert("Akosua");
}
else if (day==1 && gender =='female'){
alert("Adwoa");
}
else if (day==2 && gender =='female'){
alert("Abenaa");
}
else if (day==3 && gender =='female'){
alert("Akua");
}
else if (day==4 && gender =='female'){
alert("Yaa");
}
else if (day==5 && gender =='female'){
alert("Afua");
}
else if (day==6 && gender =='female'){
alert("Ama");
}