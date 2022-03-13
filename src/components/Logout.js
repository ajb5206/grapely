import React from 'react';
import { Button } from 'react-bootstrap';

function Logout() {
	
	return (
		<div>
			<Button variant="link" onClick={handleLogout}></Button>
		</div>
	)
}

export default Logout;
