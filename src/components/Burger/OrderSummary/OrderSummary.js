import React, { useEffect } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    useEffect(() => {
        debugger;
        console.log('component updated.')
    });

    useEffect(() => {
        debugger;
        console.log("order summary test");
    }, [props.show]);

    const ingredientsSummary = Object.keys(props.ingredients)
        .map((igKey, index) => {
            debugger;
            return (<li key={index}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <Button btnType={'Success'} clicked={props.continuePurHandler}>Continue</Button>
            <Button btnType={'Danger'} clicked={props.canPurHandler}>Cancel</Button>
        </Aux>
    );
};

export default React.memo(OrderSummary);