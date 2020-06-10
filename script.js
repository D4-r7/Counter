/*Replicate the basic HTML above (2 different headings and a button)
Create an EventListener for clicking on the button, increase the value of the second heading (currently 0)
(Optional) Create a working decreasing button as well
(Hint) Any content of an HTML element is going to be a string
(Hint) You can store the number in a variable*/






var likenum = parseInt($('#likenumber').html());

$('#like').click(()=> {
    $('#likenumber').text(++likenum);
});

$('#unlike').click(()=> {
    $('#likenumber').text(--likenum);
});










