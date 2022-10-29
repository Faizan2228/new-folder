const specs = document.querySelector('.closed');
const heart = document.querySelector('.click');
specs.addEventListener('click', () => {
    if (heart.classList.contains('click')) {
        heart.classList.add('active');
        specs.classList.remove('active');
    } //else if (specs.classList.contains('closed')) {
    //     specs.classList.add('active');
    //     heart.classList.remove('active');
    // }
});
heart.addEventListener('click', () => {
    if (specs.classList.contains('net')) {
        specs.classList.add('active');
        heart.classList.remove('active');
    }
})