let clickCount = 0;

// Завантажити кількість кліків з Local Storage при завантаженні сторінки
window.onload = function() {
    if (localStorage.getItem('clickCount')) {
        clickCount = parseInt(localStorage.getItem('clickCount'), 10);
        document.getElementById('clickCount').innerText = clickCount;
    }
};

// Функція для збільшення кількості кліків і збереження їх у Local Storage
function incrementCounter() {
    clickCount++;
    document.getElementById('clickCount').innerText = clickCount;
    localStorage.setItem('clickCount', clickCount);
}
