const btn = document.querySelector(".btn");
const body = document.querySelector("body");

btn.addEventListener('click', function() {
    let colors = {
        1: "#fcba03",
        2: '#eb4034',
        3: '#32a852',
        4: '#3483eb',
        5: '#eb34db',
        6: '#34ebe5',
        7: '#ebe834',
        8: '#34e8eb',
        9: '#d90e0b',
        10: '#de6af7',
        11: '#8070e6',
        12: '#e67870',
        13: '#690d06',
        14: '#6036d1'
    }
    let randomIndex = Math.floor(Math.random() * 10) + 1;

    let randomColor = colors[randomIndex];

    body.style.backgroundColor = randomColor;

    let colorHash = randomColor.substring(1);

    btn.textContent = "#" + colorHash;

    function copytext() {
        navigator.clipboard.writeText(randomColor)
        alert('Вы скопировали цвет: ' + randomColor)
    }
    btn.addEventListener('click', copytext())
});