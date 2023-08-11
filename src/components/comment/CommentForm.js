import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SEND_COMMENT } from '../../graphQL/mutations';
import { validatedForm } from '../helper/helper';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const CommentForm = ({ slug }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [pressed, setPressed] = useState(false)
    const [errorForm, setErrorForm] = useState({})
    const [touch, setTouch] = useState({
        name: false,
        email: false,
        text: false
    })

    const [sendCommet, { loading, data, error }] = useMutation(SEND_COMMENT, {
        variables: { name, email, text, slug }
    })

    useEffect(() => {
        setErrorForm(validatedForm(name, email, text))
    }, [name, email, text])


    const submitHandler = () => {
        setTouch({
            name: true,
            email: true,
            text: true
        })
        console.log(errorForm)
        if (Object.keys(errorForm).length < 1) {
            sendCommet()
            setPressed(true)
            setTouch({
                name: false,
                email: false,
                text: false
            })
            setText("")
        } else {
            toast.warn("لطفا فرم را کامل کنید", {
                position: "top-center"
            })
        }
    }

    if (data && pressed) {
        toast.success("کامنت ارسال و در حال تایید می باشد", {
            position: "top-center"
        })
        setPressed(false)
    }

    return (
        <CacheProvider value={cacheRtl}>
            <Grid container sx={{ mt: 2, boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" }}>
                <Grid item xs={12} m={2}>
                    <Typography component="p" variant="h6" color="primary" fontWeight={700}>ارسال کامنت</Typography>
                </Grid>
                <Grid item xs={12} m={2}>
                    {errorForm.name && touch.name ? <TextField value={name} onChange={(e) => setName(e.target.value)} error label="نام کاربری" helperText={errorForm.name} fullWidth />
                        : <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="نام کاربری" variant="outlined" fullWidth />}
                </Grid>
                <Grid item xs={12} m={2}>
                    {errorForm.email && touch.email ? <TextField value={email} onChange={(e) => setEmail(e.target.value)} error label="ایمیل" helperText={errorForm.email} fullWidth />
                        : <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="ایمیل" variant="outlined" fullWidth />}
                </Grid>
                <Grid item xs={12} m={2}>
                    {errorForm.text && touch.text ? <TextField value={text} onChange={(e) => setText(e.target.value)} error label="کامنت" multiline minRows={4} helperText={errorForm.text} fullWidth />
                        : <TextField value={text} onChange={(e) => setText(e.target.value)} id="outlined-basic" label="کامنت" variant="outlined" multiline minRows={4} fullWidth />}
                </Grid>
                <Grid item xs={12} m={2}>

                </Grid>
                <Grid item xs={12} m={2}>
                    {loading ? <Button variant='contained' disabled>در حال ارسال...</Button>
                        : <Button variant="contained" onClick={submitHandler}>ارسال</Button>}
                </Grid>
                <ToastContainer />
            </Grid>
        </CacheProvider>
    );
};

export default CommentForm;