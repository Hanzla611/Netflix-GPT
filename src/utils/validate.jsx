export const checkValidData = (email, password) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/.test(password)

    if(!isEmail) return "Email ID is not valid";
    if(!isPassword) return "Password is not valid";

    return null
}