let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

let d = new Date();
document.body.innerHTML = "<h1>La date est " + d + "</h1>"
$(document).ready(function (){
    recupMessages();
    function recupMessages(){
        $.ajax({
            url: "req.php",
            method: "POST",
            success: function (data) {
                $('.boiteMessage').html(data);
            }
        });
    }
});
/*
$("#B11_parent").hover(fucntion (){
    $("#B11_child").toggle()
});


$("#B11_parent").mouseover(function(){
    $('#B11_child').show();
});

$("#B11_parent").mouseout(function(){
    $('#B11_child').hide();
});
*/
const B11_parent = document.getElementById("B11_parent");

B11_parent.addEventListener(
    "mouseenter",
    (event) => {
        event.target.style.color = "purple";
        SetTimeout(() => {
            event.target.style.color = "";
        },500);
    },
    false
);
B11_parent.addEventListener("mouseover",
(event) => {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
},
false
);

function toggle_visibility(id) 
    {
        var e = document.getElementById(id);
        if ( e.style.display == 'block' )
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }