// show & hide form to create a blog 
function openForm() {
    document
        .querySelector('#form-container')
        .classList.remove('hidden');
};

function closeForm() {
    document
        .querySelector('#form-container')
        .classList.add('hidden');
};