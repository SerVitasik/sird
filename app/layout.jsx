"use client";
import store from "@/store";
import "../styles/globals.scss";
import { AuthProvider } from "./Providers";
import { Provider } from 'react-redux';

export const metadata = {
  title: "Сіверський інститут регіональних досліджень",
  description: "СІВЕРСЬКИЙ ІНСТИТУТ РЕГІОНАЛЬНИХ ДОСЛІДЖЕНЬ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <AuthProvider>
          <Provider store={store}>
            {children}
          </Provider>
        </AuthProvider>
        </body>
    </html>
  );
}
