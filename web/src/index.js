import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Appmenu from './Appmenu';
import Appstock from './Appstock';
import Apporder from './Apporder';

ReactDOM.render( < App /> , document.getElementById('root'));
ReactDOM.render( < Appmenu /> , document.getElementById('root2'));
ReactDOM.render( < Appstock /> , document.getElementById('root3'));
ReactDOM.render( < Apporder /> , document.getElementById('root4'));