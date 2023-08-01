function dropcontent() {
    var dropContent = document.querySelector('.drop-content');
    var buttonText = document.getElementById('buttonText');
    var computedStyle = window.getComputedStyle(dropContent);
    if (computedStyle.display === 'none') {
        dropContent.style.display = 'block';
        buttonText.innerText = 'see less';
        buttonText.style.position = 'absolute';
        buttonText.style.top += '350px';
    } else {
        dropContent.style.display = 'none';
        buttonText.innerText = 'see more';
        buttonText.style.position = 'absolute';
        buttonText.style.top -= '350px';
    }
}
