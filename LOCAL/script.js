let form = document.querySelector('form');
let inp = document.querySelector('input');
let ul = document.querySelector('ul')


form.addEventListener('submit', elaveEt);
document.addEventListener("DOMContentLoaded", localGetir);

function elaveEt(e) {

    e.preventDefault();
    ekran(inp.value);
    Localyaz(inp.value);
    inp.value = '';


}


function Localyaz(not) {
    let notlar;
    if (localStorage.getItem('notlar') === null) {
        notlar = [];
    } else {
        notlar = JSON.parse(localStorage.getItem('notlar'))
    }
    notlar.push(not);

    localStorage.setItem('notlar', JSON.stringify(notlar));

}


function localGetir() {
    let notlar;
    if (localStorage.getItem('notlar') === null) {
        notlar = [];
    } else {
        notlar = JSON.parse(localStorage.getItem('notlar'))
    }

    notlar.forEach(element => {
        ekran(element);
    });
}

function ekran(not) {
    if (inp.value==0){
        alert('Empty')
    }else{
    let Yenili = document.createElement('li');
    Yenili.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    Yenili.textContent = not;

    ul.appendChild(Yenili);

    let yenibtn = document.createElement('button');
    yenibtn.classList.add('btn', 'btn-danger', 'btn-sm');
    yenibtn.textContent = 'Sil';
    Yenili.appendChild(yenibtn);
    yenibtn.addEventListener('click', () => {
        Yenili.remove();
    })}
}






