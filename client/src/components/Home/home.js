import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';

const Home = () => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="xs">
                <Box sx={{ height: '85vh', paddingTop: '50%' }} >
                    <h1>NTT Data Business Solutions Turkey</h1>
                    <h2>Data Platforms – Junior Software Engineer</h2>
                    <h2>Fullstack Programming Case</h2>
                </Box>
            </Container>
        </div>
    );
}

export default Home