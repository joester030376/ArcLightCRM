import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Tooltip title='Logout'>
        <LogoutIcon 
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
        </LogoutIcon>
    </Tooltip>
    
  );
};

export default LogoutButton;