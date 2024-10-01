document.addEventListener('DOMContentLoaded', function() {
  const customSelects = document.querySelectorAll('.custom-select');

  customSelects.forEach(function(customSelect) {

    const options = customSelect.querySelectorAll('option');
    const firstOptionText = options[0].textContent;
    const selectedItem = document.createElement('div');
    const allItems = document.createElement('div');

    selectedItem.className = 'custom-select__title';
    selectedItem.textContent = firstOptionText;
    selectedItem.setAttribute('tabindex', '0');
    customSelect.appendChild(selectedItem);

    allItems.className = 'custom-select__list custom-select__list--hide';
    customSelect.appendChild(allItems);

    options.forEach(function(option) {
      const item = document.createElement('div');
      item.className = 'custom-select__item';
      item.textContent = option.textContent;

      item.addEventListener('click', function() {
        const selectedOptionText = option.textContent;
        selectedItem.textContent = selectedOptionText;
        allItems.classList.add('custom-select__list--hide');

        const select = customSelect.querySelector('select');
        select.value = option.value;
        selectedItem.classList.remove('arrowanim');
        selectedItem.classList.add('custom-select__title--selected-color');
      });

      allItems.appendChild(item);
    });

    selectedItem.addEventListener('click', function(e) {
      const currentAllItems = this.nextElementSibling;

      document.querySelectorAll('.custom-select__list').forEach(function(list) {
        if (list !== currentAllItems) {
          list.classList.add('custom-select__list--hide');
          const otherSelectedItem = list.previousElementSibling;
          if (otherSelectedItem) {
            otherSelectedItem.classList.remove('selected');
          }
        }
      });

      document.querySelectorAll('.custom-select__title').forEach(function(item) {
        if (item !== selectedItem) {
          item.classList.remove('arrowanim');
          item.classList.remove('selected');
        }
      });

      currentAllItems.classList.toggle('custom-select__list--hide');

      if (!currentAllItems.classList.contains('custom-select__list--hide')) {
        const firstItem = currentAllItems.querySelector('.custom-select__item:first-child');
        if (firstItem) {
          firstItem.style.display = 'none';
        }
        selectedItem.classList.add('selected');
      } else {
        selectedItem.classList.remove('selected');
      }

      selectedItem.classList.toggle('arrowanim');

      e.stopPropagation();
    });

    selectedItem.addEventListener('keydown', function(e) {
      const currentAllItems = selectedItem.nextElementSibling;
      const items = Array.from(currentAllItems.querySelectorAll('.custom-select__item'));
      let selectedIndex = items.findIndex(item => item.classList.contains('selected'));

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectedItem.click();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (selectedIndex < items.length - 1) {
          selectedIndex++;
        } else {
          selectedIndex = 0;
        }
        items[selectedIndex].click();
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selectedIndex > 0) {
          selectedIndex--;
        } else {
          selectedIndex = items.length - 1;
        }
        items[selectedIndex].click();
      }

      if (e.key === 'Escape') {
        currentAllItems.classList.add('custom-select__list--hide');
        selectedItem.classList.remove('arrowanim');
      }
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.custom-select__list:not(.custom-select__list--hide)').forEach(function(opened) {
      opened.classList.add('custom-select__list--hide');
      const parentSelect = opened.parentElement;
      const selected = parentSelect.querySelector('.custom-select__title');
      selected.classList.remove('arrowanim');
      selected.classList.remove('selected');
    });
  });
});
