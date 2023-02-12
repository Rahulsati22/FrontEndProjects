let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");
let helper = "";
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click',function()
    {
        let value = this.getAttribute('data-value');
        if (value == '+')
        {
             
                obj1 = parseFloat(display.innerText);
                display.innerText = "";
                helper = "+";
        }
        else if (value == '-')
        {
            
                obj1 = parseFloat(display.innerText);
                display.innerText="";
                helper = "-";
            
        }
        else if (value == 'X')
        { 
                  obj1 = parseFloat(display.innerText);
                  display.innerText="";
                  helper = "X";
        }
        else if (value == '/')
        {
            obj1 = parseFloat(display.innerText);
            display.innerText = "";
            helper = "/";
        }
        else if (value == '%')
        {
            obj1 = parseFloat(display.innerText);
            display.innerText = "";
            helper = "%";
        }
        else if (value == '=')
        {
            if (obj1 == "")
            {
                display.innerText = "error";
            }
            else
            {
                obj2 = parseInt(display.innerText);
                if (helper == "+")
                {
                    display.innerText = obj1 + obj2;
                }
                else if (helper == "-")
                {
                    display.innerText = obj1 - obj2;
                }
                else if (helper == "X")
                {
                    display.innerText = obj1 * obj2;
                }
                else if (helper == "/")
                {
                    if (obj2 == 0)
                    {
                        display.innerHTML = "error";
                    }
                    else
                    {
                        display.innerText = obj1 / obj2;
                    }
                }
                else if (helper == "%")
                {
                    if (obj2 == 0)
                    {
                        display.innerHTML = "error";
                    }
                    else
                    {
                        display.innerText = obj1 % obj2;
                    }
                }
            }
            
            
        }
        else if (value == 'C')
        {
            display.innerText = "";
            obj1 = "";
            obj2 =  "";
            helper = "";
        }
        else
        {
            display.innerText += value;
        }
    })
     
}