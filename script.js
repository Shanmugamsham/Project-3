

var res=fetch("https://data.covid19india.org/v4/min/data.min.json")
res.then((data1)=>data1.json()).then((data2)=>{
    console.log(data2)
    
    function call(){
        for(var i in data2){
            var x = document.getElementById("myText").value;
             console.log(data2[i].districts);
            console.log(x);
             if(x==i){
                 var head1=document.getElementById("card-1")
                
                 head1.innerHTML=`Case : ${data2[i].total["confirmed"]}`
                var head2=document.getElementById("card-2")
                head2.innerHTML=`Case : ${data2[i].total["tested"]}`
                 var head2=document.getElementById("card-3")
                 head2.innerHTML=`Case : ${data2[i].total["recovered"]}`
                 var head2=document.getElementById("card-4")
                 head2.innerHTML=`Case : ${data2[i].total["deceased"]}`  
                 
                 var para1=document.getElementById("card-1-para")
                 para1.innerHTML=`State : ${i}`
                 var para2=document.getElementById("card-2-para")
                 para2.innerHTML=`State :${i}`
                 var para3=document.getElementById("card-3-para")
                 para3.innerHTML=`State :${i}`
                 var para4=document.getElementById("card-4-para")
                 para4.innerHTML=`State :${i}`

                 var papu1=document.getElementById("card-line-1")
                 papu1.innerHTML=`population :${data2[i].meta["population"]}`
                 var papu2=document.getElementById("card-line-2")
                 papu2.innerHTML=`population :${data2[i].meta["population"]}`
                 var papu3=document.getElementById("card-line-3")
                 papu3.innerHTML=`population :${data2[i].meta["population"]}`
                 var papu4=document.getElementById("card-line-4")
                 papu4.innerHTML=`population :${data2[i].meta["population"]}`


             } 

           


             

                
                
    }

    
    
     
 }

 
var btn=document.getElementById("button-1")
btn.addEventListener("click",call)
 
 
                
     
});



var head7=document.getElementById("card-1-a")
head7.addEventListener("mouseup",()=> head7.style.backgroundColor="white")


var head8=document.getElementById("card-2-a")
head8.addEventListener("mouseup",()=> head8.style.backgroundColor="white")


var head9=document.getElementById("card-3-a")
head9.addEventListener("mouseup",()=> head9.style.backgroundColor="white")


var head10=document.getElementById("card-4-a")
head10.addEventListener("mouseup",()=> head10.style.backgroundColor="white")
                
    




             
