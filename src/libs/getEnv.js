import { CAT } from 'constants/catOrDog';
import { DEV } from 'constants/devOrProd';
import { WEB, IOS, AOS } from 'constants/platforms';

// path에서 강/고대, 개발/운영의 인덱스
const IDX_DOG_OR_CAT = 0;
const IDX_DEV_OR_PROD = 1;

// /dog/dev/abc -> ['dog', 'dev', 'abc']
const getPathname = () =>
  typeof window !== 'undefined'
    ? window.location.pathname.slice(1).split('/')
    : null;

export const isCat =
  (getPathname() && getPathname()[IDX_DOG_OR_CAT] === CAT) || false;
export const isDev =
  (getPathname() && getPathname()[IDX_DEV_OR_PROD] === DEV) || false;
export const getCatOrDog = () => getPathname() && getPathname()[IDX_DOG_OR_CAT];
export const getDevOrProd = () =>
  getPathname() && getPathname()[IDX_DEV_OR_PROD];

export const getPlatform = () => {
  // funnc 함수 호출하여 현재 플랫폼 파악.
  if (typeof window !== 'undefined') {
    try {
      window.JSBridge.funnc();
      return AOS;
      // eslint-disable-next-line
    } catch (e) {}
    try {
      window.webkit.messageHandlers.funnc.postMessage('');
      return IOS;
      // eslint-disable-next-line
    } catch (e) {}
    return WEB;
  }
  return null;
};

export const imgUrl = isCat
  ? 'https://img.catpre.com/event/catpre'
  : 'https://img.dogpre.com/event/dogpre';
