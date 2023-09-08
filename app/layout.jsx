import '../styles/globals.scss';

// import { Roboto } from 'next/font/google';


// const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Сіверський інститут регіональних досліджень',
  description: 'СІВЕРСЬКИЙ ІНСТИТУТ РЕГІОНАЛЬНИХ ДОСЛІДЖЕНЬ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
