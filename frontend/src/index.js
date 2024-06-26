import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const url = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21210d65a1msha43ea28b86b0a5ap190e59jsn2385fb4b68f2',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


