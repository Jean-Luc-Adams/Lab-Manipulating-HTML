document.addEventListener('DOMContentLoaded', function () {

    //DOM Objective 1

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me!');
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.addEventListener('click', function () {
        alert('There is a snake in my boot!');
    })

    //DOM Objective 2

    let button2 = document.getElementById('button2');
    button2.addEventListener('click', click);
    function click() {
        let message = document.getElementById('message').value;
        alert(message);
    }

    //DOM Objective 3

    let square = document.getElementById('square');
    square.addEventListener('mouseenter', function () {
        square.style.backgroundColor = 'aqua';
    })
    square.addEventListener('mouseleave', function () {
        square.style.backgroundColor = 'black';
    })

    //DOM Objective 4

    let p = document.getElementById('text');
    p.addEventListener('click', function () {
        let rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        let color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];
        p.style.color = color;
    })

    //DOM Objective 5

    let button3 = document.getElementById('button3');
    let div = document.getElementById('name');
    button3.addEventListener('click', function () {
        let span = document.createElement('span');
        div.appendChild(span);
        let text = document.createTextNode('Jean-Luc ');
        span.appendChild(text);
    })

    //DOM Objective 6

    let button4 = document.getElementById('button4');
    let list = document.getElementById('friends');
    let friend = ['Josh', 'Mary', 'Chance', 'Melvin', 'Marty', 'Myrtis', 'Jessica', 'Chris', 'Mike', 'Brianne'];
    button4.addEventListener('click', function () {
        for (let i = 0; i < friend.length; i++) {
            let li = document.createElement('li');
            let liText = document.createTextNode(friend[i]);
            li.appendChild(liText);
            list.appendChild(li);
        }
    });
})