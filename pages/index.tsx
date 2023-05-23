import Layout from '@/components/layout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>WEB!</title>
      </Head>
      <Layout>
        <h2>Welcome</h2>
        Hello, world!
      </Layout>
    </>
  );
}
