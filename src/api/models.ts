export interface ApiRecord {
	_id: string;
	__v: number;
}

export interface Task extends ApiRecord {
	name: string;
	active: boolean;
}
