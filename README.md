Общие компоненты для сайтов с использованием bootstrap 4.

### Порядок подключения стилей

```scss
@import "~bootstrap/scss/functions";
@import "~vac-gfe/scss/variables"; // Переопределение переменных
@import "~bootstrap/scss/variables";
// ...
@import "~vac-gfe/scss/gfe"; // Компоненты самые последние
```

### Пример подключения скрипта

```js
import 'vac-gfe/js/pjax'
```

### Шторка для pjax

В конце основного шаблона, перед подключением скриптов.

```html
<div class="curtain curtain-closed js-curtain"></div>
```

### Пустая карта для скриптов

Пример сборки для laravel-mix.

```js
mix.copy('node_modules/vac-gfe/js/empty.map', 'public/assets/axios.min.map')
```
