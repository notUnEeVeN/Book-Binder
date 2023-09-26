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
