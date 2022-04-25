'use strict';
const btnShowModal=document.getElementById('btn-show');

const btnCloseModal=document.getElementById('btn-close');

const modalContainer=document.getElementById('modal-container');

const overlayContainer=document.getElementById('overlay');

btnShowModal.addEventListener('click',function(){
    modalContainer.classList.add('show');
    overlayContainer.classList.add('show') ;
});

btnShowModal.addEventListener('click',function(){
    modalContainer.classList.remove('show');
    overlayContainer.classList.remove('show') ;
});

overlayContainer.addEventListener('click',function(){
    modalContainer.classList.remove('show');
    overlayContainer.classList.remove('show') ;
});

document.addEventListener('keydown',function(e){
if(e.key ==='Escape'){
    modalContainer.classList.remove('show');
    overlayContainer.classList.remove('show') ;
}
});