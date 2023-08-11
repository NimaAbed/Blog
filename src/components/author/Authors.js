import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../../graphQL/queries';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../shared/Loader';


const Authors = () => {
    const { loading, data, error } = useQuery(GET_AUTHORS_INFO)

    if (loading) return <Loader />

    if (error) return <h3>Error...</h3>

    return (
        <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
            {
                data.authors.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <Grid item xs={12} padding={2}>
                            <Link to={`/authors/${item.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                                <Avatar src={item.avatar.url} sx={{ marginLeft: 2 }} />
                                <Typography component="p" variant="p" color="text.primary">{item.name}</Typography>
                            </Link>
                        </Grid>
                        {index !== data.authors.length - 1 && (
                            <Grid item xs={12}>
                                <Divider variant="middle" />
                            </Grid>
                        )}

                    </React.Fragment>
                ))
            }
        </Grid >
    );
};

export default Authors;