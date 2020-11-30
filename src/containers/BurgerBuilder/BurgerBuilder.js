import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

const BURGER_BASE_PRICE = 4;

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: BURGER_BASE_PRICE,
        purchaseable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    cancelPurchaseHandler = () => {
        debugger;
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        debugger;
        alert('You continue!');
    }

    addIngredientHandler = (ingredientType) => {
        //debugger;
        let oldTotalPrice = this.state.totalPrice;
        let newTotalPrice = oldTotalPrice + INGREDIENT_PRICE[ingredientType];
        let newIngredients = { ...this.state.ingredients };
        newIngredients[ingredientType] += 1;
        this.setState({
            totalPrice: this.round(newTotalPrice, 3),
            ingredients: newIngredients
        });
        this.checkPurchaseable(newIngredients);
    }

    removeIngredientHandler = (ingredientType) => {
        debugger;
        if (this.state.ingredients[ingredientType] > 0) {
            let oldTotalPrice = this.state.totalPrice;
            let newTotalPrice = oldTotalPrice - INGREDIENT_PRICE[ingredientType];
            let newIngredients = { ...this.state.ingredients };
            newIngredients[ingredientType] -= 1;
            this.setState({
                totalPrice: this.round(newTotalPrice, 3),
                ingredients: newIngredients
            });
            this.checkPurchaseable(newIngredients);
        }
    }

    checkPurchaseable = (newIngredients) => {
        const ingredients = { ...newIngredients }
        const sum = Object.keys(ingredients).map(igKey => ingredients[igKey]).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({ purchaseable: sum > 0 });
    };

    round = (value, decimals) => {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    render() {
        //debugger;
        let disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    price={this.state.totalPrice.toFixed(2)}
                    canPurHandler={this.cancelPurchaseHandler} 
                    continuePurHandler={this.purchaseContinueHandler}
                    show={this.state.purchasing}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} ></Burger>
                <BuildControls
                    addIng={this.addIngredientHandler}
                    removeIng={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    purchaseHandler={this.purchaseHandler}
                />
            </Aux>
        );
    }
};

export default BurgerBuilder;