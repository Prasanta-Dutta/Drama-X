export const useFormValidation = (name, email, password, isLogIn) => {
    if (isLogIn) {
        if (!email || !email.includes("@")) return { validationStatus: false, errorMessage: "Enter valid mail !" };
        if (!password) return { validationStatus: false, errorMessage: "Enter valid password !" };
        return { validationStatus: true, errorMessage: null };
    }
    if (!name) return { validationStatus: false, errorMessage: "Enter valid name !" };
    if (!email || !email.includes("@")) return { validationStatus: false, errorMessage: "Enter valid mail !" };
    if (!password) return { validationStatus: false, errorMessage: "Enter valid password !" };
    return { validationStatus: true, errorMessage: null };
};