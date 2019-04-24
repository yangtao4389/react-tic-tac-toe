import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


// 3个模块：Square 代表<button> Board 代表9个Square Game代表其他
class Square extends React.Component {
    render() {
        return (
            <button className="square">{this.props.value}</button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }
}

