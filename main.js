document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    noButton.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});