import RenderAuthorized from '@/components/Authorized';
// 从 localStorage 取出当前的 authority
import { getAuthority } from './authority';

// getAuthority() 有可能是 'admin' 或 'user'
let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

export { reloadAuthorized };
export default Authorized;
