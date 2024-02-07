const modal = document.querySelector('#modal');
// const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const openModalImage = document.querySelector('.open-modal-image');

openModalImage.addEventListener('click', () => {
    modal.showModal();
});

// openModal.addEventListener('click', () => {
// modal.showModal();

// })

modal.addEventListener('click', (e) => {

    if(e.target.nodeName == "DIALOG"){
        modal.setAttribute('closing',"");
        modal.addEventListener('animationend', () => {
            modal.removeAttribute('closing');
            modal.close();
        }, {once: true})
    }

})

closeModal.addEventListener('click', () => {
    modal.setAttribute('closing',"");
    modal.addEventListener('animationend', () => {
        modal.removeAttribute('closing');
        modal.close();
    }, {once: true})
    
    })



