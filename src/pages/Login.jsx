import { Container, Paper } from '@mui/material'
import React from 'react'

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
  return <Container component="main" maxWidth="sx">
    <Paper elevation={3} sx={{padding:4, display : 'flex', flexDirection: 'column', alignItems: 'center'}} >
        {isLogin ? <span>Login</span> : <span>Register</span>}
        </Paper>
  </Container>
}
