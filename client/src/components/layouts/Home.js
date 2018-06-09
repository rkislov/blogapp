import React, {Component} from 'react';
import News from '../containers/News';

class Home extends Component {
    render() {
        return (

            <div className="card">
                <div className="card-header h3">Добро пожаловать!!!</div>
                <div className="card-body">
                <div className="list-group">
                    <News />
                </div>
                </div>
            </div>

        )
    }
}

export default Home;
