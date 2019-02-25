function colorfunc(){
    let red_border=document.getElementById("Redvalue").value;
    let blue_border=document.getElementById("Bluevalue").value;
    let green_border=document.getElementById("Greenvalue").value;
    let width_border=document.getElementById("Boarderwidth").value;
    let red_background=document.getElementById("Redvalue1").value;
    let blue_background=document.getElementById("Bluevalue1").value;
    let green_background=document.getElementById("Greenvalue1").value;
    let x=document.getElementById("myParagraph");
    let flag=false;
    let myarray=[red_border, blue_border, green_border, width_border, red_background, blue_background, green_background];
    for(let x of myarray)
    {
      if(isNaN(x) || x=="")
      {
        alert("Invalid input, try again");
        flag=true;
        break;
      }
      if(x>255)
      {
        alert("Colors value can not exceed 255, try again");
        flag=true;
        break;
      }
    }
    if(flag==false)
   {
     x.style.backgroundColor=`rgb(${red_background}, ${green_background}, ${blue_background})`;
     x.style.borderColor=`rgb(${red_border}, ${green_border}, ${blue_border})`;
     x.style.borderWidth=width_border;
   }
}
