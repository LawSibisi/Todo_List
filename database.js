const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// MongoDB URI with direct connection (remove the `+srv`)
   const uri = 'mongodb+srv://lawrencesibisi99:fXvEC7Zq4BLdcFPA@todolist.ksme3.mongodb.net/?retryWrites=true&w=majority&appName=TodoList'
// Connect to MongoDB without deprecated options
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Create a Schema for the Todo List
const taskSchema = new mongoose.Schema({
  text: String,
  isCompleted: Boolean
});

// Create a Model from the Schema
const Task = mongoose.model('Task', taskSchema);

// API Endpoints

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

// Add a new task
app.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task({
      text: req.body.text,
      isCompleted: false
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error adding task' });
  }
});

// Update a task (mark as complete or edit text)
app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        text: req.body.text || undefined, // If the text exists, update it
        isCompleted: req.body.isCompleted !== undefined ? req.body.isCompleted : undefined, // If the completion status is provided, update it
      },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
