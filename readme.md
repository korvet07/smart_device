## Краткая инструкция по работе
Для начала работы у вас должна быть установлена **Node.js 14**

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера - `npm start`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`

## **Общие технические требования**

### Макет

[Smart Device (New)](https://www.figma.com/file/dFksQNA2TgF4drIQzIVd8I/%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4-%D0%90%D0%BA%D1%81%D0%B5%D0%BB%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80---Smart-Device-(Copy)?node-id=21711%3A2)

1. Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
2. Сетка: определена в макете.
3. Раскладка блоков на странице: флексы и гриды.
4. Адаптивность сетки: мобильная, планшетная и десктопная версии. **Desktop First.** На всех промежуточных разрешениях используется резиновая вёрстка.
5. Используемая методология: БЭМ.
6. Используемые фреймворки: нет.
7. Используемый препроцессор: Sass (SCSS).
8. Используемый инструмент автоматизации: Gulp.

    Ссылка на сборку: [https://github.com/htmlonelove/liga-accelerator-template](https://github.com/htmlonelove/liga-accelerator-template)
    **Без согласования с наставником не вносить изменения в сборку!**

    *Для корректной работы сборки необходимо использовать версию **NodeJs 16**.*

    *Требование в сборке о запрете изображений в CSS не является обязательным.*

    - *Подробнее*

        Это рекомендация Лиги - не использоваться изображения в CSS. Это необходимо для бэкенда: вставка изображений в css не даёт возможности легко их при необходимости заменить. Это требование не является обязательным.

9. Кроссбраузерность: Chrome, Firefox, Safari.
10. Графика не предоставляется и её необходимо вырезать самостоятельно. Правила работы с Figmа тут — [https://htmlacademy.ru/blog/html/figma](https://htmlacademy.ru/blog/html/figma)
11. Нестандартные шрифты подключены локально. Скачать можно с Google Fonts — [https://fonts.google.com/](https://fonts.google.com/)
12. JavaScript: минимальная реализация, модальные окна, переключения и так далее.

Верстка должна соответствовать Критериям качества:

[Критерии качества — Фронтенд-разработчик](https://www.notion.so/b9d5253793624e61939b85a04e07d7de)

Верстка проекта выполняется согласно базовому техническому заданию:

[Базовое Техническое задание к проектам Акселератора](https://www.notion.so/ed59b1e3e63c40f994772db37500d0f9)

✅ **Перед сдачей проекта обязательно проверить проект на соответствие критериям и провести [*самостоятельное тестирование.*](https://www.notion.so/6ac6d0482eb24d6b91568f2333aef1db)**

## Требования заказчика

### Брейкпоинты

- 320px - 767px — мобильная версия;
- 768px - 1023px — планшетная версия;
- 1024px и выше — десктопная версия.

### Шапка и Главный блок

1. Шапку на Десктопе нужно сделать фиксированной при скролле

    [Smart Device (New)](https://www.figma.com/proto/9N3RjCO3hy5g8tfBwoqxbQ/Smart-Device-(New)?node-id=21711%3A3&scaling=min-zoom&page-id=21711%3A2)

2. По кнопке `Заказать звонок` открывается модальное окно с формой

    ![2f8531bac0.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc266292-7bf7-491f-9837-2e3042170857/2f8531bac0.jpeg)

3. `Получить бесплатную консультацию` введет плавным скролом к блоку с формой на странице

    ![005553b83b.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/69408e4d-bfd9-47ba-b09d-2f04835f35e9/005553b83b.jpeg)

    ![c442a76a5c.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c81de9af-977d-4553-b115-4cb2979fa676/c442a76a5c.jpeg)

### Преимущества

1. На карточках с преимуществами должен быть декоративный ховер при наведении, как показан на первой карточке

    ![5782b47220.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0225369c-4efe-413a-9615-f346c037345a/5782b47220.jpeg)

### О компании

1. По кнопке `Подробнее` должен развернутся полный текст блока:

![56db29e5a0.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0afb8e8-c14b-4a45-8302-840e8a315839/56db29e5a0.jpeg)

1. После клика пользователь должен увидеть полный текст, еще два абзаца к тексту в макете:

    Smart Device - это команда профессионалов. Через нас прошло более 1 000 000 клиентов, 70% из которых продолжают сотрудничество по сей день. На данный момент насчитывается более 14 офисов по всей стране и 20 городов присутствия.
    Мы стремимся к постоянному развитию и повышению уровня качества продукции, производимой внутри компании. Использование инновационных технологий помогает экономить деньги и время наших клиентов

2. При развернутом тексте кнопка меняет название на `Свернуть` и по клику на нее текст сворачивается.

### Товары и Услуги

1. Карточки Товаров и Услуг кликабельны и ведут на страницы, которых сейчас нет в макете
2. Каждая карточка — целиком обернута в ссылку

    ![17fe0b6f77.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48a3e7c6-0263-42ce-8dbf-b68b984b2e35/17fe0b6f77.jpeg)

### Форма обратной связи

![94748f3cf1.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c749cf7-7f6a-412e-9085-4d3b42e4b9ff/94748f3cf1.jpeg)

![9b2315e3e7.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05406303-2e29-4755-b8be-20e10946526b/9b2315e3e7.jpeg)

1. Нам обязательно нужно получить от пользователя контактные данные и согласие на обработку данных. Поле с вопросом не обязательно.
2. В поле телефон должна быть маска формата  `+7(` (при вводе данных появляется закрывающаяся скобка).  В поле можно ввести только 10 цифр (мобильный телефон)
3. При открытии модального окна должен стоять фокус на поле Имя

### Подвал

1. В мобильной версии в подвале нужно оживить Аккордеон

    ![5923b4d914.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/60a66db1-a959-4d55-9001-b06a12bb2778/5923b4d914.jpeg)

2. По умолчанию обе вкладки должны быть закрыты
3. Открыта может быть только одна вкладка. Когда открывается новая вкладка, вторая должна закрыться.
4. Контент подвала должен быть доступен при отключенном JavaScript — обе вкладки должны быть раскрыты.
5. Знаки плюс и минус меняют свое состояние при закрытой и открытой вкладке соотвественно
