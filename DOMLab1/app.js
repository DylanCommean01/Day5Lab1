function randBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
}

document.addEventListener('DOMContentLoaded', function () {
    let alertBtn = document.createElement('button');
    alertBtn.innerText = 'Display a pleasent message';
    document.body.appendChild(alertBtn);

    let btnContainer = document.getElementsByClassName('btnContainer')[0];
    btnContainer.appendChild(alertBtn);

    alertBtn.addEventListener('click', function () {
        alert('You look lovely today!');
    });

    let inputBtn = document.getElementById('displayInput');
    let input = document.getElementById('userInput');

    inputBtn.addEventListener('click', function () {
        alert(input.value);
    });

    let divBox = document.getElementsByClassName('divBox')[0];

    function toggleBackground() {
        divBox.classList.toggle('bg-secondary');
    }

    divBox.addEventListener('mouseenter', toggleBackground);
    divBox.addEventListener('mouseleave', toggleBackground);

    let pgText = document.getElementById('pgText');

    pgText.addEventListener('click', function () {
        let r = randBetween(1, 255);
        let g = randBetween(1, 255);
        let b = randBetween(1, 255);
        pgText.style.color = `rgb(${r}, ${g}, ${b})`;
    });

    let btnSpan = document.getElementById('btnSpan');
    let divSpan = document.getElementById('divSpan');

    btnSpan.addEventListener('click', function () {
        let span = document.createElement('span');

        span.innerText = 'Dylan ';

        divSpan.appendChild(span);
    });

    let btnFriend = document.getElementById('btnFriend');
    let ulFriends = document.getElementById('friends');
    let friends = ['Miranda', 'Thomas', 'John', 'Andrew', 'Matt', 'Jacob', 'Jordan', 'Bee Movie', 'Gary', 'Jesus'];

    btnFriend.addEventListener('click', function addFriend() {
        if (friends.length <= 0) {
            btnFriend.removeEventListener('click', addFriend);
            return;
        }

        let friend = friends.pop();
        let li = document.createElement('li');

        li.textContent = friend;
        ulFriends.appendChild(li);
    });
});