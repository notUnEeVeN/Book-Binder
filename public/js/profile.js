const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  const fileInput = document.querySelector('#image').files[0]; // Use .files[0] to access the selected file

  console.log('Name:', name);
  console.log('Description:', description);
  console.log('File Input:', fileInput);

  if (name && description && fileInput) {
    const formData = new FormData(); // Create a FormData object to handle file uploads
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', fileInput); // Append the file input with the name 'image'

    const response = await fetch(`/api/projects/uploads`, {
      method: 'POST',
      body: formData, // Send the FormData object
    });

    if (response.ok) {
      // Redirect to the profile page after a successful post creation
      console.log('redirecting to profile page');
      window.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// Attach the event listener to the form
document
  .querySelector('#project-form') // Select by id, not class
  .addEventListener('submit', newFormHandler);

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

// Toggle edit form
document.querySelectorAll('.btn-edit').forEach((button) => {
  button.addEventListener('click', (event) => {
    const projectId = event.target.getAttribute('data-id');
    const editForm = document.querySelector(
      `.edit-project-form[data-id="${projectId}"]`
    );
    if (editForm) {
      editForm.style.display = editForm.style.display === 'none' ? '' : 'none';
    }
  });
});

// Handle edit form submission
document.querySelectorAll('.edit-project-form').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const projectId = form.getAttribute('data-id');
    const name = form
      .querySelector('input[name="project-name-edit"]')
      .value.trim();
    const description = form
      .querySelector('textarea[name="project-desc-edit"]')
      .value.trim();

    // Get the image file input
    const imageInput = form.querySelector('input[type="file"]');
    const imageFile = imageInput.files[0]; // Get the selected file

    // Create a FormData object to send both data and file
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', imageFile); // Append the selected file to the FormData

    if (name && description) {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        body: formData, // Send FormData instead of JSON
      });

      if (response.ok) {
        location.reload();
      } else {
        alert('Failed to update post');
      }
    } else {
      alert('Please fill out both fields');
    }
  });
});

// Use event delegation for dynamically generated elements
document.body.addEventListener('click', (event) => {
  if (event.target.matches('.btn-danger')) {
    delButtonHandler(event);
  }
});
