function firstName(){
    const fname=document.getElementById('first-name')
    const value1=fname.value;
    const Regex1=/^[A-Z][a-zA-Z ]{4,14}$/

    if(Regex1.test(value1)){
        fname.style.border="2px solid green"
        document.getElementById('span1').style.display='none'

    }
    else{
        fname.style.border="2px solid red"
        document.getElementById('span1').style.display='block'
    }
}

    function userName(){
        const usname=document.getElementById('user-name')
        const value2=usname.value;
        const Regex2=/^[A-Za-z0-9 ]{5,12}$/
    
    if(Regex2.test(value2)){
        usname.style.border="2px solid green"
        document.getElementById('span2').style.display='none'

    }
    else{
        usname.style.border="2px solid red"
        document.getElementById('span2').style.display='block'
    }
 }

    function email(){
        const email=document.getElementById("email")
        const value3=email.value;
        const Regex3=/^.+@[^@]+\.(com|in|co\.io)$/

        if(Regex3.test(value3)){
            email.style.border="2px solid green"
            document.getElementById('span3').style.display='none'
        }
        else{
            email.style.border="2px solid red"
            document.getElementById('span3').style.display='block'    
        }
    }

    function password(){
        const password=document.getElementById('password')
        const value4=password.value;
        const Regex4=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,20}$/

        if(Regex4.test(value4)){
            password.style.border="2px solid green"
            document.getElementById('span4').style.display='none'
        }
        else{
            password.style.border="2px solid red"
            document.getElementById('span4').style.display='block'
        }
    }
     
    function telePhone(){
        const telephone=document.getElementById("telephone")
        const value5=telephone.value;
        const Regex5=/^[6-9]\d{9}$/

        if(Regex5.test(value5)){
            telephone.style.border="2px solid green"
            document.getElementById('span5').style.display='none'
        }
        else{
            telephone.style.border="2px solid red"
            document.getElementById('span5').style.display='block'
        }
    }

    function pan(){
        const pan=document.getElementById('pan')
        const value6=pan.value;
        const Regex6=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/

        if(Regex6.test(value6)){
            pan.style.border="2px solid green"
            document.getElementById('span6').style.display='none'
        }
        else{
            pan.style.border="2px solid red"
            document.getElementById('span6').style.display='block'
        }
    }