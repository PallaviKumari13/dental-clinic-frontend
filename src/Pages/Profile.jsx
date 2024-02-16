import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/api/users/${userId}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    return (
        <div>
            <h2>Profile</h2>
            {loading ? (
                <p>Loading...</p>
            ) : userData ? (
                <div>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone Number:</strong> {userData.phone}</p>
                    {/* Add more user details here */}
                </div>
            ) : (
                <p>No user data found</p>
            )}
        </div>
    );
}

export default ProfilePage;
