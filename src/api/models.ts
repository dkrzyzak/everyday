export interface ApiRecord {
	_id?: string;
}

export interface Task extends ApiRecord {
	name: string;
	active: boolean;
}
