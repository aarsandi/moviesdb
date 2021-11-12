import React from 'react'
import {useHistory} from 'react-router-dom'

function NotFound() {
    const history = useHistory()
    
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0, right: 0}}>
            <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
                <div className="col-12 text-center">
                    <h1 style={{
                        fontSize: '60px',
                        fontWeight: '600',
                        letterSpacing: '1.3px'
                    }}>404!</h1>
                    <p style={{
                        letterSpacing: "1.1px"
                    }}>Page not found!</p>
                    <button className="btn" onClick={() => history.push('/')}>back to home</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
