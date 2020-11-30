import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Burger Price: <strong>{props.totalPrice}</strong></p>
        {controls.map(ctrl => (<BuildControl key={ctrl.label} label={ctrl.label}
            addIng={() => props.addIng(ctrl.type)}
            removeIng={() => props.removeIng(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />))}
        <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.purchaseHandler}>Order Now</button>
    </div>
);

export default buildControls;