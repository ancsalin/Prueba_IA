import type { SVGProps } from 'react';

export const PythonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.5 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM15 4.5V9a3 3 0 0 1-3 3H9.5A2.5 2.5 0 0 1 7 9.5V4.5a2.5 2.5 0 1 1 5 0Zm-5 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm-.5 10.5V15a3 3 0 0 0 3 3h2.5a2.5 2.5 0 0 0 2.5-2.5V10.5a2.5 2.5 0 0 0-5 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const JavaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 21s-3-3-3-6 3-6 3-6M16 3s3 3 3 6-3 6-3 6m-3-15h4v6a3 3 0 0 1-3 3H8a2 2 0 0 1-2-2v-1M8 15h3a2 2 0 0 1 2 2v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SqlIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
