import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostsId, getPostData } from "../../lib/posts";
import utilsStyle from "../../styles/utils.module.css";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilsStyle.headingXl}>{postData.title}</h1>
                <div className={utilsStyle.lightText}>
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export function getStaticPaths() {
    const paths = getAllPostsId();

    const result = {
        paths: paths.map((path) => ({
            params: {
                id: path
            }
        })),
        fallback: false
    };
    return result;
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
}