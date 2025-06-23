// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/list', taskController.getAllTasks);               
router.get('/:id', taskController.getTask);               // GET /api/tasks/view/:id
router.post('/post', taskController.createTask);             // POST /api/tasks/create
router.put('/:id', taskController.updateTask);          // PUT /api/tasks/update/:id
router.delete('/:id', taskController.deleteTask);        // DELETE /api/tasks/delete:id

module.exports = router;
