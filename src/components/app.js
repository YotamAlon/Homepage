import React from 'react';
import Header from './Header';

class App extends React.Component {
    state = {
        title: "Anomaly Larp: Welcome All",
        menuItems: []
    }
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        return (
            <div className="App">
            <Header title={this.state.title} />
            </div>
            );
    }
}

export default App;