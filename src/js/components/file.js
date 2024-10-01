document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.getElementById('file');
  const label = document.querySelector('.form-file__label');
  const originalLabelContent = label.innerHTML;

  fileInput.addEventListener('focus', () => {
    label.classList.add('focused');
  });

  fileInput.addEventListener('blur', () => {
    label.classList.remove('focused');
  });

  fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {

      label.innerHTML = `Выбрано: ${fileInput.files.length} файл(ов)`;
    } else {

      label.innerHTML = originalLabelContent;
    }
  });
});
