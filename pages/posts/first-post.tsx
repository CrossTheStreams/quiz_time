import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function FirstPost(): JSX.Element {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="text-3xl font-bold underline">First Post</h1>
      <Image
        src="/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}
