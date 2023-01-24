import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Date from '../../components/date';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import CodeBlock from '../../components/CodeBlock';

export function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }

}


export async function getStaticProps( { params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    // const router = useRouter();

    // if (router.isFallback) {
    //     return <div>Loading...</div>
    // }

    const Button = ({children}) => {
      return (
        <button 
          className='bg-black text-lg text-teal-200 rounded-lg px-5 dark:bg-white dark:text-teal-700'
          onClick={() => {alert( children )}}
        >
          
          {children}
        </button>
      )
    }
    const components = {Button, CodeBlock}

    return (
      <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
        {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components}></MDXRemote>}
      </article>
      </Layout>
    );
  }