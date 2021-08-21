import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {isJwtExpired} from '../../common/jwtValidator';
import {clearUserData} from '../../redux/userSlice';
import Routes from '../../common/route';

/*
Not the best idea = but it's something.
This component validates if jwt is expired, if so then logs user out and clears his data from storage
 */
export default function JwtExpirationValidator(): JSX.Element {
  const history = useHistory();
  const userStateJwt = useAppSelector((state) => state.user.jwt);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userStateJwt !== undefined && isJwtExpired(userStateJwt)) {
      dispatch(clearUserData());
      history.push(Routes.HOME);
    }
  });

  return <></>;
}
