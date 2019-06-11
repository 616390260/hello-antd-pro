// use localStorage to store the authority info, which might be sent from server in actual project.
import jwtDecode from 'jwt-decode';

export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;
  // authorityString could be admin, "admin", ["admin"]
  // let authority;
  // try {
  //   authority = JSON.parse(authorityString);
  // } catch (e) {
  //   authority = authorityString;
  // }
  let authority;

  try {
    authority = jwtDecode(authorityString).currentAuthority;
  } catch (e) {
    authority = authorityString;
  }
  // const authority = jwtDecode(authorityString).currentAuthority;

  if (typeof authority === 'string') {
    return [authority];
  }
  return authority;
}

export function setAuthority(authority) {
  // const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return localStorage.setItem('antd-pro-authority', authority);
}
