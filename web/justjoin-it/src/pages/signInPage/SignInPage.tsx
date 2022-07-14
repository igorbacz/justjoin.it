import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink } from "./styled";
import styled from "@emotion/styled";
import { StyledLink } from "../../components/topBar/styled";

export const HeaderLoginBox = styled(Box)`
  padding: 40px 20px;
`;

export const SignInPage = () => {
  return (
    <Wrapper>
      <HeaderLoginBox>
        <StyledLink to="/">
          <Typography variant="H1Styled">justjoin.it</Typography>
        </StyledLink>
      </HeaderLoginBox>
      <LabelContainer>
        <EmailIcon fontSize="large" />
        <TextField id="standard-password-input" label="Email" type="email" autoComplete="email" variant="standard" />
      </LabelContainer>
      <LabelContainer>
        <LockIcon fontSize="large" />
        <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
      </LabelContainer>
      <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
      <ButtonContainer>
        <Button variant="contained" fullWidth>
          SIGN IN
        </Button>
      </ButtonContainer>
      <LinkContainer>
        <ResetLink href="">Forgot Password?</ResetLink>
      </LinkContainer>
    </Wrapper>
  );
};
