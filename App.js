import React from 'react';
import ThemeProvider from '~/theme';
import Router from './src/app/router';

export default function App() {
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
}
