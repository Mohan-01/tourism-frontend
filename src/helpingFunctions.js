import axios from "axios";

export async function handleSignup(e, setMessage, navigate) {
    e.preventDefault();
    const body = {
        name: e.target.name.value,
        email: e.target.email.value,
        role: e.target.role?.value || 'user',
        password: e.target.password.value,
        passwordConfirm: e.target.passwordConfirm.value
    };
    try {
    // const data = await axios.post('http://localhost:4201/api/v1/users/signup', {...body}, {
    const data = await axios.post('https://tourism-backend-ce6w.onrender.com/api/v1/users/signup', {...body}, {
        headers: {
            contentType: 'multipart/form-data',
            Accept: 'multipart/form-data',
        }
    })
    if(data.status === 201) {
        setMessage('SignUp successful. You can login now')
    }
    }
    catch(e) {
        setMessage(e.response.data);
    }
    navigate('/');
}

export async function handleLogin(e, setUser, setMessage, setColor, navigate, cookies) {
    e.preventDefault();
    const body = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    // const data = await axios.post('http://localhost:4201/api/v1/users//login', {...body}, {
    const data = await axios.post('https://tourism-backend-ce6w.onrender.com/api/v1/users//login', {...body}, {
        headers: {
            contentType: 'application/json',
            Accept: 'application/json',
        },
    })
    if(data.status === 200) {
        setColor('lightgreen');
        setMessage('Login successful');
        console.log(data.data.data)
        setUser(data.data.data);
        cookies.set('user', data.data.data, {path: '/', secure: true, sameSite: 'none', expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)});
    } else {
        setColor('red');
        setMessage(data.data.message);
    }
    navigate('/');
}

export async function handleLogout(setUser, setMessage, navigate, cookies) {
    try {
        // const data = await axios.get('http://localhost:4201/api/v1/users/logout');
        const data = await axios.get('https://tourism-backend-ce6w.onrender.com/api/v1/users/logout');
        if(data.status === 200) {
            setUser(null);
            setMessage('Logout Successful')
            cookies.remove('user')
        }
    } catch (e) {
        setMessage('Error');
        console.log(e)
    }
    navigate('/');

}

export async function handleUpdate(e, setMessage) {
    try {
        const body = {}
        if(e.target.password.value) body.password = e.target.password.value;
        if(e.target.newPassword.value) body.newPassword = e.target.newPassword.value;
        if(e.target.newPassword.value) body.newPassword = e.target.newPassword.value;
        // take file in body
        // const data = await axios.patch('http://localhost:4201/api/v1/users/updateMe', {...body}, {
        const data = await axios.patch('https://tourism-backend-ce6w.onrender.com/api/v1/users/updateMe', {...body}, {
            headers: {
                contentType: 'multipart/form-data',
                Accept: 'multipart/form-data'
            },
            withCredentials: true
        })
        if(data.status === 200) {
            setMessage('Update Successful');
        }
    } catch(err) {
        console.log(err);
    }
}

export async function handlePasswordChange(e, setMessage) {
    try {
        const body = {}
        if(e.target.password.value) body.password = e.target.password.value;
        if(e.target.newPassword.value) body.newPassword = e.target.newPassword.value;
        if(e.target.confirmPassword.value) body.confirmPassword = e.target.confirmPassword.value;
        // take file in body
        // const data = await axios.patch('http://localhost:4201/api/v1/users/updateMyPassword', {...body}, {
        const data = await axios.patch('https://tourism-backend-ce6w.onrender.com/api/v1/users/updateMyPassword', {...body}, {
            headers: {
                contentType: 'multipart/form-data',
                Accept: 'multipart/form-data'
            },
            withCredentials: true
        })
        if(data.status === 200) {
            setMessage('Update Successful');
        }
    } catch(err) {
        console.log(err);
    }
}