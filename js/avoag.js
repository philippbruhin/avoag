$(document).ready(function(){

	$('#hamburger').click(function(){
	    $("nav").toggleClass('display_menu');
	});

	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});

	/* blur */
	$('input, textarea').change(function(){
		if($(this).val()){ 
			$(this).addClass('used');
		}
		else {
			$(this).removeClass('used');
		}
	})



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

	
var acc = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel1 = this.nextElementSibling;
        if (panel1.style.display === "block") {
            panel1.style.display = "none";
        } else {
            panel1.style.display = "block";
        }
    }
}


var acc = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel2 = this.nextElementSibling;
        if (panel2.style.display === "block") {
            panel2.style.display = "none";
        } else {
            panel2.style.display = "block";
        }
    }
}

$("#xmas2").delay( 2000 ).fadeOut( 1000 );
$("#xmas1").delay( 5000 ).fadeOut( 500 );



});


