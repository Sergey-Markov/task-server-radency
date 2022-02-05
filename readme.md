1. Для того чтоб отправить новую заметку(POST http://list-nodes.herokuapp.com/notes) нужно, отправить объект с полями:
   {
   "name": "Me",
   "category": "Idea",
   "content": "sport every day at 01.01.2022"
   }

   в ответ прилетит файл .json:
   {
   "status": "succes",
   "code": 201,
   "data": {
   "id": "bd84047f-a096-4ca1-9ea9-439ac8ed6b93",
   "name": "Me",
   "date": "Jan 22, 2022",
   "category": "Idea",
   "content": "sport every day at 01.01.2022",
   "allDatesFromText": "01.01.2022",
   "archived": false
   }
   }

2. Для того чтоб изменить заметку(PATCH http://list-nodes.herokuapp.com/notes/:id) отправляем объект:
   {
   "content": "sport every day at 01.01.2022",
   }
   - для того чтоб перевести заметку в архив используем в теле запроса:
     {
     "archived":true
     }
3. Роуты для работы:
   Получить все заметки: GET http://list-nodes.herokuapp.com/notes,
   Получить статистику по заметкам: GET http://list-nodes.herokuapp.com/notes/stats,
   Получить заметку по id: GET http://list-nodes.herokuapp.com/notes/:id,
   Удалить заметку по id: DELETE http://list-nodes.herokuapp.com/notes/:id,
   Удалить все заметки: DELETE http://list-nodes.herokuapp.com/notes/deleteall

4. Пример работы с сервером:https://sergey-markov.github.io/radency-test-task-second-react/
