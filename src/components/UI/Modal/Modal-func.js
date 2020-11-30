import React, { useEffect } from 'react';
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from '../../../hoc/Aux';

const Modal = (props) => {

    useEffect(() => {
        debugger;
        console.log("test log only props show");
    }, [props.show]);
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
};

//export default React.memo(Modal);