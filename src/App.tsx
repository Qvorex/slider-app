import React from 'react';
import './App.scss';
import { Body } from './components/body/body';
import { Header } from './components/header/header';

function App() {
  return (
		<div className='app'>
			<Header />
			<Body />
		</div>
  );
}

export default App;
