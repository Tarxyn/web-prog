document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    let currentIndex = 0;

    function showElements() {
        if (currentIndex < elements.length) {
            elements[currentIndex].removeAttribute('hidden'); // Убираем скрытие
            setTimeout(() => {
                elements[currentIndex].classList.add('visible'); // Добавляем класс для плавного показа
                currentIndex++;
                showElements(); // Рекурсивный вызов для следующего элемента
            }, 1000); // Задержка перед показом следующего элемента
        } else {
            document.getElementById('showButton').disabled = true; // Делаем кнопку неактивной
        }
    }

    document.getElementById('showButton').addEventListener('click', showElements);
});