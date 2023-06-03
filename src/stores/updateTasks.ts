import { writable } from 'svelte/store';
import type { Task } from '../api/models';

export interface UpdateTasksStore {
	name: Record<string, string>; // id: newName
	active: Record<string, boolean>; // id: newActive
}

const defaultStore: UpdateTasksStore = {
	name: {},
	active: {},
};

export const updateTasksStore = writable<UpdateTasksStore>(defaultStore);

export const resetTaskUpdateStore = () => {
	updateTasksStore.set(defaultStore);
};

export const toggleActiveState = (id: string, currentActive: boolean) =>
	updateTasksStore.update((currentState) => {
		const newActiveState = { ...currentState.active };

		if (newActiveState.hasOwnProperty(id)) {
			delete newActiveState[id];
		} else {
			newActiveState[id] = currentActive;
		}

		return {
			...currentState,
			active: newActiveState,
		};
	});

export const updateName = (id: string, initialName: string, currentName: string) =>
	updateTasksStore.update((currentState) => {
		const newNamesState = { ...currentState.name };
		const noDiff = initialName === currentName;

		if (newNamesState.hasOwnProperty(id)) {
			if (noDiff) {
				delete newNamesState[id];
			} else if (newNamesState[id] !== currentName) {
				newNamesState[id] = currentName;
			} else {
				return currentState;
			}
		} else {
			if (noDiff) {
				return currentState;
			} else {
				newNamesState[id] = currentName;
			}
		}

		return {
			...currentState,
			name: newNamesState,
		};
	});

export const haveUpdates = (store?: UpdateTasksStore) => {
	if (!store) {
		return false;
	}

	if (Object.keys(store.active).length === 0 && Object.keys(store.name).length === 0) {
		return false;
	}

	return true;
};

type MergedTaskUpdates = Record<string, Partial<Task>>;
export const mergeChanges = (store: UpdateTasksStore): MergedTaskUpdates => {
	const merged: MergedTaskUpdates = {};

	Object.entries(store.active).forEach(([id, active]) => {
		merged[id] = { active };
	});

	Object.entries(store.name).forEach(([id, name]) => {
		if (merged.hasOwnProperty(id)) {
			merged[id].name = name;
		} else {
			merged[id] = { name };
		}
	});

	return merged;
};
