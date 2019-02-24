function colorfunc(){
    let red_border=Number(document.getElementById("Redvalue").value);
    let blue_border=Number(document.getElementById("Bluevalue").value);
    let green_border=Number(document.getElementById("Greenvalue").value);
    let width_border=Number(document.getElementById("Boarderwidth").value);
    let red_background=Number(document.getElementById("Redvalue1").value);
    let blue_background=Number(document.getElementById("Bluevalue1").value);
    let green_background=Number(document.getElementById("Greenvalue1").value);
    let x=document.getElementById("myParagraph");
    let myarray=[red_border, blue_border, green_border, width_border, red_background, blue_background, green_background];
    for(let x of myarray)
    {
      if(isNaN(x))
      {
        alert("Invalid input, try again");
      }
      if(x>255)
      {
        alert("Colors value can not exceed 255, try again")
      }
    }
     x.style.backgroundColor=`rgb(${red_background}, ${green_background}, ${blue_background})`;
     x.style.borderColor=`rgb(${red_border}, ${green_border}, ${blue_border})`;
     x.style.borderWidth=width_border;

}
