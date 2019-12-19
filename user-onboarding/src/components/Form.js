import React from 'react';
import { withFormik, Form, Field } from 'formik';


export default function Form() {

    return (
        <div className='formik-form'>
            <Form>
                <label>Name
                    <input type='text' placeholder='name' name='name' onChange={event => handleChange(event)}/>
                <label>
                    Email
                    <input type='text' placeholder='email' name='email' onChange={event => handleChange(event)}/>
                </label>
                <label>
                    Password
                    <input type='text' placeholder='password' name='password' onChange={event => handleChange(event)}/>
                </label>
                <label>
                    *I have read and understand the Terms of Service*
                    <input label='Terms of Service' type='checkbox'/>
                </label>
                <button>Submit</button>
            </Form>
        </div>
    );
};

