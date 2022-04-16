import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{
            height: '50px',
            width: '50px',
            margin: '10px auto'
            }}>
              <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;