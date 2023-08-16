import React from "react";
import { AppBar } from "@mui/material";
import {Toolbar} from "@mui/material";
import {Typography} from "@mui/material";
import {CssBaseline} from "@mui/material";
import { styled } from "@mui/material";
import { borderBottom } from "@mui/system";

const AppBarComp = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBarComp style={{posistion:"static", color:"white", elevation:'0'}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BlogmeUP
          </Typography>
        </Toolbar>
      </AppBarComp>
    </>
  );
};

export default Header;
