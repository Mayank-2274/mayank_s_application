import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Synergy -Jawa ',
  description: 'Synergy Automobile Parts by Jawa',
  icons: {
    icon: [
      { url: '/images/img_jawa.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* CORRECTED: All content, including the portal root and scripts, should be inside the body tag. */}
      <body>
        {children}
        <div id="modal-root"></div>
        {/* <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fmayanksa8692back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.6"></script> */}
      </body>
    </html>
  );
}
