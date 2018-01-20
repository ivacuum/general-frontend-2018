// Выбрать все
$(document).on('click', '.js-select-all', function () {
  $(this.dataset.selector).prop('checked', this.checked)
})
