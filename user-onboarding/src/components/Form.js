import React from 'react';


export default function Form() {
    return (
        <div className='formik-form'>
            <label>Name
                <input type='text' placeholder='name' />
            </label>
            <label>
                Email
                <input type='text' placeholder='email' />
            </label>
            <label>
                Password
                <input type='text' placeholder='password' />
            </label>
            <label>
                *I have read and understand the Terms of Service*
                <input label='Terms of Service' type='checkbox'/>
            </label>
            <button>Submit</button>
        </div>
    );
};

