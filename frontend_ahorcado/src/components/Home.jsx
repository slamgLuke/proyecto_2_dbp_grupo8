import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typografy from '@mui/material/Typography';

export const Home = () => {
    return (
        <Box sx={{ display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            maxWidth: 800,
            margin: 'auto',
            marginTop: 5, 
            padding: 3,
            flexShrink:1,
            }}>
            <img src={require("../images/view_home.jpg")} alt="Ahoracados VS" style={{maxWidth: '100%', margin: 'auto'}} />
            <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" sx={{ borderRadius: 3, backgroundColor: '#212F3C', width: '100%' }}>
                        Create Lobby
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" sx={{ borderRadius: 3, backgroundColor: '#212F3C', width: '100%' }}>
                        Join Lobby
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" sx={{ borderRadius: 3, backgroundColor: '#212F3C', width: '100%' }}>
                        Leaderboard
                    </Button>
                </Grid>
            </Grid>
            <Typografy sx={{fontWeight: 'bold', 
                            fontSize: 'clamp(1.2rem, 2.4vw, 3rem)',
                            fontFamily: 'fantasy', 
                            textAlign: 'center', 
                            flexShrink: 1,
                            marginTop: 3,
                            color: '#1B2631'
                            }}>
                DESCUBRE LA PALABRA OCULTA
            </Typografy>
            <Typografy sx={{fontSize: 'clamp(1rem, 2vw, 2rem)',
                            fontFamily: 'fantasy', 
                            textAlign: 'center', 
                            flexShrink: 1,
                            color: '#1B2631'
                            }}> 
                Enfréntate a tus amigos o familiares en una batalla de ingenio y rapidez mental. 
                Descubre la palabra oculta antes que tu oponente y demuestra quién es el verdadero campeón de los ahorcados.
            </Typografy>
        </Box>
    );
}
