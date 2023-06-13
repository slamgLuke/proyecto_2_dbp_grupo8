import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

//styled component de MUI para Item
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: '2rem',
    color: theme.palette.text.secondary,
}));


//COMPONENTE HOME
export const Home = () => {

    //encapsula evento eventW  (cuando escriben en el inptu)
    const handleSumit = (eventW) => {
        console.log(eventW.target.value);
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* Cuenta del usuario */}
                <Grid item xs={12} sm={4} sx={{ marginTop: '30px' }}>
                    <Box sx={{ margin: '30px' }}>
                        <Item >CUENTA</Item>

                    </Box>
                </Grid>

                {/* Partidas disponibles */}
                <Grid item xs={12} sm={8} sx={{ marginTop: '30px' }}>
                    <Box sx={{ margin: '20px' }}>
                        <Item>PARTIDAS DISPONIBLES</Item>
                        <Box>
                            <form onSubmit={handleSumit}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="Hello World"
                                />
                            </form>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );

}