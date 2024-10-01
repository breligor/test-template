/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/components/file.js":
/*!***********************************!*\
  !*** ./src/js/components/file.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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

/***/ }),

/***/ "./src/js/components/range.js":
/*!************************************!*\
  !*** ./src/js/components/range.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.getElementById('range');
  const rangeValueDisplay = document.querySelector('.form-range__value');
  function updateRangeValue() {
    rangeValueDisplay.textContent = `${rangeInput.value}%`;
  }
  updateRangeValue();
  rangeInput.addEventListener('input', updateRangeValue);
});

/***/ }),

/***/ "./src/js/components/safari-height.js":
/*!********************************************!*\
  !*** ./src/js/components/safari-height.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
if (isSafari()) {
  function updateMenuHeight() {
    const navMenu = document.querySelector('.nav.menu--active');
    if (navMenu) {
      navMenu.style.height = `${window.innerHeight - 100}px`;
    }
  }
  window.addEventListener('resize', updateMenuHeight);
  const burgerButton = document.querySelector('.burger');
  burgerButton.addEventListener('click', function () {
    setTimeout(updateMenuHeight, 0);
  });
}

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
document.addEventListener('DOMContentLoaded', function () {
  const customSelects = document.querySelectorAll('.custom-select');
  customSelects.forEach(function (customSelect) {
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
    options.forEach(function (option) {
      const item = document.createElement('div');
      item.className = 'custom-select__item';
      item.textContent = option.textContent;
      item.addEventListener('click', function () {
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
    selectedItem.addEventListener('click', function (e) {
      const currentAllItems = this.nextElementSibling;
      document.querySelectorAll('.custom-select__list').forEach(function (list) {
        if (list !== currentAllItems) {
          list.classList.add('custom-select__list--hide');
          const otherSelectedItem = list.previousElementSibling;
          if (otherSelectedItem) {
            otherSelectedItem.classList.remove('selected');
          }
        }
      });
      document.querySelectorAll('.custom-select__title').forEach(function (item) {
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
    selectedItem.addEventListener('keydown', function (e) {
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
  document.addEventListener('click', function () {
    document.querySelectorAll('.custom-select__list:not(.custom-select__list--hide)').forEach(function (opened) {
      opened.classList.add('custom-select__list--hide');
      const parentSelect = opened.parentElement;
      const selected = parentSelect.querySelector('.custom-select__title');
      selected.classList.remove('arrowanim');
      selected.classList.remove('selected');
    });
  });
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll.js */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll.js */ "./src/js/functions/enable-scroll.js");


(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  burger?.addEventListener('click', e => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");
/* harmony import */ var _components_file_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/file.js */ "./src/js/components/file.js");
/* harmony import */ var _components_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/range.js */ "./src/js/components/range.js");
/* harmony import */ var _components_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select.js */ "./src/js/components/select.js");
/* harmony import */ var _components_safari_height_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/safari-height.js */ "./src/js/components/safari-height.js");
/* harmony import */ var _functions_burger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/burger.js */ "./src/js/functions/burger.js");






})();

/******/ })()
;
//# sourceMappingURL=main.js.map