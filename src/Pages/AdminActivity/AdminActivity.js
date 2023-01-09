import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthCotext } from '../../Context/AuthProvider';

const AdminActivity = () => {
    const { user } = useContext(AuthCotext)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch('http://localhost:5000/user')
            .then(res => res.json())
    })
    const deleteHandler = (id) => {
        fetch(`http://localhost:5000/delete-user/${id}`, {
            method: 'DELETE',
            headers: {
                email: user?.email
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfull')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold'>Hay !! Admin you have {users.length} users</h1>
            <div className="overflow-x-auto mt-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>N0:</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td className='hidden lg:block'>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.user_category}</td>
                                <td><button onClick={() => deleteHandler(user._id)} className="btn btn-error">delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminActivity;