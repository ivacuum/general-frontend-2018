import Echo from 'laravel-echo'

if (typeof io !== 'undefined') {
  window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window['AppOptions'].socketIoHost,
    csrfToken: window['AppOptions'].csrfToken
  })
}
