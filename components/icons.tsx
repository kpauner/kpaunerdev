type IconProps = React.SVGProps<SVGSVGElement>;
import { AlertCircle, Mail } from "lucide-react";
export const Icons = {
  alertcircle: AlertCircle,
  mail: Mail,
  arrowupright: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" />
    </svg>
  ),
  github: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  ),
  logo: ({ ...props }: IconProps) => (
    <svg viewBox="0 0 413 97" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_229_2)">
        <path d="M39.13 43.33L54.88 70.62H33.31L22.72 47.91L18.71 70.62H0L12.41 0H31.12L24.63 37.22L42.86 17.08H64.71L39.13 43.32V43.33Z" />
        <path d="M116.43 21.85C119.8 25.48 121.49 30.47 121.49 36.83C121.49 39.18 121.27 41.51 120.82 43.8C119.8 49.4 117.96 54.28 115.29 58.45C112.62 62.62 109.37 65.8 105.56 67.99C101.75 70.18 97.7 71.28 93.44 71.28C89.62 71.28 86.5 70.47 84.09 68.85C81.67 67.23 80.05 64.99 79.22 62.12L73.21 96.19H54.41L68.34 17.07H87.14L85.61 25.56C87.39 22.7 89.81 20.45 92.86 18.83C95.91 17.21 99.32 16.4 103.07 16.4C108.61 16.4 113.06 18.21 116.43 21.84V21.85ZM97.73 51.96C99.89 50.02 101.26 47.3 101.83 43.8C102.02 42.85 102.12 41.92 102.12 41.03C102.12 38.42 101.39 36.4 99.93 34.97C98.47 33.54 96.49 32.82 94.01 32.82C91.15 32.82 88.65 33.81 86.52 35.78C84.39 37.75 83 40.43 82.37 43.8C82.18 44.82 82.08 45.77 82.08 46.66C82.08 49.27 82.81 51.29 84.28 52.72C85.74 54.15 87.68 54.87 90.1 54.87C93.03 54.87 95.57 53.9 97.73 51.96Z" />
        <path d="M160.19 18.9C162.83 20.56 164.56 22.78 165.39 25.58L166.92 17.09H185.63L176.09 70.63H157.48L159.01 62.14C157.23 64.94 154.81 67.17 151.76 68.82C148.71 70.48 145.27 71.3 141.45 71.3C135.66 71.3 131.13 69.44 127.85 65.72C124.57 62 122.93 56.83 122.93 50.21C122.93 47.92 123.18 45.25 123.69 42.19C124.64 36.91 126.42 32.33 129.03 28.45C131.64 24.57 134.79 21.59 138.48 19.53C142.17 17.46 146.08 16.43 150.22 16.43C154.36 16.43 157.55 17.26 160.19 18.91V18.9ZM146.83 35.74C144.7 37.68 143.31 40.37 142.68 43.8C142.49 44.75 142.39 45.68 142.39 46.57C142.39 49.24 143.12 51.29 144.59 52.73C146.05 54.16 148.03 54.88 150.51 54.88C153.31 54.88 155.81 53.89 158 51.92C160.2 49.95 161.58 47.24 162.15 43.81C162.34 42.86 162.44 41.93 162.44 41.04C162.44 38.43 161.71 36.41 160.24 34.98C158.78 33.55 156.84 32.83 154.42 32.83C151.49 32.83 148.96 33.8 146.83 35.74Z" />
        <path d="M247.84 17.08L238.39 70.62H219.59L221.12 61.74C219.02 64.6 216.36 66.88 213.15 68.56C209.94 70.25 206.39 71.09 202.51 71.09C197.36 71.09 193.35 69.6 190.48 66.6C187.62 63.61 186.19 59.44 186.19 54.1C186.19 52.19 186.38 50.19 186.76 48.09L192.29 17.07H210.9L205.84 45.8C205.71 46.37 205.65 47.17 205.65 48.19C205.65 50.54 206.3 52.37 207.61 53.68C208.91 54.98 210.74 55.64 213.1 55.64C215.9 55.64 218.27 54.75 220.21 52.97C222.15 51.19 223.41 48.68 223.98 45.43V45.91L229.04 17.09H247.84V17.08Z" />
        <path d="M303.58 21.09C306.44 24.08 307.87 28.25 307.87 33.59C307.87 35.44 307.68 37.41 307.3 39.51L301.86 70.62H283.15L288.21 41.89C288.34 41.32 288.4 40.49 288.4 39.41C288.4 37.06 287.75 35.23 286.44 33.92C285.14 32.62 283.31 31.96 280.95 31.96C278.15 31.96 275.78 32.85 273.84 34.63C271.9 36.41 270.64 38.92 270.07 42.17V41.79L265.01 70.61H246.3L255.65 17.07H274.45L272.83 26.04C274.93 23.18 277.59 20.89 280.8 19.17C284.01 17.45 287.59 16.59 291.54 16.59C296.69 16.59 300.7 18.09 303.57 21.08L303.58 21.09Z" />
        <path d="M360.08 22.05C364.15 25.8 366.19 30.89 366.19 37.32C366.19 38.91 366.03 40.76 365.71 42.86C365.14 45.02 364.69 46.49 364.37 47.25H329.06C329 47.76 328.96 48.49 328.96 49.45C328.96 54.03 331.09 56.32 335.35 56.32C337.19 56.32 338.8 55.88 340.17 54.98C341.54 54.09 342.57 52.91 343.27 51.45H363.12C360.96 57.3 357.23 62.08 351.95 65.77C346.67 69.46 340.56 71.31 333.63 71.31C326.7 71.31 321.09 69.37 317.02 65.49C312.95 61.61 310.91 56.27 310.91 49.46C310.91 47.42 311.1 45.26 311.48 42.97C312.43 37.56 314.42 32.85 317.44 28.85C320.46 24.84 324.2 21.77 328.65 19.64C333.1 17.51 337.97 16.44 343.25 16.44C350.38 16.44 355.97 18.32 360.05 22.07L360.08 22.05ZM347.48 37.32C347.48 35.28 346.84 33.74 345.57 32.69C344.3 31.64 342.67 31.12 340.7 31.12C338.22 31.12 336.09 31.82 334.31 33.22C332.53 34.62 331.26 36.69 330.49 39.42H347.29C347.42 38.91 347.48 38.21 347.48 37.32Z" />
        <path d="M401.73 19.47C405.2 17.56 408.74 16.61 412.37 16.61L408.74 36.65H403.4C399.2 36.65 395.91 37.46 393.52 39.08C391.13 40.7 389.59 43.52 388.89 47.53L384.79 70.63H366.08L375.43 17.09H394.23L392.42 27.11C395.16 23.93 398.26 21.38 401.72 19.48L401.73 19.47Z" />
      </g>
      <defs>
        <clipPath id="clip0_229_2">
          <rect width="413" height="97" />
        </clipPath>
      </defs>
    </svg>
  ),
  linkedin: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm1.05 5h1.9v6h-1.9zm2.025-1.995a1.075 1.075 0 1 1-2.15 0a1.075 1.075 0 0 1 2.15 0M12 8.357c0-1.805-1.167-2.507-2.326-2.507a2.206 2.206 0 0 0-1.095.231c-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001c.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906z"
        clipRule="evenodd"
      />
    </svg>
  ),
  bluesky: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565C.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479c.815 2.736 3.713 3.66 6.383 3.364c.136-.02.275-.039.415-.056c-.138.022-.276.04-.415.056c-3.912.58-7.387 2.005-2.83 7.078c5.013 5.19 6.87-1.113 7.823-4.308c.953 3.195 2.05 9.271 7.733 4.308c4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056c2.67.297 5.568-.628 6.383-3.364c.246-.828.624-5.79.624-6.478c0-.69-.139-1.861-.902-2.206c-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8" />
    </svg>
  ),
  youtube: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
    </svg>
  ),
  billing: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 14 14"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 4.5V3M5.5 8.5c0 .75.67 1 1.5 1s1.5 0 1.5-1c0-1.5-3-1.5-3-3c0-1 .67-1 1.5-1s1.5.38 1.5 1M7 9.5V11" />
        <circle cx="7" cy="7" r="6.5" />
      </g>
    </svg>
  ),
  browse: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  ),
  circlecheck: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  alert: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  ),
  twitch: ({ ...props }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M 5.3632812 2 L 2 6.6367188 L 2 20 L 7 20 L 7 23 L 10 23 L 13 20 L 17 20 L 22 15 L 22 2 L 5.3632812 2 z M 6 4 L 20 4 L 20 13 L 17 16 L 12 16 L 9 19 L 9 16 L 6 16 L 6 4 z M 11 7 L 11 12 L 13 12 L 13 7 L 11 7 z M 16 7 L 16 12 L 18 12 L 18 7 L 16 7 z" />
    </svg>
  ),
  twitterx: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" />
    </svg>
  ),
};
