
<b>Каталог каналов Telegram.
- Приложение имеет:
-  Авторизацию;
-  Cортировку;
-  Функцию добавление и удаление канала;
-  Функцию добавление и удаление отзыва;
-  Функцию изменения канала;
-  Звездочный рейтинг;
-  Просмотр информации о канале;
-  localStorage для авторизации;
  
_________

<b>Привилегии

|Администратора | Пользователя| Гостя
|-----------------------|--------------|-------
|Добавить новый канал| Добавить отзыв| Просмотр одного рандомного канала в каждом категории
|Удалить выбранный канал|Удалить отзыв| Просмотр информации о канале
|Изменить выбранный канал|Просмотр всех каналов
|Удалить отзыв
|Добавить отзыв

_________


| Адрес        | Назначение| Обязательные значения|
| ------------- |:-------------:| -----:|
|POST /auth|Авторизация|login(String), password(String)
| PATCH/ catergories/id     | Изменение категорий | id(number), name(string) |  
| GET / categories| Получение списка категорий
|GET / channels|Получение списка каналов
|GET / categories / :id / channels |Получение каналов по id выбранной категории
|GET / channels / :id / rates|Получение рейтинга по id канала
|GET / channels / :id / reviews|Получение отзывов по id канала
|POST / channels|Добавление нового канала|name(string), followers(number)  imgUrl(string), desk(string), category(number), channelLogin(string)|
|DELETE / сhannels / id |Удаление канала (по id)
|PATCH / сhannels / id |Изменение канала
|DELETE / reviews / id|Удаление отзыва
|POST / reviews|Добавление отзыва|userName (String), content (String), date (String)
|POST/ rating|Добавление рейтинга|star(number)
|GET / rating|Получение рейтинга 
