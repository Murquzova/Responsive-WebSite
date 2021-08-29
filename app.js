const humburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

humburgerMenu.addEventListener('click', function () {
  humburgerMenu.classList.toggle('hum-click');
  menu.classList.toggle('active-menu');
});

const btnPlus = document.querySelector('.plus');

const btnMinus = document.querySelector('.minus');
const count_span = document.querySelector('.count-span');

let index = 0;
btnPlus.addEventListener('click', function () {
  index++;
  count_span.innerHTML = `${index}`;
});
btnMinus.addEventListener('click', function () {
  index--;
  if (index < 0) {
    index = 0;
  }
  count_span.innerHTML = `${index}`;
});

const boxPage = 4;
const boxes = document.querySelectorAll('.similar>div');
// console.log(boxes);
const pagination = document.getElementById('pagination');
const totalPage = Math.ceil(boxes.length / boxPage);

function deleteBoxes(a) {
  for (let i = a; i < boxes.length; i++) {
    boxes[i].classList.add('hide');
  }
}
deleteBoxes(boxPage);
for (let i = 0; i < totalPage; i++) {
  pagination.innerHTML += `<li onclick="goToPage(${i})">${i + 1}</li>`;
}

function goToPage(page) {
  pagination
    .querySelectorAll('li')
    .forEach((a) => a.classList.remove('active'));
  pagination.querySelectorAll('li')[page].classList.add('active');
  deleteBoxes(0);
  for (
    let i = page * boxPage;
    i < page * boxPage + boxPage && i < boxes.length;
    i++
  ) {
    boxes[i].classList.remove('hide');
  }
}
