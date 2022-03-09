const showMore = document.querySelector('.show-more');

const hide = document.querySelector('.hide-text');

const text1 = document.getElementById('text-1');

const text2 = document.getElementById('text-2');

showMore.addEventListener('click', showTextOne);

hide.addEventListener('click', hideText);

function showTextOne(){
   text1.classList.add('show-text');
   text2.classList.add('show-text');
}

function hideText(){
   text1.classList.remove('show-text');
   text2.classList.remove('show-text');
}
