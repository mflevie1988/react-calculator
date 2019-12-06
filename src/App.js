import React from 'react';
import { Button } from './components/Button/Button.component';
import { Input } from './components/Input/Input.component';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: '' };
	}
	render() {
		const numbers = [
			['7', '8', '9', '÷'],
			['4', '5', '6', 'X'],
			['1', '2', '3', '+'],
			['.', '0', '=', '-']
		];
		return (
			<div className='App'>
				<div className='calc-wrapper'>
					<Input input={this.state.input}></Input>
					{numbers.map((subarray) => (
						<div className='row'>
							{subarray.map((x) => (
								<Button>{x}</Button>
							))}
						</div>
					))}
				</div>
			</div>
		);
	}
}
export default App;
