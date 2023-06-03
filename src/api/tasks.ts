import axios from '../axios';
import type { Task } from './models';

export const getAllTasks = async () => {
	try {
		const { data } = await axios.get<Task[]>('/tasks');
		return data;
	} catch {
		return [];
	}
};

export const addNewTask = async (taskName: string) => {
	try {
		const { status } = await axios.post('/tasks', { taskName });

		if (status === 200) {
			return true;
		}

		return false;
	} catch (e) {
		console.log(e?.response?.data);
		return false;
	}
};

// export const updateTask = async () => {

// }

export const removeTask = async (id: string) => {
	try {
		const { status } = await axios.delete(`/tasks/${id}`);

		return status === 200;
	} catch (e) {
		console.log(e?.response?.data);
		return false;
	}
};
