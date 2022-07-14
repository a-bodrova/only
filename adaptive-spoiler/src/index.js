import './assets/sass/index.scss';

const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.onclick = (e) => {
    const self = e.currentTarget;
    const content = self.querySelector('.item__content');

    item.classList.toggle('active');

    if (self.classList.contains('active')) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = '0';
    }

  }
})