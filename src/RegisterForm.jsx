import React, { useRef, useState } from "react";
import Button from "./Button";
import "./registerForm.css";

function RegisterForm({ dialogRef, onRegisterSuccess }) {

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const [interest, setInterest] = useState('');
    const [otherDetails, setOtherDetails] = useState('');

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
        if (e.target.checked) {
            setConfirmEmail(email);
            setConfirmEmailError("");
        } else {
            setConfirmEmail("");
        }
    };

    const validateFields = () => {
        const errors = {};

        if (!username) {
            errors.nameError = "Username must be filled out.";
        }

        if (!email) {
            errors.emailError = "Email must be filled out.";
        }

        if (confirmEmail !== email) {
            errors.confirmEmailError = "Confirm Email must match the Email above.";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateFields();
        setNameError(validationErrors.nameError || "");
        setEmailError(validationErrors.emailError || "");
        setConfirmEmailError(validationErrors.confirmEmailError || "");

        const hasErrors = validationErrors.nameError || validationErrors.emailError || validationErrors.confirmEmailError || validationErrors.interestError;

        if (hasErrors) {
            return;
        }

        dialogRef.current.close();
        onRegisterSuccess(username);
    };

    return (
        <form className="register" onSubmit={handleSubmit}>
            <label htmlFor={'${id}-username'} className="register__username-label" >Username (*Required):</label>
            <input
                id={'${id}-username'}
                name="username"
                type="text"
                className="register__username"
                placeholder="Enter your full name"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                    validateName(e.target.value);
                }}
            />
            {nameError && <div className="input-error">{nameError}</div>}

            <label htmlFor={'${id}-email'} className="register__email-label" >Email (*Required):</label>
            <input
                id={'${id}-email'}
                name="email"
                type="text"
                className="register__email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                    if (isChecked) {
                        setConfirmEmail(e.target.value);
                    }
                    validateConfirmEmail(confirmEmail);

                }}
            />
            {emailError && <div className="input-error">{emailError}</div>}

            <label htmlFor={'${id}-confirm'} className="register__confirm-label" >Confirm Email:</label>
            <input
                id={'${id}-confirm'}
                name="confirm"
                type="text"
                className="register__confirm"
                placeholder="Re-enter the email above"
                value={confirmEmail}
                onChange={(e) => {
                    setConfirmEmail(e.target.value);
                    validateConfirmEmail(e.target.value);
                }}
            />

            <fieldset className="register__auto-fill-set">
                <input
                    id={'${id}-auto-fill'}
                    name="auto-fill"
                    type="checkbox"
                    className="register__auto-fill"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor={'${id}-auto-fill'} className="register__auto-fill-label" >Autofill based on the email address entered above.</label>
            </fieldset>
            {confirmEmailError && <div className="input-error">{confirmEmailError}</div>}


            <label htmlFor={'${id}-interest'} className="register__interest-label">Interest Area in Panda Conservation:</label>
            <select
                name="interest"
                id={'${id}-interest'}
                className="register__interest-options"
                value={interest}
                onChange={(e) => {
                    setInterest(e.target.value);
                }}>
                <option disabled value="">Please select</option>
                <option value="donations">Donations</option>
                <option value="volunteer">Volunteer Service</option>
                <option value="spreading">Spreading Knowledge</option>
                <option value="others">Others</option>
            </select>

            {interest === 'others' && (
                <form className="other-details">
                    <label htmlFor="other-details" className="other-details__label">Please specify your interest area:</label>
                    <input
                        id="other-details"
                        name={'${id}-other-datails'}
                        type="text"
                        className="other-details__text"
                        value={otherDetails}
                        onChange={(e) => {
                            setOtherDetails(e.target.value);
                        }}
                        placeholder="Enter additional interests"
                    />
                </form>
            )}

            <Button
                className="submit-button"
                type="submit"
                visual="button"
                onClick={handleSubmit}
            >
                Submit
            </Button>

        </form>
    );
}

export default RegisterForm;
