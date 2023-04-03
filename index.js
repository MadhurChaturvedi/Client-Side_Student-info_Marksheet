const call = () =>{
    
    var i = Gender.selectedIndex;

    //😊😊😊 declaration
    var SN = sn.value
    var FN = fn.value
    var RN = rn.value
    var SS = ss.value
    var G = Gender.options[i].text

    // console.log( SN+FN+RN+SS + G)

    //Makrks Var

    var Physics = parseInt(pm.value)
    var Chemistry = parseInt(cm.value)
    var Mathematics = parseInt(mm.value)
    var English = parseInt(em.value)
    var t = Physics+Chemistry+Mathematics+English
    var Avg = (t/400)*100
    
    //Logic for Marks
   
    var Ppass = ''
     var Pred = ''
     if(Physics>=35)
     {
        Ppass="Pass"
        Pred = '#1abc9c'
     } 
     else
     {
        Ppass="Fail"
        Pred = 'red'
     }
     
    //Math
    var Mpass = ''
    var Mred = ''
    if(Mathematics>=35)
    {
      Mpass="Pass"
      Mred='#1abc9c'
      
    }
    else
    {
       Mpass="Fail"
       Mred = 'red'
    }

    //chemistry
    var Cpass = ''
    var Cred = ''
    if(Chemistry>=35)
    {
      Cpass="Pass"
      Cred='#1abc9c'
      
      
    }
    else
    {
      Cpass="Fail"
      Cred = 'red'
    }
    
    //English
    var Epass = ''
    var Ered = ''
    if(English>=35)
    {
      Epass="Pass"
      Ered='#1abc9c'
      
      
    }
    else
    {
      Epass="Fail"
      Ered='red'
    }


    //Grade logic
    var Grade = ""
    if(Avg>=35 && 45>=Avg)
    {
      Grade = "D 🤐"
    }
   
    else if(Avg>=46 && 59>=Avg )
    {
      Grade = "C😫"
    }
    else if(Avg>=60 && 70>=Avg )
    {
      Grade = "B🤞😌"
    }
    else if(Avg>=70 && 85>=Avg )
    {
      Grade = "A 👍😊"
    }
    else if(Avg>=86 && 100>=Avg )
    {
      Grade = "A++ ✌😁"
    }
    
    //logic part for Gender
     var sirname = ''

     if(G == "Femail")
     {
        sirname = "Ms"
     }
     else{

       sirname = "Mr"
     }
    
    //picture logic 
     var ipic = `${G}.png`

    var Tab = `<table border='1' cellpadding='1' padding='1' cellspacing='5' width="50%">`
    Tab += `<tr><th><img src='${ipic}' width='50' ></th></tr>`
    Tab += `<tr><td><b>Student Name</b></td><td><b>${sirname}.${SN}</b></td></tr>`
    Tab += `<tr><td><b>Father Name</b></td><td><b>.${FN}</b></td></tr>`
    Tab += `<tr><td><b>Roll numebr</b></td><td><b>${RN}</b></td></tr>`
    Tab += `<tr><td><b>School name</b></td><td><b>${SS}</b></td></tr>`
    Tab += `<tr><td><b>Gender</b></td><td><b>${G}</b></td></tr>`
    Tab += `<tr><td><b>Mathematics</b></td><td style="color:#FFF"  bgcolor='${Mred}'><b>${Mathematics}${Mpass}</b></td></tr>`
    Tab += `<tr><td><b>Chemistry</b></td><td style="color:#FFF" bgcolor='${Cred}'><b>${Chemistry}${Cpass}</b></td></tr>`
    Tab += `<tr><td><b>English</b></td><td style="color:#FFF" bgcolor='${Ered}'><b>${English}${Epass}</b></td></tr>`
    Tab += `<tr><td><b>Physics</b></td><td style="color:#FFF" bgcolor='${Pred}'><b>${Physics}${Ppass}</b></td></tr>`
    Tab += `<tr><td><b>Avg</b></td><td style="color:black"><b>${Avg}%</b></td></tr>`
    Tab += `<tr><td><b>Grade</b></td><td><b>${Grade}</b></td></tr>`
    Tab += `</table>`

    result.innerHTML = Tab
    
}

