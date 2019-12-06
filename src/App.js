import React from 'react';
import { Button } from './components/Button/Button.component';
import { Input } from './components/Input/Input.component';
import { ClearButton } from './components/ClearButton/ClearButton.component';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			numbers: [
				['7', '8', '9', '÷'],
				['4', '5', '6', 'X'],
				['1', '2', '3', '+'],
				['.', '0', '=', '-']
			]
		};
	}

	addToInput = (val) => {
		//console.log(val.target);
		this.setState({ input: this.state.input + val });
	};
	render() {
		return (
			<div className='App'>
				<div className='calc-wrapper'>
					<Input input={this.state.input}></Input>
					{this.state.numbers.map((subarray, idx) => (
						<div key={idx} className='row'>
							{subarray.map((x, subIdx) => (
								<Button
									key={subIdx}
									handleClick={this.addToInput}
								>
									{x}
								</Button>
							))}
						</div>
					))}
					<div className='row'>
						<ClearButton
							handleClear={() => this.setState({ input: '' })}
						>
							Clear
						</ClearButton>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
