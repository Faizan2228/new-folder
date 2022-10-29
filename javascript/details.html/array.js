const details = [{
        'name': "john",
        'age': 32,
    },
    {
        'name': "silk",
        'age': 34,
    },
    {
        'name': "briann",
        'age': 45,
    },
    {
        'name': "katrin",
        'age': 22,
    }, {
        'name': "toretto",
        'age': 45,
    },
    {
        'name': "light yagami",
        'age': 23,
    },
    {
        'name': 'zoro',
        'age': 22,
    },
    {
        'name': "mihawk",
        'age': 41
    },
    {
        'name': "john",
        'age': 32,
    },
    {
        'name': "silk",
        'age': 34,
    },
    {
        'name': "briann",
        'age': 45,
    },
    {
        'name': "katrin",
        'age': 22,
    }, {
        'name': "toretto",
        'age': 45,
    },
    {
        'name': "light yagami",
        'age': 23,
    },
    {
        'name': 'zoro',
        'age': 22,
    },
    {
        'name': "mihawk",
        'age': 41
    },
    {
        'name': "john",
        'age': 32,
    },
    {
        'name': "silk",
        'age': 34,
    },
    {
        'name': "briann",
        'age': 45,
    },
    {
        'name': "katrin",
        'age': 22,
    }, {
        'name': "toretto",
        'age': 45,
    },
    {
        'name': "light yagami",
        'age': 23,
    },
    {
        'name': 'zoro',
        'age': 22,
    },
    {
        'name': "mihawk",
        'age': 41
    },
];


const info = document.querySelector('#info');
let data = details.map(function(item) {
    return '<div class="cards">' + '<ul>' + '<li>' + item.name + ' ' + item.age + '</li>' + '</ul>' + '</div>'
});
info.innerHTML = data.join('\n');

// hover effect js
const circle = document.querySelector('#circle');
circle.addEventListener('mouseenter', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});
circle.addEventListener('mouseleave', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});
// window.onscroll = function() {
//     myfun();
// }

// function myfun() {
//     if (document.documentElement.scrollTop > 0) {
//         document.getElementById('head').className = 'stick';
//     } else {
//         document.getElementById('head').className = '';

//     }
// }
window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}