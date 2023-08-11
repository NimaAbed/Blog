import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POST_COMMENTS } from '../../graphQL/queries';
import { Avatar, Box, Grid, Typography } from '@mui/material';

const Comments = ({ slug }) => {

    const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
        variables: { slug }
    })

    console.log(data)
    if (loading) return null
    return (
        <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", mt: 2, p: 2 }}>
            <Grid item xs={12}>
                <Typography component="p" variant="h6" fontWeight={700} color="primary">کامنت ها</Typography>
            </Grid>
            <Grid item xs={12}>
                {data.comments.map(item => (
                    <Grid item sx={{ border: "1px solid silver", p: 2, m: 2, borderRadius: 3 }}>
                        <Box component="div" mb={2} display="flex" alignItems="center">
                            <Avatar sx={{ marginLeft: 1 }}>{item.name[0]}</Avatar>
                            <Typography component="p" variant="p" fontWeight={700}>{item.name}</Typography>
                        </Box>
                        <Typography>{item.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Comments;