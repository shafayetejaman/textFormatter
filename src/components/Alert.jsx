import React from 'react';

function Alert(props)
{
    return (
        <div style={{ height: '20px' }}>
            {props.alert && 
                <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`}
                    role="alert">

                    <span className='fs-5'>
                        <strong>
                            <i className="fa-regular fa-circle-check"></i> {props.alert.alertType}!
                        </strong> {props.alert.text}
                    </span>
                </div>
            }
        </div>
    );
}

export default Alert;