// Возможность посмотреть пароль
$(document).on('click', '.js-password-eye', function (e) {
  e.preventDefault()

  let state = this.dataset.state || 'password'
  let $input = $(this).siblings('.form-control')

  if (state === 'password') {
    $input.attr('type', 'text')
    this.dataset.state = 'text'

    document.querySelector('.js-password-eye-hide').hidden = false
    document.querySelector('.js-password-eye-show').hidden = true
  } else if (state === 'text') {
    $input.attr('type', 'password')
    this.dataset.state = 'password'

    document.querySelector('.js-password-eye-hide').hidden = true
    document.querySelector('.js-password-eye-show').hidden = false
  }
})
