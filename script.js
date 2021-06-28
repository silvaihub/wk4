function myColor(count)
{
    if (count > 0)
      
       document.getElementById("num").style.color= "#00FF00";
else if (count < 0)
           
      document.getElementById("num").style.color= "#FF0000" ;
    else 
        
        document.getElementById("num").style.color="#000000";
    };
    
function increFunc(count)
{
var count =(document.getElementById("num").value);

  
    count++;
myColor(count);
document.getElementById("num").value = count;
  
};
function decreFunc(count)
{
   var count = (document.getElementById("num").value);
    
    count--;
    myColor(count);
  document.getElementById("num").value = count;
};
function resetFunc(count)
{
      document.getElementById("num").value;
myColor(count);
document.getElementById("num").value=0;
    };