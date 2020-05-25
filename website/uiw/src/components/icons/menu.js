import React from 'react';

export default {
  menu: (
    <svg width="19" height="19" viewBox="0 0 26 26">
      <g fill="none" fillRule="evenodd">
        <rect width="26" height="26" fill="#9E9E9E" rx="4" />
        <rect width="5" height="20" x="3" y="3" fill="#202224" rx="2.5" />
        <rect width="12" height="20" x="11" y="3" fill="#FFF" fillOpacity=".657" rx="2" />
      </g>
    </svg>
  ),
  menutop: (
    <svg width="19" height="19" viewBox="0 0 26 26">
      <g fill="none" fillRule="evenodd">
        <rect width="26" height="26" fill="#9E9E9E" rx="4" />
        <rect width="20" height="5" x="3" y="3" fill="#202224" rx="2.5" />
        <rect width="20" height="12" x="3" y="11" fill="#FFF" fillOpacity=".66" rx="2" />
      </g>
    </svg>
  ),
  china: (
    <svg className="flag" width="19" height="19" viewBox="0 0 512 512">
      <defs>
        <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
      </defs>
      <path fill="#de2910" d="M0 0h512v512H0z" />
      <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlinkHref="#a" />
      <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlinkHref="#a" />
      <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlinkHref="#a" />
      <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlinkHref="#a" />
      <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlinkHref="#a" />
    </svg>
  ),
};
