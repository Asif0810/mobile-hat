import { error } from 'daisyui/src/colors';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthCotext } from '../../Context/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const { signIn } = useContext(AuthCotext)
    const [loginError, setloginError] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const from = location.state?.from?.pathname || "/";
    const loginHandler = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset()
                navigate(from, { replace: true });
            })
            .catch(error => {

                const errorMessage = error.message;
                setloginError(errorMessage)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(loginHandler)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email', { required: 'email is required' })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password', { required: 'password is required' })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Login;