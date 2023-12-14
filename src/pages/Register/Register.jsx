import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { createUser, profile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const formInfo = { name, email, password, photo };
        console.log(formInfo);

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                profile(name, photo);
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully register !",
                    icon: "success"
                });
                // form.reset();
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleRegister} className="card-body bg-white rounded">
                    <h1 className="text-center text-2xl font-semibold">Register</h1>
                    <div className="form-control w-96">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Name" className="input input-bordered focus:outline-none" required />
                    </div>
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
                    <div className="form-control w-96">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered focus:outline-none" required />
                    </div>
                    <div className="form-control w-96 mt-6">
                        <button className="btn btn-success text-white">Register</button>
                    </div>
                    <p className="text-gray-600 text-sm text-center">Already have an account? <a href="/login" className="text-success font-medium">Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Register;