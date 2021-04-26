var menu_list_array=["Chicken Tandoori Pizza","Monster Pizza","Meat Lovers","Mouth Water Veggie Delight","Cheeesyy","Mystorai"];

function get_menu(){
    console.log("working");
    var htmldata= "<ol class='menulist'>";
menu_list_array.sort();

for(var i=0; i<menu_list_array.length;i++){
    htmldata= htmldata+ "<div class='card'"+"img src='pizzaImg.png'>"+menu_list_array[i]+"</div>";
}
htmldata= htmldata+'</ol>';
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    menu_list_array.push(document.getElementById("add_item").value);
    var htmldata= "<section class='cards'>";
for(i=0; i<menu_list_array.length;i++){
    htmldata=htmldata+ "<div class='card'"+"img src='pizzaImg.png'>"+menu_list_array[i]+"</div>";
}
}