import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



function NewForm({ errors, touched, values, status }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log('status has changed', status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div className='formik-form'>
            <Form>
                <Field id='name' type='text' placeholder='name' name='name' />
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field id='email' type='email' placeholder='email' name='email' />
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field id='password' type='password' placeholder='password' name='password' />
                </div>
                <label htmlFor='terms-of-service'>
                    <Field name='tos' type='checkbox' checked={values.tos}/>
                    Terms of Service
                </label>
                <br></br>
                <br></br>
                <button type='submit'>Submit</button>
            </Form>
            {users.map(user => (
                <ul key={user.id}>
                    <li>name: {user.name}</li>
                    <li>email: {user.email}</li>
                </ul>
            ))}
        </div>
    );
};

const FormikNewForm = withFormik ({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('wrong email!')
            .required('email is required duh'),
        password: Yup.string()
            .min(6, 'your password is too short, dummy')
            .required('password is required duh'),
        tos: Yup.boolean().oneOf([true], 'must accept terms of service')
    }),

    handleSubmit(values, {resetForm, setStatus, setErrors}) {
        if (values.email === 'eiancarter@gmail.com') {
            setErrors({ email: 'email is taken!'});
        } else {
            axios
                .post('https://reqres.in/api/users', values)
                .then(res => {
                    console.log('success', res);
                    resetForm();
                    setStatus(res.data);
                })
                .catch(err => {
                    console.log(err);
                    setStatus(false);
                });
        }
    }
})(NewForm);

export default FormikNewForm;

