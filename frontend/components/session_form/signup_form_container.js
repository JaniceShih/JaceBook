import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions"
import SignupFrom from "./signup_form";
import { closeModal } from "../../actions/modal_actions";

const mstp = (state) => {
    return ({
        errors: state.errors.session
    });
};

const mdtp = (dispatch) => {
    return {
        signup: (formUser) => dispatch(signup(formUser)),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mstp, mdtp)(SignupFrom);