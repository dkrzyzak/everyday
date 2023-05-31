import axios from 'axios';

export default axios.create({
	baseURL: 'http://192.168.0.42:3030/api',
});
