import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredients/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return (<BurgerIngredient key={igKey + i} type={igKey} />);
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        });
    //console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger} >
            <BurgerIngredient type="burger-top" />
            {transformedIngredients}
            <BurgerIngredient type="burger-bottom" />
        </div>
    );
}
export default burger;