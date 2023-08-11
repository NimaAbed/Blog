const validatedForm = (name, email, text) => {
    // console.log({ name, email, text })
    const errors = {}
    if (!name.trim()) {
        errors.name = "یک نام کاربری وارد کنید"
    }

    if (!email.trim()) {
        errors.email = "یک ایمیل وارد کنید"
    } else {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            errors.email = "یک ایمیل معتبر وارد کنید"
        }
    }

    if (!text.trim()) {
        errors.text = "کامنت خود را وارد کنید"
    } else {
        if (text.length <= 2) {
            errors.text = "یک کامنت معتبر وارد کنید"
        }
    }

    return errors
}

export { validatedForm }