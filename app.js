let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let reset=document.getElementById("reset")


hrs.innerHTML="00"
min.innerHTML="00"
sec.innerHTML="00";

let second=0
let minutes=0
let hours=0

let flag=1;
if(flag==1)
{
    start.addEventListener('click',function()
    {     
         stop = setInterval(function time()
        {
            second++
            
            if(second<10)
            {
                sec.textContent="0"+second
            }
            else
            {    
                sec.textContent=second
            }
            if(second>58)
            {
                second=0
                minutes++
                min.textContent=minutes
            }
            if(minutes<10)
            {
                min.textContent="0"+minutes
            }
            else
            {    
                min.textContent=minutes
            }
            if(minutes>58)
            {
                minutes=0
                hours++
                hrs.textContent=hours
            }
            if(hours<10)
            {
                hrs.textContent="0"+hours
            }
            else
            {    
                hrs.textContent=hours
            }
        },1000)
    start.disabled="true"
    }) 
}


stop.addEventListener('click',function()
{
    clearInterval(stop)
    start.disabled=false
})


reset.addEventListener('click',function()
{
    start.disabled=false
    second=0
    minutes=0
    hours=0
    hrs.innerHTML="00"
    min.innerHTML="00"
    sec.innerHTML="00";
    
})