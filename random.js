function rand(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Qs(obj)
{
    return document.querySelector(obj);
} 
function Qss(obj)
{
    return document.querySelector(obj).style;
} 
let rando = rand (1,100);

let btn = Qs("#btn")
btn.addEventListener("click", function(e){
    e.preventDefault();
    let val = Qs("#val").value;
    //Qs("#val").value = ""
    if(!isNaN(val))
    {
        val = Number(Qs("#val").value);
        if(val != rando)
        {
            if(val>rando)
            {
                Qs("#info").innerHTML = "It is less";
            }
            else
            {
                Qs("#info").innerHTML = "It is more";
            }
        }
        else
        {
            //document.write("Congratulation ! you found the number");
            Qs("#info").innerHTML = "Congratulation ! you found the number"
        }
    }
    else
    {
        Qs("#info").innerHTML = "Enter a number please";
    }
});