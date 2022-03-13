import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
	const [error, setError] = useState('');
	const { logout } = useAuth();
	const navigate = useNavigate;
	const [loading, setLoading] = useState(false);

	async function handleLogout(event) {
		event.preventDefault()
		

		try {
			setError('')
			setLoading(true)
			await logout()
			navigate("/")
		} catch {
			setError("Failed to log out")
		}
	setLoading(false)
	}

	return (
		<div>
			<div>
				{error && <Alert variant="danger">{error}</Alert>}
				{/* <Button variant="link" onClick={handleLogout}></Button> */}
				{/* <button onClick={handleLogout}></button> */}
			</div>
			<div className="w-100 text-center mt-2">
        <Button  disabled={loading} variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
		</div>
	)
}

export default Logout;
