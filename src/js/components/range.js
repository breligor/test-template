document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.getElementById('range');
  const rangeValueDisplay = document.querySelector('.form-range__value');

  function updateRangeValue() {
    rangeValueDisplay.textContent = `${rangeInput.value}%`;
  }

  updateRangeValue();
  rangeInput.addEventListener('input', updateRangeValue);
});
