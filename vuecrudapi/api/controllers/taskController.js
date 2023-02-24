const mongoose = require('mongoose');
const FormDefault = mongoose.model('FormDefault');

const Formuser = mongoose.model('Formuser');


const list_all_tasks = (req, res) => {

  let formDefaultTasks = [];
  let formUserTasks = [];
  // First, get all documents from the FormDefault collection
  FormDefault.find({}, (err, tasks) => {
    if (err) res.send(err);
    formDefaultTasks = tasks;
    // Once we have the documents from FormDefault, get documents from Formuser
    Formuser.find({}, (err, tasks) => {
      if (err) res.send(err);
      formUserTasks = tasks;
      // Finally, send both arrays in the response
      res.json({ formDefaultTasks, formUserTasks });
    });
  });
};

const create_a_task = (req, res) => {
  const newTask = new Formuser(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });

};

const read_a_task = (req, res,) => {
  // FormDefault.findById(req.params.taskId, (err, task) => {
  //   if (err) res.send(err);
  //   res.json(task)
  // });
  const taskId = req.params.taskId;
  // Determine which model to use based on the task ID
  const TaskModel = taskId.startsWith('default') ? FormDefault : Formuser;
  TaskModel.findById(taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

const update_a_task = (req, res) => {
  // FormDefault.findOneAndUpdate(
  //   { _id: req.params.taskId },
  //   req.body,
  //   { new: true },
  //   (err, task) => {
  //     if (err) res.send(err);
  //     res.json(task);
  //   }
  // );
  const taskId = req.params.taskId;
  const taskData = req.body;
  // Determine which model to use based on the task ID
  const TaskModel = taskId.startsWith('default') ? FormDefault : Formuser;
  TaskModel.findOneAndUpdate(
    { _id: taskId },
    taskData,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

const delete_a_task = (req, res) => {
  // FormDefault.deleteOne({ _id: req.params.taskId }, err => {
  //   if (err) res.send(err);
  //   res.json({
  //     message: 'task successfully deleted',
  //     _id: req.params.taskId
  //   });
  // });
  const taskId = req.params.taskId;
  // Determine which model to use based on the task ID
  const TaskModel = taskId.startsWith('default') ? FormDefault : Formuser;
  TaskModel.deleteOne({ _id: taskId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Form successfully deleted',
      _id: taskId
    });
  });
};

module.exports = {
  list_all_tasks: list_all_tasks,
  create_a_task: create_a_task,
  read_a_task: read_a_task,
  update_a_task: update_a_task,
  delete_a_task: delete_a_task
}