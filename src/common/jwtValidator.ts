import jwtDecode, { JwtPayload } from 'jwt-decode';

const ISSUER = 'spotify-randomizer';

export function isValidJwt(jwt: string): boolean {
  const decodedJwt = getDecodedJwt(jwt);

  if (!decodedJwt) {
    return false;
  }

  // todo: extend jwt validation
  return decodedJwt.iss === ISSUER;
}

function getDecodedJwt(jwt: string): JwtPayload | null {
  let decoded = null;

  if (!jwt) {
    return decoded;
  }

  try {
    decoded = jwtDecode<JwtPayload>(jwt);
  } catch (e) {
    console.error('Unable to decode jwt', e);
  }

  return decoded;
}
