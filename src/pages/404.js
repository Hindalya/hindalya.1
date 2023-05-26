import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-bold mb-8">404 - Page Not Found</h1>
      <p className="text-xl mb-8">We're sorry, the page you requested could not be found.</p>
      <Link href="/" passHref>
        <p className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition-colors">
          Go back home
        </p>
      </Link>
    </div>
  );
}
