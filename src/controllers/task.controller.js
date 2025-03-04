import {
  createTaskService,
  getTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService,
} from "../services/task.service.js";
import { statusCodes } from "../utils/status.js";
import { messages } from "../utils/messages.js";

export const createTask = async (req, res) => {
  try {
    const task = await createTaskService(req.body);
    res.status(statusCodes.created).json(task);
  } catch (error) {
    res.status(statusCodes.serverError).json({ error: messages.serverError });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { search, filter, page, limit } = req.query;
    const tasks = await getTasksService(search, filter, page, limit);
    res.status(statusCodes.success).json(tasks);
  } catch (error) {
    console.log(error);
    
    res.status(statusCodes.serverError).json({ error: messages.serverError });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await getTaskByIdService(req.params.id);
    if (!task) {
      return res.status(statusCodes.notFound).json({ error: messages.taskNotFound });
    }
    res.status(statusCodes.success).json(task);
  } catch (error) {
    res.status(statusCodes.serverError).json({ error: messages.serverError });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await updateTaskService(req.params.id, req.body);
    if (!task) {
      return res.status(statusCodes.notFound).json({ error: messages.taskNotFound });
    }
    res.status(statusCodes.success).json(task);
  } catch (error) {
    res.status(statusCodes.serverError).json({ error: messages.serverError });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await deleteTaskService(req.params.id);
    if (!task) {
      return res.status(statusCodes.notFound).json({ error: messages.taskNotFound });
    }
    res.status(statusCodes.success).json({ message: messages.taskDeleted });
  } catch (error) {
    res.status(statusCodes.serverError).json({ error: messages.serverError });
  }
};
