const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoute');
const PORT = 3000;

app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
