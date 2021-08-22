import jwtDecode, { JwtPayload } from 'jwt-decode';
import { UserDetails } from '../redux/userSlice';

const ISSUER = 'spotify-randomizer';

interface CustomJwtPayload {
  iss?: string;
  sub?: string;
  displayName?: string;
  accessToken?: string;
  exp?: number;
}

function getDecodedJwt(jwt: string): CustomJwtPayload | undefined {
  try {
    return jwtDecode<JwtPayload>(jwt);
  } catch (e) {
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

function jwtExpirationAndCurrentTimestampDifference(jwt: string) {
  try {
    const decodedJwt = getDecodedJwt(jwt);
    if (decodedJwt === undefined || decodedJwt?.exp === undefined) {
      return -1; // negative means that it's expired
    }

    const expirationTimestamp = decodedJwt.exp;
    const currentTimestamp = Math.round(new Date().getTime() / 1000);

    return expirationTimestamp - currentTimestamp;
  } catch {
    return -1;
  }
}

export function isJwtExpired(jwt: string): boolean {
  const number = jwtExpirationAndCurrentTimestampDifference(jwt);
  return number <= 0;
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
