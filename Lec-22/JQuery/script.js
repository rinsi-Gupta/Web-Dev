const heading = document.getElementsByTagName('h1');
console.log(heading);

$(heading[0]).css('color', 'red')

// const heading = $('h1');
// console.log(heading);

// heading[0].classList('color', 'red');
// console.log(heading[0]);
// heading[0].style.color = 'red';

// const styles = {
//     color: "pink",
//     border: '2px solid brown',
// }

// $('p').css(styles);
// console.log($('p').text('hello world'));
// console.log($('p').html('<i>hello world </i>'));

// console.log($('p'));

$('h1').on('click', (e) => {
    // console.log(e.target);
    $(e.target).css()
})



