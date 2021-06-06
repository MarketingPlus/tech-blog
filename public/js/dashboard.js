// let the user know if they haven't created a blog yet
const blogContainer = document.querySelector('#blogContainer');

if (!blogContainer) {
    document
        .querySelector('#no-blogs-message')
        .classList.remove('hidden')
}