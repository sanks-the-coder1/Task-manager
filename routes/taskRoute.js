// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/list', taskController.getAllTasks);               
router.get('/view/:id', taskController.getTask);               // GET /api/tasks/view/:id
router.post('/create', taskController.createTask);             // POST /api/tasks/create
router.put('/update/:id', taskController.updateTask);          // PUT /api/tasks/update/:id
router.delete('/delete/:id', taskController.deleteTask);        // DELETE /api/tasks/delete:id

module.exports = router;
