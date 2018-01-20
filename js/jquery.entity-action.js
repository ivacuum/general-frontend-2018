// Действие над сущностью
$(document).on('click', '.js-entity-action', function (e) {
  e.preventDefault()

  let $this = $(this)
  let confirm_text = this.dataset.confirm

  if ($this.hasClass('disabled')) {
    return false
  }

  if (confirm_text) {
    if (!confirm(confirm_text)) {
      return false
    }
  }

  let method = this.dataset.method || 'post'

  $this.addClass('disabled')

  $.ajax({
    url: $this.attr('href'),
    method: method.toLowerCase() === 'get' ? 'get' : 'post',
    data: { _method: method.toUpperCase() }
  }).done((data) => {
    if (data.status === 'OK') {
      $.pjax({
        url: data.redirect,
        container: App.pjax.container
      })
    } else {
      // App.addFlashNotification(data.message || 'Что-то пошло не так', 'danger')
      alert(data.message || 'Что-то пошло не так')
    }
  }).fail((jqxhr) => {
    // App.addFlashNotification(`${jqxhr.status} ${jqxhr.statusText}`, 'danger')
    alert(`${jqxhr.status} ${jqxhr.statusText}`)
  })
})
