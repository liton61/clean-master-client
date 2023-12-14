/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import google from '../../assets/google.png';
import { AuthContext } from '../../authentication/Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
        navigate("/");
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const formInfo = { email, password };
        console.log(formInfo);

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully login !",
                    icon: "success"
                });
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })



        navigate("/");
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleLogin} className="card-body bg-white rounded">
                    <h1 className="text-center text-2xl font-semibold">Login</h1>
                    <div className="form-control w-96">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered focus:outline-none" required />
                    </div>
                    <div className="form-control w-96">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered focus:outline-none" required />
                    </div>
                    <div className="form-control w-96 mt-6">
                        <button className="btn btn-success text-white">Login</button>
                    </div>
                    <div className="my-3 flex justify-center items-center">
                        <img onClick={handleGoogleLogin} className='w-16 h-16 rounded-full cursor-pointer' src={google} alt="" />
                    </div>
                    <p className="text-gray-600 text-sm text-center">Don't have an account? <a href="/register" className="text-success font-medium">Register</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;