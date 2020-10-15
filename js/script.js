let faqItems = document.querySelectorAll('li');

faqItems.forEach((i) => {
    i.addEventListener('click', (e) => {
        i.classList.toggle('active');
    });
});