'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import UnderlineLink from '@/components/links/UnderlineLink';

// Sidebar Component
function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col items-start py-4">
      <h2 className="text-lg font-semibold px-4 mb-4">Menu</h2>
      <ul className="flex flex-col w-full">
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#home">Home</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#about">About</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#services">Services</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}


export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      {/* Sidebar */}
      <Sidebar />
      
       {/* Main Content */}
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Image
            src='/favicon/favicon-96x96.png' // Path to your image in the public folder
            alt='Wanna Gonna Icon'
            width={92}
            height={32}
          />
          <h1 className='mt-4'>Wanna Gonna</h1>
          <p className='mt-2 text-sm text-gray-800'>
            Hello World{' '}
          </p>
          <p className='mt-2 text-sm text-gray-700'>
          </p>


          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://wannagonna.org'>
              Wanna Gonna
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
