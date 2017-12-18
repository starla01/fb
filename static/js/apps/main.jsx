import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import ItemList from './components/item.jsx';
class AppContainer extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){
        return (
            <div>
                <Header />,
                <ItemList />
            </div>
        )
    }
}
ReactDOM.render( <AppContainer />, document.getElementById('app'));
