import {Axios as axios} from "./axios";

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = error => reject(error);
    })
}

export async function isLoggedIn(setUser) {
    try {
        const data = await axios.get('/api/v1/users/isLoggedIn', {withCredentials: true});
        if(data.status === 200) {
            setUser(data.data.data);
        }
    } catch (e) {}
}

export async function handleSignup(e, setMessage, navigate) {
    e.preventDefault();
    const file = await convertToBase64(e.target.files[0]);
    const body = {
        name: e.target.name.value,
        email: e.target.email.value,
        role: e.target.role?.value || 'user',
        password: e.target.password.value,
        passwordConfirm: e.target.passwordConfirm.value,
        photo: file
    };
    try {
    setMessage({text: 'Please wait Signing you up...', color: 'lightgreen', time: -1});
    const data = await axios.post('/api/v1/users/signup', {...body}, {
        headers: {
            contentType: 'multipart/form-data',
            Accept: 'multipart/form-data',
        }
    })
    if(data.status === 201) {
        setMessage({text: 'SignUp successful. You can login now', color: 'lightgreen', time: 2000});
    }
    }
    catch(err) {
        setMessage({test: err.response.data.message, color: 'red', time: 2000});
    }
    navigate('/');
}

export async function handleLogin(e, setUser, setMessage, navigate) {
    e.preventDefault();
    try {
        const body = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        
        setMessage({text: 'Please wait Logging in...', color: 'lightgreen', time: -1})
        const data = await axios.post('/api/v1/users/login', {...body}, {withCredentials: true})
        if(data.status === 200) {
            console.log('login successful')
            setMessage({text: 'Login successful', color: 'lightgreen', time: 2000});
            setUser(data.data.data);
        } else {
            setMessage({text: data.data.message, color: 'red', time: 2000});
        }
    } catch (err) {
        setMessage({test: err.response.data.message, color: 'red', time: 2000});
    }
    navigate('/');
}

export async function handleLogout(setUser, setMessage, navigate) {
    try {
        // const data = await axios.get('http://localhost:4201/api/v1/users/logout');
        setMessage({text: 'Please wait Logging out...', color: 'lightgreen', time: -1})
        const data = await axios.get('/api/v1/users/logout', {withCredentials: true});
        if(data.status === 200) {
            setUser(null);
            setMessage({text: 'Logout Successful', color: 'lightgreen', time: 2000})
        }
    } catch (err) {
        setMessage({test: err.response.data.message, color: 'red', time: 2000});
        console.log(err)
    }
    navigate('/');

}

export async function handleUpdate(e, setMessage, setUser) {
    e.preventDefault();
    try {
        const files = [...e.target?.photo?.files] || null;
        console.log(files[0]);
        const body = {}
        if(e.target.name.value) body.name = e.target.name.value;
        if(e.target.email.value) body.email = e.target.email.value;
        if(files) body.photo = await convertToBase64(files[0]);
        // take file in body
        setMessage({text: 'Updating...', color: 'lightgreen', time: -1})
        const data = await axios.patch('/api/v1/users/updateMe', {...body},
        {
            headers: {
                'Access-Control-Allow-Origin': 'https//localhost:3000'
            },
            withCredentials: true
        })
        if(data.status === 200) {
            setUser(data.data.data)
            setMessage({text: 'Update Successful', color: 'lightgreen', time: 2000});
        }
    } catch(err) {
        setMessage({test: err.response.data.message, color: 'red', time: 2000});
        console.log(err);
    }
}

export async function handlePasswordChange(e, setMessage) {
    e.preventDefault();
    try {
        const body = {}
        if(e.target.password.value) body.password = e.target.password.value;
        if(e.target.newPassword.value) body.newPassword = e.target.newPassword.value;
        if(e.target.passwordConfirm.value) body.passwordConfirm = e.target.passwordConfirm.value;
        // take file in body
        setMessage({text: 'Changing Password...', color: 'lightgreen', time: -1})
        const data = await axios.patch('/api/v1/users/updateMyPassword', {...body}, {
            withCredentials: true
        })
        if(data.status === 200) {
            setMessage({text: 'Password changed Successfully', color: 'lightgreen', time: 2000});
        }
    } catch(err) {
        console.log(err);
        setMessage({test: err.response.data.message, color: 'red', time: 2000});
    }
}

export const getData = async (url, setTours, setMessage, navigate, setError) => {
    try {
        
        setMessage({text: 'Loading...', color: 'lightgreen', time: -1})
        axios.get(url).then(data => {
            setTours(data.data.data);
            setMessage(null);
        })
    } catch(err) {
    console.log(err);
    setMessage({test: err.response.data.message, color: 'red', time: 2000});
    }
}