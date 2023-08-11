import { useQuery } from '@apollo/client';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { GET_POSTS_INFO } from '../../graphQL/queries';
import Loader from '../shared/Loader';
import CardEL from '../shared/CardEL';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';

const BlogsPage = () => {

    const { loading, data, error } = useQuery(GET_POSTS_INFO)

    const navigate = useNavigate()

    console.log(data)
    if (loading) return <Loader />

    return (
        <Container maxWidth="lg">
            <Grid container mt={10} spacing={2}>
                <Grid item xs={12}>
                    <Box component="div" display="flex" justifyContent="space-between">
                        <Typography component="h2" variant="h4" fontWeight={700} color="primary">مقالات</Typography>
                        <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
                    </Box>
                </Grid>
                {data.posts.map(item => (
                    <Grid sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }} item xs={12} sm={6} md={4} key={item.id}> <CardEL {...item} /> </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BlogsPage;