
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Date from '../../components/date'
import { MDXRemote } from 'next-mdx-remote';
import CodeBlock from '@/components/CodeBlock';
import Button from '@/components/Button';

import dynamic from 'next/dynamic';

// const Button = dynamic(() => import('../../components/Button'), {
//   loading: () => <div>loading....</div>
// })

export function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }

}


export async function getStaticProps( { params, preview, pathname }) {
    console.log(`>>>>>>>> ${preview}`)
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}


export default function Post({ postData, pathname }) {
    // const router = useRouter();

    // if (router.isFallback) {
    //     return <div>Loading...</div>
    // }

    const components = {Button, CodeBlock}

    return (
      <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <h2>{pathname}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
        {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components}></MDXRemote>}
      </article>
      </>
    );
  }