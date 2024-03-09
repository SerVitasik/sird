import "@/styles/globals.scss";
import { AuthProvider } from "./Providers";

export const metadata = {
  title: "Сіверський інститут регіональних досліджень",
  description: "СІВЕРСЬКИЙ ІНСТИТУТ РЕГІОНАЛЬНИХ ДОСЛІДЖЕНЬ",
  icons: {
    icon: "/icon.ico",
  },
  verification: {
    google: "5xig1P0pquWKupHNQs4dPTMZI11j5I49k0iihQPeu70",
  },
};

// import { Roboto_Serif } from 'next/font/google';

// const roboto = Roboto_Serif({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin', 'cyrillic'],
//   display: 'swap',
// })
//className={roboto.className}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
