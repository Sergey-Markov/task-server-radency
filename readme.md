1. Для того чтоб отправить новую заметку(POST http://localhost:3001/notes) нужно, отправить объект с полями:
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

2. Для того чтоб изменить заметку(PATCH http://localhost:3001/notes/:id) отправляем объект:
   {
   "content": "sport every day at 01.01.2022",
   }
   - для того чтоб перевести заметку в архив используем:
     {
     "content": "sport every day at 01.01.2022",
     "archived":true
     }
3. Роуты для работы:
   Получить все заметки: GET http://localhost:3001/notes,
   Получить статистику по заметкам: GET http://localhost:3001/notes/stats,
   Получить заметку по id: GET http://localhost:3001/notes/:id,
   Удалить заметку по id: DELETE http://localhost:3001/notes/:id
