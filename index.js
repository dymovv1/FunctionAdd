document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('.button.is-primary');
    const descriptionTextarea = document.querySelector('#description');
    const form = document.querySelector('form');
  
    saveButton.addEventListener('click', function(event) {
      event.preventDefault();
      const inputs = document.querySelectorAll('.block-input input');
      let description = '';
      inputs.forEach(function(input) {
        const label = input.previousElementSibling.textContent;
        const value = input.value.trim();
        if (value !== '') {
          description += `${label} : ${value} cm\n`;
        }
      });
      if (description !== '') {
        descriptionTextarea.value += description;
      }
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  
    const inputs = document.querySelectorAll('.block-input input');
    inputs.forEach(function(input) {
      input.addEventListener('input', function() {
        this.dataset.value = this.value.trim();
      });
      input.addEventListener('focus', function() {
        this.value = this.dataset.value || '';
      });
    });
  });
  