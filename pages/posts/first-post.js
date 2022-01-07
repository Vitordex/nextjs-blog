import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            {/* <Script
                onLoad={() => console.log('Script loaded correctly')}
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload" /> */}
            <h1>First Post</h1>
            <Link href="/"><a>Go Back</a></Link>
        </Layout>
    );
}