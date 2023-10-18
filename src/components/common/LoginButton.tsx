import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="contained" disableElevation
            onClick={() => loginWithRedirect()}
            fullWidth
            sx={{
              marginTop:'15px'
            }}            
          >
            Login
        </Button>
  
  
  // <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;