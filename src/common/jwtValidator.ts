import jwtDecode, { JwtPayload } from 'jwt-decode';
import { UserDetails } from '../redux/userSlice';

const ISSUER = 'spotify-randomizer';

interface CustomJwtPayload {
  iss?: string;
  sub?: string;
  displayName?: string;
  accessToken?: string;
}

function getDecodedJwt(jwt: string): CustomJwtPayload | undefined {
  try {
    return jwtDecode<JwtPayload>(jwt);
  } catch (e) {
    // console.error('Unable to decode jwt', e);
    return undefined;
  }
}

export function isValidJwt(jwt: string | undefined): boolean {
  if (!jwt) {
    return false;
  }

  const decodedJwt = getDecodedJwt(jwt);

  if (!decodedJwt) {
    return false;
  }

  // todo: extend jwt validation
  return decodedJwt.iss === ISSUER;
}

export function getUserDataFromJwt(jwt: string): UserDetails | undefined {
  const decodedJwt = getDecodedJwt(jwt);

  if (decodedJwt) {
    return {
      email: decodedJwt.sub,
      displayName: decodedJwt.displayName,
      accessToken: decodedJwt.accessToken,
    };
  }

  return undefined;
}
