import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import { Link } from 'react-router-dom';

import BookIcon from '@mui/icons-material/Book';
import ArticleIcon from '@mui/icons-material/Article';

const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                        <Typography component="h1" variant='h5' fontWeight="200">
                            وبلاگ بوتواستارت
                        </Typography>
                    </Link>
                    <Box component="div">
                        <Link to="/blogs" style={{ color: "#fff" }}>
                            <ArticleIcon />
                        </Link>
                        <Link to="/" style={{ color: "#fff" }}>
                            <BookIcon />
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default Header;