import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Typography
                component="p"
                variant="p"
                color="primary"
                padding="10px"
                textAlign="center"
                bgcolor="#f7f7f7"

            >طراحی شده با graphQL-توسط نیما </Typography>
        </div >
    );
};

export default Footer;