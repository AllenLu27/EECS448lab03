let slideshow=["56acdb6c7b7fbc125ef144f1fa41bd0f.jpg", "shippuuden, naruto,  uchiha, itachi, birds.jpg", "konan akatsuki konan.jpg", "4877276-3179600-hidan.jpg", "kisspng-kakuzu-hidan-naruto-shippuden-ultimate-ninja-stor-png-avatan-plus-5ba377e64d4920.8498840815374397183166.jpg"];
let track=0;
function previousClick(){
  let theImgTag=document.getElementById("myImgId");
  track=track-1;
   if(track<0)
   {
     track=slideshow.length-1;
     theImgTag.src=slideshow[track];
   }
   else {
     {
       theImgTag.src=slideshow[track];
     }
   }

}

function nextClick(){
  let theImgTag=document.getElementById("myImgId");
  track=track+1;
  if(track>=slideshow.length)
  {
     track=0;
     theImgTag.src=slideshow[track];
  }
  else {
    {
      theImgTag.src=slideshow[track];
    }
  }

}
