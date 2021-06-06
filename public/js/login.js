//function for logging in
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert("incorrect username or password - please try again")
        }
  
      } catch (error) {
        alert(error.message)
      }
    } else {
      alert('please enter a username & password')
    }
  };