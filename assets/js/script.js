const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const arrow = item.querySelector('.voir-plus-faq');

  arrow.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});