import React, {Component} from 'react';
import Toggle from './components/Toggle/Toggle';
import Basic from './components/Basic/Basic';
import Professional from './components/Professional/Professional';
import Master from './components/Master/Master';
import './App.css';

class App extends Component {
	state = {
		annually: true,
		price: {
			basic: 199.99,
			professional: 249.99,
			master: 399.99
		}
	}

	toggleSwitchHandler = () => {
		this.setState({ annually: !this.state.annually}, () => {
			this.priceAdjuster();
		});
	}

	priceAdjuster = () => {
		if (this.state.annually) {
			this.setState({
				price: {
					basic: 199.99,
					professional: 249.99,
					master: 399.99
				}
			})
		} else {
			this.setState({
				price: {
					basic: 19.99,
					professional: 24.99,
					master: 39.99
				}
			})
		}
	}

  render() {
		return (
			<>
				<Toggle toggle={this.toggleSwitchHandler} />
					<Basic price={this.state.price.basic} />
					<Professional price={this.state.price.professional} />
					<Master price={this.state.price.master} />
			</>
		);
	}
}

export default App;
