$(document).ready(function () {

    //jQuery Objective 1

    let button = $('<button>Click Me!</button>');
    button.prependTo('body');
    button.click(function(){
        alert("There's a snake in my boot!");
    });

    //jQuery Objecttive 2

    $('#button2').click(function () {
        let value = $('input').val();
        alert(value);
    });

    //jQuery Objective 3
    
    $('#square').mouseenter(function(){
        $('#square').css('background-color', 'forestgreen');
    });
    $('#square').mouseleave(function(){
        $('#square').css('background-color', 'black');
    });

    //jQuery Objective 4

    $('#text').click(function(){
        let rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        let color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];
        $('#text').css('color', color);
    });

    //jQuery Objective 5

    $('#button3').click(function(){
        let name = $('<span>Jean-Luc</span>');
        name.appendTo('#name');
    });

    //jQuery Objective 6 

    let friend = ['Josh', 'Mary', 'Chance', 'Melvin', 'Marty', 'Myrtis', 'Jessica', 'Chris', 'Mike', 'Brianne'];
    $('#button4').click(function(){
        for (let i = 0; i < friend.length; i++) {
            let li = $('<li>' + (friend[i]) + '</li>');
            li.appendTo('#friends');
        }
    });
});