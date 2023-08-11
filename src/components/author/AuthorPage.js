import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import { GET_AUTHOR_INFO } from '../../graphQL/queries';
import { Avatar, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';

const AuthorPage = () => {
    const { slug } = useParams()

    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
        variables: { slug }
    })


    if (loading) return <Loader />

    if (error) return <h3>Error...</h3>

    console.log(data)
    const { author } = data
    return (
        <Container mt={10} maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Avatar sx={{ width: "250px", height: "250px" }} src={author.avatar.url} />
                    <Typography mt={4} component="h3" variant="h5" fontWeight={700}>{author.name}</Typography>
                    <Typography mt={2} component="p" variant="h5" color="text.secondary">{author.filed}</Typography>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(author.about.html) }}></div>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <Typography component="h3" variant="h5" fontWeight={700}>
                        مقالات {author.name}
                    </Typography>
                    <Grid container xs={12} mt={2}>
                        {author.posts.map(item => (
                            <Grid item xs={12} sm={6} md={4} key={item.id} padding={2}>
                                <CardEL title={item.title} slug={item.slug} coverPhoto={item.coverPhoto} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
};

export default AuthorPage;