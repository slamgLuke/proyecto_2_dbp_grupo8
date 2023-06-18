import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typografy from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: '#999999', 
        },
    },
});

export const Login = () => {


    return (
        <ThemeProvider theme={theme}>
        <Box>
            <form>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 400,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                    marginTop: 10,
                    padding: 3,
                    borderRadius: 5,
                    boxShadow: '20px 20px 40px #000000',
                    flexShrink: 1, 
                    backgroundColor: '#181a1b',
                    ":hover": {
                        boxShadow: '10px 10px 20px #000000',
                    },}}>
                    <Typografy sx={{fontSize: 40, padding: 3, fontWeight: 'bold', color: '#fff', textAlign: 'center'}}>
                        Login</Typografy>
                    <TextField
                        type="text"
                        id="outlined-helperText"
                        label={<span style={{ fontWeight: 'bold' }}>USERNAME</span>}
                        sx={{marginTop: 4,
                            '& label': {
                                color: 'white',},
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                            '& input': {
                                color: 'white',
                                fontWeight: 30,
                                fontSize: 15,
                            },
                            }}
                    />
                    <TextField
                        type="password"
                        id="outlined-helperText"
                        label={<span style={{ fontWeight: 'bold' }}>PASSWORD</span>}
                        sx={{ marginTop: 4, 
                            '& label': {
                                color: 'white',},
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                            '& input': {
                                color: 'white',
                                fontWeight: 30,
                                fontSize: 15,
                            },
                            }}
                    />
                    <Button variant="contained" sx={{ marginTop: 3, borderRadius: 3, backgroundColor: '#1f73b7', width: '80%'}}>    
                    Login   </Button>
                </Box>
            </form>
        </Box>
        </ThemeProvider>
    );
}
