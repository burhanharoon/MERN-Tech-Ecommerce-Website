import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div style={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
            <Spinner animation='border' role='status'
                style={{
                    width: '100px',
                    height: '100px',
                    margin: 'auto',
                    display: 'block'
                }}>
                <span className='sr-only'>Loading...</span>
            </Spinner>
        </div>
    )
}
