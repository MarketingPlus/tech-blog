// let the user know if they haven't created a blog yet
const blogContainer = document.querySelector('#blogContainer');

if (!blogContainer) {
    document
        .querySelector('#no-blogs-message')
        .classList.remove('hidden')
}

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