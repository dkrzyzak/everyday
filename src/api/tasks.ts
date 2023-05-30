import axios from '../axios';

export const getAllTasks = async () => {
	try {
		const { data } = await axios.get('/tasks');
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
		console.log(e);
		return false;
	}
};
