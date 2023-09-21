const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

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

document.querySelector('.new-project-form').addEventListener('submit', newFormHandler);

// Toggle edit form
document.querySelectorAll('.btn-edit').forEach(button => {
  button.addEventListener('click', (event) => {
    const projectId = event.target.getAttribute('data-id');
    const editForm = document.querySelector(`.edit-project-form[data-id="${projectId}"]`);
    if (editForm) {
      editForm.style.display = editForm.style.display === 'none' ? '' : 'none';
    }
  });
});

// Handle edit form submission
document.querySelectorAll('.edit-project-form').forEach(form => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const projectId = form.getAttribute('data-id');
    const name = form.querySelector('input[name="project-name-edit"]').value.trim();
    const description = form.querySelector('textarea[name="project-desc-edit"]').value.trim();

    if (name && description) {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'PUT', 
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json' }
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