import React from 'react';

import './form.styles.scss';

const Form = (props) => {
    return (props.trigger) ?
        <div className="form">
            <div className="pop-up">
                <button className="cancel">Cancel</button>
                { props.children }
            </div>
        </div> : ""
};

export default Form;