import React from 'react';
import ReactDOM from 'react-dom';

const demoElement = React.createElement(
    "h1",
    {id:"title",className:"title"},
    "Indepth React| advanced");

const parentDiv = React.createElement(
    "div",
    {id:"parent",className:"parent"},
   [demoElement,demoElement]);

const parentParentElement =React.createElement("div",{
    id:"demoroot"
   },parentDiv)








console.log(parentParentElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentParentElement);