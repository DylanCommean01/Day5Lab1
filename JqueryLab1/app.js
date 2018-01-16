function randBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
}

$(function () {
   
    let alertBtn = $('<button>Display a pleasant message</button>').appendTo('.btnContainer');

    alertBtn.click(function () {
        alert('You look lovely today!');
    });

    let inputBtn = document.getElementById('displayInput');
    let input = $('#userInput');

    $('#displayInput').click(function () {
        alert(input.val());
    });

    let divBox = $('.divBox');

    function toggleBackground() {
        divBox.toggleClass('bg-secondary');
    }

    divBox.hover(toggleBackground, toggleBackground);

    let pgText = $('#paragraphText');

    pgText.click(function () {
        let r = randBetween(1, 255);
        let g = randBetween(1, 255);
        let b = randBetween(1, 255);
        pgText.css('color', `rgb(${r}, ${g}, ${b})`);
    });

    let btnSpan = $('#btnDisplayName');
    let divSpan = $('#divSpan');

    btnSpan.click(function () {
        divSpan.append('<span>Dylan </span>');
    });

    let btnFriend = $('#btnDisplayFriends');
    let ulFriends = $('#friends');
    let friends = ['Miranda', 'Thomas', 'John', 'Andrew', 'Matt', 'Jacob', 'Jordan', 'Bee Movie', 'Gary', 'Jesus'];

    btnFriend.click(function addFriend() {
        if (friends.length <= 0) {
            btnFriend.off('click', addFriend);
            return;
        }

        let friend = friends.pop();
        ulFriends.append(`<li>${friend}</li>`);
    });
});
