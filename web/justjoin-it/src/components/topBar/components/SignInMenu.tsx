import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
import { IconButton, Typography } from "@mui/material";
import { StyledSignInMenu } from "./StyledSignInMenu";

export const SignInMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button variant="contained" disableElevation onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        <Typography variant="buttonFont"> Sign In</Typography>
      </Button>
      <StyledSignInMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <SupportAgentIcon />
          </IconButton>
          Sign in as a developer
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton href="/signin">
            <WorkIcon />
          </IconButton>
          Sign in to Employer Panel
        </MenuItem>
      </StyledSignInMenu>
    </Fragment>
  );
};
