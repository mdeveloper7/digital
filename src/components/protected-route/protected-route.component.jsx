/** External libs */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import history from '/utils/history';

/** @component ProtectedRoute
 * @returns {React.ReactNode}
 */
const ProtectedRoute = ({ children }) => {
    const [isVerified, setIsVerified] = useState(false)
    const { authUser } = useSelector(state => state.user)
    
    async function verify() {
        if (!authUser) {
            history.replace('/auth');
            return;
        }

        setIsVerified(true);
    }

    useEffect(() => {
        verify();
    }, [])

    if (isVerified) {
        return children
    }
    else return null;
}

export default ProtectedRoute;
