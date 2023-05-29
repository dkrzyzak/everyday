import 'dayjs/locale/pl';
import dayjs from 'dayjs';
import './app.css';
import App from './App.svelte';

dayjs.locale('pl');

const app = new App({
	target: document.getElementById('app'),
});

export default app;
