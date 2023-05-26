import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

/* //The "layout.tsx page decides what is the design and placement of components" */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* I have created a navabr here which will applied to all the directry inside 'APP' directory  */}
        <h1>NAVBAR</h1> 
        {children}
      </body>
    </html>
  )
}