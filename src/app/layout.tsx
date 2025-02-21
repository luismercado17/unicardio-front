import AuthProvider from '@/auth'
import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UNICARDIO CARIBE',
  description: 'Centro de diagnóstico cardíaco♥️ Con corazón de verdad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <title>ICN Salud</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <body className={inter.className}>
        <AuthProvider>
            {children}
        </AuthProvider>
      </body>
    </html>
  )
}
