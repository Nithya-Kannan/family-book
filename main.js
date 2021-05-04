var images = [
    "Nithu.jpg",
    "amma.jpg",
    "appa.jpg",
   "balu.jpg",
]

var names = ["Nithya","Suganya","Kannan","BalaKrishnan"]
    
  
  var i=0;
  function update() {
    
    
    var numbers_of_family_member_in_array = 4
    if(i>=numbers_of_family_member_in_array)
    {
        i=0
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_img").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

    if(i>0 && i<4) {
      document.getElementById("family_member_img").style.height="500";
    }
    i++;
}