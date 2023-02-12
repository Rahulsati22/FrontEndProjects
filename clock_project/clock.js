
var date;
var hrs;
var mns;
var ss;

function time()
{
    date = new Date();
    hrs = date.getHours();
    mns = date.getMinutes();
    ss = date.getSeconds();
//    if (hrs > 12)
let str = "(PM)";
  console.log(hrs);
if (hrs >= 12)
{
    document.getElementById("Am_or_Pm").innerText = str;
}
else
{
    document.getElementById("Am_or_Pm").innerText = "(AM)";
}
  document.getElementById("inner_hour").innerHTML = hrs;
  document.getElementById("inner_minutes").innerHTML = mns;
  document.getElementById("inner_seconds").innerHTML = ss;
}

setInterval(time, 1000);
  