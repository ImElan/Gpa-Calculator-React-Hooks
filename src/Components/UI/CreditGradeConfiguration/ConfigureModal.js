import React from 'react';
import ConfigForm from './ConfigForm';

import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

function ConfigureModal(props) {
	const { show, closeHandler, saveHandler, useDefaultHandler } = props;
	return (
		<Modal centered show={show} onHide={closeHandler} backdrop='static' keyboard={false}>
			<Modal.Header>
				<Modal.Title>Configure Your Credit Grade System</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='d-flex align-items-center mb-3'>
					Use the default Value ?
					<OverlayTrigger
						placement='bottom'
						overlay={
							<Tooltip>
								<ul
									style={{
										listStyle: 'none',
										padding: '0 20px',
									}}
								>
									<li>O - 10</li>
									<li>A+ - 9</li>
									<li>A - 8</li>
									<li>B+ - 7</li>
									<li>B - 6</li>
								</ul>
							</Tooltip>
						}
					>
						<Button variant='link' onClick={useDefaultHandler}>
							Use Default
						</Button>
					</OverlayTrigger>
				</div>
				<ConfigForm />
			</Modal.Body>
			<Modal.Footer>
				<Button variant='primary' onClick={saveHandler}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ConfigureModal;
