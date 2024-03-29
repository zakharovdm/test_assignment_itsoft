# Тестовое задание для компании ИТ-софт

[Проект](https://test-assignment-itsoft.vercel.app/)

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm start
```

### Создание билда
Чтобы выполнить production сборку, выполните команду: 
```sh
npm run build
```

### Задание

Сверстайте страницу. 
Макет : 
https://www.figma.com/file/XB2e6qOPFFYmJUwpAyespX/test-word?type=design&node-id=0-1&mode=design&t=Tr22rlNlKb7nxdC0-0
Реализация задания на React

Наименования классов должны задаваться по БЭМ.

В блоке header слайдер должен переключаться по навигации. Картинки на 3 слайда в макете имеются.

В блоке header при нажатии на кнопку «Обратная связь» должно открываться модальное окно с формой обратной связи. Поля формы: Фамилия - text, Имя - text, телефон – number, электронная почта – email, кнопка добавления файла – file, кнопка отправить  - button. Форма с валидацией данных, с ограничением ввода символов (min, max), указано правило обязательного заполнения всех полей. Прикрепленные файлы должны отправляться на email. В форме так же должна присутствовать кнопка закрытия модального окна, которая работает. Дизайн формы обратной связи на ваше усмотрение.

В блоке header при нажатии на кнопку поиска, должно выходить отдельное поле для поиска информации по сайту.

В верстке используйте flex или grid. Если будете использовать оба варианта в разных блоках – это будет плюсом.
Выполните адаптив макета так, чтобы верстка не ломалась при уменьшении расширении, а также чтобы не появлялась нижняя прокрутка до ширины 360px.
В верстке используйте pixel perfect. 
Выложите проект на гитхаб и опубликуйте на gh-pages для просмотра визуально с ссылкой на репозиторий. Если нет гитхаба, пришлите архив бэкапа проекта.