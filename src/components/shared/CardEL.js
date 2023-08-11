import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CardEL = ({ author, title, slug, coverPhoto }) => {
    console.log(author)
    return (
        <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
            {author && <CardHeader
                title={<Typography component="p" variant="p" color="text.secondary" sx={{ marginRight: 2 }}>{author.name}</Typography>}
                avatar={<Avatar src={author.avatar.url} ></Avatar>}
            />}
            <CardMedia component="img" height="194" src={coverPhoto.url} alt={slug} />
            <CardContent>
                <Typography component="h3" variant='h6' color="text.primary" fontWeight={600}>
                    {title}
                </Typography>
            </CardContent>
            <Divider variant='middle' sx={{ margin: "10px" }} />
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ width: "100%", textDecoration: "none" }}>
                    <Button variant='outlined' sx={{ width: "100%", borderRadius: "10px" }}>مطالعه مقاله</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default CardEL; 