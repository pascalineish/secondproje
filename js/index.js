function myForm() {
    var dob=document.getElementById("dateofbirth").value;
    var day =new Date(dob);
    dd=day.getDate();
    // dd= dd+1;
    yyyy=day.getFullYear();
    mm = day.getMonth();
    mm = mm+1;
    // console.log(mm);
    // console.log(yyyy);
    // console.log(day);
  
    var gender=document.getElementById("gender").value;
    console.log(gender);
    var pp= (yyyy-1)/100 + 1;
    var ccc=parseFloat(pp);
    var day= parseFloat ( ( (ccc/4) -2*ccc-1) + ((5*yyyy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
    var day =(day.toFixed(0));
    // console.log(day);
    if (day==0 && gender =='male') {
       document.getElementById('output').innerHTML='Kwasi'
            }
        else if (day== 1 && gender =='male') {
        document.getElementById('output').innerHTML='kwadwo'
         }
          else if (day== 2 && gender =='male'){
            document.getElementById('output').innerHTML='kwabena'
         }
         else if (day==3 && gender =='male'){
            document.getElementById('output').innerHTML='kwaku'
         }
         else if (day== 4 && gender =='male'){
            document.getElementById('output').innerHTML='yaw'
         }
         else if (day==5 && gender =='male'){
            document.getElementById('output').innerHTML='kofi'
        }
         else if (day==6 && gender =='male'){
            document.getElementById('output').innerHTML='kwame'
        }
        else if (day==0 && gender =='female'){
            document.getElementById('output').innerHTML='Akosua'
        }
        else if (day==1 && gender =='female'){
            document.getElementById('output').innerHTML='Adwoa'
         }
         else if (day==2 && gender =='female'){
            document.getElementById('output').innerHTML='Abenaa'
         }
        else if (day==3 && gender =='female'){
            document.getElementById('output').innerHTML='Akwa'
         }
        else if (day==4 && gender =='female'){
            document.getElementById('output').innerHTML='Yaa'
         }
         else if (day==5 && gender =='female'){
            document.getElementById('output').innerHTML='Afua'
         }
        else if (day==6 && gender =='female'){
            document.getElementById('output').innerHTML='Ama'
         }
        }
