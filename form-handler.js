document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter');
  const messageDiv = document.getElementById('form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        messageDiv.textContent = "Twój email został wysłany, odezwiemy się do ciebie jak najszybciej!";
        messageDiv.style.color = "green";
      } else {
        messageDiv.textContent = "Coś poszło nie tak, spróbuj ponownie.";
        messageDiv.style.color = "red";
      }
    } catch (error) {
      messageDiv.textContent = "Błąd sieci, spróbuj ponownie.";
      messageDiv.style.color = "red";
    }
  });
});
