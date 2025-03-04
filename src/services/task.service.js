import Task from "../models/task.model.js";

export const createTaskService = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

export const getTasksService = async (search, filter, page = 1, limit = 10) => {
  const match = {};
  if (search) {
    match.$text = { $search: search };
  }
  if (filter) {
    Object.assign(match, filter);
  }

  const [result] = await Task.aggregate([
    { $match: match },
    {
      $facet: {
        data: [
          { $skip: (page - 1) * limit },
          { $limit: limit }
        ],
        total: [
          { $count: "count" }
        ]
      }
    }
  ]);

  const total = result.total.length > 0 ? result.total[0].count : 0;

  return { tasks: result.data, total, page, pages: Math.ceil(total / limit) };
};

export const getTaskByIdService = async (taskId) => {
  return await Task.findById(taskId);
};

export const updateTaskService = async (taskId, taskData) => {
  return await Task.findByIdAndUpdate(taskId, taskData, { new: true });
};

export const deleteTaskService = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};
