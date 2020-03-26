import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Edituser = (route) => {
    let history = useHistory();
    const { users, editUser } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ id: null, name: '', job: 'leader', email: '' , last_name: '', avatar: '' });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(us => us.id === parseInt(userId));
        setSeletedUser(selectedUser);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editUser(selectedUser);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedUser({ ...selectedUser, [userKey]: value })

    if (!selectedUser || !selectedUser.id) {
        return <div>No selescted user</div>
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name of user
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last_name">
                            Last Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.last_name} onChange={(e) => handleOnChange('last_name', e.target.value)} type="text" placeholder="Enter Last Name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="job">
                            Job
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.job} onChange={(e) => handleOnChange('job', e.target.value)} type="text" placeholder="Enter job" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.email} onChange={(e) => handleOnChange('email', e.target.value)} type="text" placeholder="Enter email" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="avatar">
                            Avatar
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.avatar} onChange={(e) => handleOnChange('avatar', e.target.value)} type="text" placeholder="Enter avatar" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit User
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}