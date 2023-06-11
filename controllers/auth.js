export const getLoginController = (req, res) => {
    res.render('auth/login')
}

export const postLoginController = (req, res) => {
    const { username, password } = req.body;
    res.locals.formData = req.body; 
    let error;
    if(!username) {
        error = 'username area required!'
    } else if(!password) {
        error = 'password area required!'
    } else if(username != "john" && password != "123") {
        error = "username or password not correct!"
    } else {
        req.session.username = username;
        res.redirect('/');
    }

    res.render('auth/login', {
        error
    })
}

export const logoutController = (req, res) => {
    req.session.destroy()
    res.redirect('/')
}