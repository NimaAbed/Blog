import React from 'react';
import { GET_POSTS_INFO } from '../../graphQL/queries';
import { useQuery } from '@apollo/client';
import CardEL from '../shared/CardEL';
import { Grid } from '@mui/material';
import Loader from '../shared/Loader';

const Blogs = () => {
    const { loading, data, error } = useQuery(GET_POSTS_INFO)
    console.log(data)

    if (loading) return <Loader />
    if (error) return <h3>Error...</h3>
    return (
        <Grid container spacing={2}>
            {data.posts.map(item => (
                <Grid sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }} item xs={12} sm={6} md={4} key={item.id}>
                    <CardEL {...item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Blogs;