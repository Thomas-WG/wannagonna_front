// app/page.tsx
import Head from 'next/head';
import Image from 'next/image';
import { Organization } from 'types/index';

import { getOrganizations } from '@/lib/firestore';

// Make the component async to fetch data server-side
export default async function HomePage() {
  const organizations: Organization[] = await getOrganizations();

  function Sidebar() {
    return (
      <nav className="fixed top-0 left-0 h-full w-64 bg-orange-500 text-white flex flex-col items-start py-4">
        <h2 className="text-lg font-semibold px-4 mb-4">Menu</h2>
        <ul className="flex flex-col w-full">
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#dashboard">Dashboard</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#explore">Explore</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#achievements">Achievements</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#leaderboards">Leaderboards</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#myteam">My Team</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#mynonprofit">My Non-Profit</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#members">Members</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#donate">Donate</a>
          </li>
          <li className="px-4 py-2 hover:bg-orange-600">
            <a href="#settings">Settings</a>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <main className="flex">
      <Head>
        <title>Organizations</title>
      </Head>
      {/* Sidebar */}
      <Sidebar />
        
          <h1 className='mt-4'>Wanna Gonna</h1>
      <section className="bg-white flex-1 p-8">
          <Image
            src='/favicon/favicon-96x96.png' // Path to your image in the public folder
            alt='Wanna Gonna Icon'
            width={92}
            height={32}
          />
        <h1 className="text-2xl font-bold mb-6">Organizations</h1>
        
        {organizations.length > 0 ? (
          <ul className="space-y-4">
            {organizations.map((org: Organization) => (
              <li key={org.id} className="border p-4 rounded-md shadow-md">
                <h2 className="text-xl font-semibold">{org.name}</h2>
                <p>Country: {org.country}</p>
                <p>Email: {org.email}</p>
                <p>Website: <a href={`https://${org.website}`} className="text-blue-500 underline">{org.website}</a></p>
                <p>Languages:</p>
                <ul className="ml-4 list-disc">
                  {org.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No organizations found.</p>
        )}
      </section>
    </main>
  );
}
