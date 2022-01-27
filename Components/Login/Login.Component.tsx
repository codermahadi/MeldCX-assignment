import React, {useState} from "react";
import {FaEnvelope} from "react-icons/fa";
import axios, {AxiosResponse} from "axios";
import {Form, Formik} from "formik";
import FormikControl from "../controls/FormikControl";
import * as Yup from "yup";
import {Ilogin} from "../interface/Ilogin";
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";

const LoginComponent = () => {

    const [cookie, setCookie] = useCookies(["user"]);
    const [errorResponse, setErrorResponse] = useState('');
    const router = useRouter();

   /* if (!cookie.user){
        router.push('/login')
    }*/
    const initialValues: Ilogin = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email().required('Email required!'),
        password: Yup.string().min(2).max(10).required('Password required!')
    });

    const onSubmit = async (values: Ilogin, {setSubmitting, resetForm}: any) => {
        await axios.post('http://35.201.2.209:8000/login', values).then((response: AxiosResponse<any>) => {
            setCookie("user", JSON.stringify(response.data), {
                path: "/",
                maxAge: 3600, // Expires after 1hr
                sameSite: true,
            })
            resetForm();
            setErrorResponse('');
            router.push('/');
        }).catch((err: any) => {
            setErrorResponse(err.response.data);
            console.log(err.response.data)
        })
        await setSubmitting(false);
    }


    return (
        <div className="Form_Main">
            <div className="MailForm">
                <div className="mail_form">
                    <h1 className="LogHead">login</h1>
                    {errorResponse === 'Invalid email and password combination' &&
                    <p className="text-danger">{errorResponse}</p>}

                    <Formik initialValues={initialValues}
                            validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({values, errors, handleChange, isSubmitting, isValid,}) => (
                            <Form className="Form">
                                <div className="Input_item">
                                    <div className="icon"><FaEnvelope/></div>
                                    <div className="inputBox">
                                        <FormikControl label={'email'}
                                                       control="input"
                                                       name={'email'}
                                                       id={'email'}
                                                       value={values.email}
                                                       type={'text'}
                                                       placeholder={'Email'}
                                                       className={'form-control'}
                                                       handleChange={handleChange}/>
                                    </div>
                                </div>
                                {errors.email &&
                                <p className="text-danger">
                                    <small><b>{errors.email}</b></small>
                                </p>}
                                <div className="Input_item">
                                    <div className="icon"><FaEnvelope/></div>
                                    <div className="inputBox">
                                        <FormikControl label={'Password'}
                                                       control="input"
                                                       name={'password'}
                                                       id={'password'}
                                                       value={values.password}
                                                       type={'password'}
                                                       placeholder={'Password'}
                                                       className={'form-control'}
                                                       handleChange={handleChange}/>
                                    </div>
                                </div>
                                {errors.password &&
                                <p className="text-danger mb-4">
                                    <small><b>{errors.password}</b></small>
                                </p>}
                                <div className="btnWrap">
                                    <button disabled={isSubmitting || !isValid} type="submit"
                                            className="btn ">{isSubmitting ? 'Processing...' : 'Login'}</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default LoginComponent;