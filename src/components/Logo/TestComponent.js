import React from 'react';

function TestComponent(props) {
    debugger;
    console.log("test log");
    return (<h1>Hi, this is test component {props.name}</h1>);
}

export default TestComponent;