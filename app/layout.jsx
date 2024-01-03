// "use client";
import "../styles/globals.scss";
import { AuthProvider } from "./Providers";


export const metadata = {
  title: "Сіверський інститут регіональних досліджень",
  description: "СІВЕРСЬКИЙ ІНСТИТУТ РЕГІОНАЛЬНИХ ДОСЛІДЖЕНЬ",
  icons: {
    icon: "/icon.ico",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head> */}
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
        </body>
    </html>
  );
}
