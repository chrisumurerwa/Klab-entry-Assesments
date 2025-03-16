import React, { useState } from 'react';
import '../Styles/Users.css';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'Admin' },
        { id: 2, name: 'Jane Smith', role: 'Veterinary' },
        { id: 3, name: 'Alice Johnson', role: 'Customer' },
    ]);
    
    return (
        <div className="users-container">
            <h2 className="page-title">User Management</h2>
            <div className="actions-row">
                <input type="text" className="search-input" placeholder="Search users..." />
                <button className="add-user-btn">+ Add User</button>
            </div>
            <div className="table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;