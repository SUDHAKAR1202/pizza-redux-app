export const validateSignup = (form) => {

    let errors = {};

    if(!form.name.trim()) {
        errors.name = "Name is required";
    }

    if(!form.email.includes("@")) {
        errors.email = "Valid email required";
    }

    if(form.phone.length !== 10) {
        errors.phone = "Phone must be 10 digits";
    }

    if(form.password.length < 6) {
        errors.password = "Minimum 6 characters";
    }

    if(form.password !== form.confirmPassword) {
        errors.confirmPassword = "Passwords do not match"
    }

    if (!form.gender) {
        errors.gender = "Select gender";
    }

    if (!form.terms) {
        errors.terms = "Accept terms"
    }
    return errors;

}