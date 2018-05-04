$(document).ready(function () {

    //Objective 1

    let button = $('<button>Click Me!</button>');
    button.prependTo('body');
    button.click(function(){
        alert("There's a snake in my boot!");
    });

    //Objecttive 2

    $('#button2').click(function () {
        let value = $('input').val();
        alert(value);
    });

    //Objective 3
    
    $('#square').mouseenter(function(){
        $('#square').css('background-color', 'forestgreen');
    });
    $('#square').mouseleave(function(){
        $('#square').css('background-color', 'black');
    });



});