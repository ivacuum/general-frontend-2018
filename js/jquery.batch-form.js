// Операции над несколькими записями
$(document).on('submit', '.js-batch-form', function (e) {
  e.preventDefault()

  let data = e.currentTarget.dataset
  let $form = $(this)
  let ids = $(data.selector + ':checked').serialize()

  axios.post(data.url, $form.serialize() + '&' + ids).then((response) => {
    if (response.data.redirect) {
      document.location = response.data.redirect
    }
  })
})
