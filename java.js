let elm = document.getElementsByClassName("ico")
let para = document.getElementsByClassName("ans")
let flag;


function removedisplay()
{
for(let i=0; i<elm.length;i++)
{
    
    elm[i].classList.remove("ic")
    elm[i].classList.remove("cchange")
    para[i].classList.remove("display")
}
}
elm[0].addEventListener("click",function()
{
    if(flag!=1)
    {
        removedisplay()
    }
    flag=1;
    elm[0].classList.toggle("cchange")
    elm[0].classList.toggle("ic")
    para[0].classList.toggle("display")
})
elm[1].addEventListener("click",function()
{
    if(flag!=2)
    {
        removedisplay()
    }
    flag=2;
    elm[1].classList.toggle("cchange")
    elm[1].classList.toggle("ic")
    para[1].classList.toggle("display")

})
elm[2].addEventListener("click",function()
{
    if(flag!=3)
    {
        removedisplay()
    }
    flag=3;
    elm[2].classList.toggle("cchange")
    elm[2].classList.toggle("ic")
    para[2].classList.toggle("display")
})
