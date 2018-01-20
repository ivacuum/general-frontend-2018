// Подтверждение действия
$(document).on('click', '.js-confirm', (e) => confirm(e.currentTarget.dataset.confirm))
