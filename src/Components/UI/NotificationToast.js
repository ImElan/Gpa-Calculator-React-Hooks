import React from 'react';

import { Toast } from 'react-bootstrap';

function NotificationToast(props) {
	const { show, message, closeToast } = props;
	return (
		<Toast
			onClose={closeToast}
			show={show}
			style={{
				position: 'absolute',
				top: '80px',
				right: '30px',
				width: '300px',
			}}
			delay={3000}
			autohide
		>
			<Toast.Header
				className='py-3 d-flex align-items-center'
				style={{
					width: '100%',
				}}
			>
				<h5 className='mr-auto my-0'>Gpa Calculator</h5>
			</Toast.Header>
			<Toast.Body>{message}</Toast.Body>
		</Toast>
	);
}

export default NotificationToast;
