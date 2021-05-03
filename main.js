var images = [
    "blob:https://web.whatsapp.com/9b91e21b-ffd3-426e-a560-26646359a53b",
    "blob:https://web.whatsapp.com/1952025d-b9c7-4a41-b292-e120e163aa2c",
    "blob:https://web.whatsapp.com/839da157-05e0-4404-b0a9-144fd77de107",
   "blob:https://web.whatsapp.com/49e34873-8239-4084-86f5-ee442fc01fd6",
]

var names = ["Nithya","Suganya","Kannan","BalaKrishnan"]
    
  
  var i=0;
  function update() {
    
    i++;
    var numbers_of_family_member_in_array = 4
    if(i>numbers_of_family_member_in_array)
    {
        i=0
    }
    var updatedImage = image[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}