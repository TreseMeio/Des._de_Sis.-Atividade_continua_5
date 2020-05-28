const checkForm = () => {
    let valid = true;
    const form = document.forms["contato_form"]
    const fields = ['firstname', 'lastname', 'subject', 'description'];
    fields.map(field => {
        const value = form[field].value;
        valid = value !== null && value !== undefined && value !== '';
        console.log(value);
    });
    if(!valid){
        const message = document.getElementById('invalidFormMessage').style.visibility = "visible";
    }
    return valid;
}