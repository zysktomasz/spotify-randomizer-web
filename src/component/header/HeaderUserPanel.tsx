import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useAppSelector } from '../../redux/hooks';
import { UserState } from '../../redux/userSlice';
import { isValidJwt } from '../../common/jwtValidator';
import LoginButton from '../authentication/LoginButton';
import LogoutButton from '../authentication/LogoutButton';

function HeaderUserPanel(): JSX.Element {
  const userState: UserState = useAppSelector((state) => state.user);

  const { userDetails, jwt } = userState;
  const isLoggedIn: boolean = isValidJwt(jwt);
  return (
    <Box>
      {isLoggedIn && (
        <Box className="boxFlexElements">
          <Typography variant="h6" component="h3">
            Hello, {userDetails.displayName}
          </Typography>
          <LogoutButton />
        </Box>
      )}
      {!isLoggedIn && <LoginButton />}
    </Box>
  );
}

export default HeaderUserPanel;
