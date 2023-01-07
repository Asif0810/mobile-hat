import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthCotext } from '../../Context/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const { signUp, updateuser } = useContext(AuthCotext);
    const [error, seterror] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const registerHandler = (data) => {
        console.log(data)
        signUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const name = {
                    displayName: data.username
                }
                updateuser(name)
                    .then(() => {
                        saveUser(data.username, data.email, data.select)
                    })
                    .catch(error => console.log(error))
                navigate('/')
                toast.success('user created successful')
            })
            .catch(error => {
                seterror(error)
                const errorMessage = error.message;
                console.log(errorMessage)
            })

        const saveUser = (name, email, user_category) => {
            const user = { name, email, user_category }
            fetch('http://localhost:5000/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(registerHandler)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input {...register("username", { required: 'name is required' })} type="text" placeholder="user name" className="input input-bordered" />
                            {errors.username && <p className='text-red-500'>{errors.username?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: 'email is required' })} type="text" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">are you seller or buyer</span>
                            </label>
                            <select {...register('select', { required: 'are you buyer or seller' })} className="input-bordered select w-full max-w-xs">

                                <option value={'seller'}>Seller</option>
                                <option selected value={'buyer'}>Buyer</option>

                            </select>
                        </div>
                        {errors.select && <p className='text-red-500'>{errors.select?.message}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register('password', { required: 'password is required' })} placeholder="password" className="input input-bordered" />
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        </div>
                        {
                            error && <p className='text-red-500'>{error}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;