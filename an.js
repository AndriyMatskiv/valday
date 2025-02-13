const heartPositionsDesktop = [
    { x: 500, y: 0 },
    { x: 150, y: 250 },
    { x: 800, y: 250 },
    { x: 500, y: 450 },
    { x: 200, y: 430 },
    { x: 1000, y: 130 },
    { x: 1300, y: 0 },
    { x: 1200, y: 600 },
    { x: 1250, y: 323 },
    { x: 937, y: 540 },
    { x: 300, y: 700 },
    { x: 500, y: 1000 },
    { x: 870, y: 960 },
    { x: 1050, y: 1060 },
    { x: 100, y: 1060 },
    { x: 130, y: 1360 },
    { x: 430, y: 1330 },
    { x: 730, y: 1230 },
    { x: 730, y: 1230 },
    { x: 730, y: 1430 },
    { x: 1230, y: 1430 },
    { x: 1120, y: 1630 },
    { x: 1230, y: 1839 },
    { x: 600, y: 1630 },
    { x: 350, y: 1530 },
    { x: 530, y: 1830 },
    { x: 820, y: 1830 },
    { x: 250, y: 1720 },
    { x: 1000, y: 2010 },
    { x: 100, y: 2010 },
    { x: 500, y: 2101 },
    { x: 310, y: 2200 },
    { x: 1200, y: 2230 },
    { x: 900, y: 2250 },
    { x: 877, y: 2500 },
    { x: 200, y: 2458 },
    { x: 420, y: 2420 },
    { x: 500, y: 2570 },
    { x: 1210, y: 2550 },
    { x: 1100, y: 2693 },
    { x: 300, y: 2665 },
    { x: 640, y: 2703 },
    { x: 300, y: 2905 },
    { x: 130, y: 2765 },
    { x: 735, y: 2905 },
    { x: 1000, y: 2905 },
    { x: 1211, y: 2995 },
    { x: 700, y: 700 },
];

// Координати для мобільних пристроїв (відносні до екрану)
const heartPositionsMobile = [
   
];

// Функція визначення типу пристрою
function isMobile() {
    return window.innerWidth <= 800; // Визначаємо мобільний екран
}

// Функція створення сердець
function createHearts(positions) {
    positions.forEach(pos => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        heart.style.left = `${pos.x}px`;
        heart.style.top = `${pos.y}px`;
    });
}

// Використовуємо відповідний масив координат
createHearts(isMobile() ? heartPositionsMobile : heartPositionsDesktop);
