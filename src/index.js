import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/bootstrap.css';
import './assets/css/colors.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import './assets/style.css';
import App from './App';
import { AppProvider } from './contexts/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<AppProvider>
				<App />
			</AppProvider>
		</React.StrictMode>
	</BrowserRouter>
);