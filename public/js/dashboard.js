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

// create a new blog post
const createNewBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim(); 
    const text = document.querySelector('#text-input').value.trim();

    
    if (title && text) {
        const response = await fetch('/api/blog', {
          method: 'POST',
          body: JSON.stringify({ title, text }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.reload(); 
        } else {
          alert('Failed to create blog post');
        }
    }
};