import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";


// export async function getServerSideProps() {
//     return {}
// }

export default function write () {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            console.log(router.query);
        }

        router.prefetch('/posts/ssg-ssr')
    })

    useEffect(() => {
        console.log(JSON.stringify(router));
    }, [router])

    const idRef = useRef(undefined);
    const titleRef = useRef(undefined);
    const contentRef = useRef(undefined);


    const [showLink, setShowLink] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = idRef.current.value;
        const title = titleRef.current.value;
        const content = contentRef.current.value;


        if (id && title && content) {
            fetch(`/api/post/write`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    id,
                    title,
                    content
                })
            })
            .then(response => {
                if (response.ok) {
                    setShowLink(true);
                    return response.json();
                }

                throw new Error('Fetch Error')
            })
            .then(data => alert(data.message))
            .catch(err => alert(err.message))
            
        }
    }

    return (
        <>
            <Head>
                <title>write a post</title>
            </Head>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="id" id="id" required ref={idRef}/>
                <br />
                <input type='text' placeholder="title" id="title" required ref={titleRef}/>
                <br />
                <textarea type='text' placeholder="title" id="title" required ref={contentRef} />
                <br />
                <input className="rounded bg-pink 800"type="submit" value ="Create" />
            </form>
            {showLink && 
                <Link href ={`/posts/${idRef.current.value}`}> Created Post Link </Link>
            }

            <br />
            <button onClick={() => router.push('/posts/ssg-ssr')} className="rounded bg-pink-200">router push</button>
            <br />
            <br />
            <button onClick={() => router.push('/posts/ssg-ssr')} className="rounded bg-pink-200">router.replace</button>

            <button onClick={() => router.push('/posts/ssg-ssr')} className="rounded bg-pink-200">router.replace</button>
            <br />
            <br />
            <Link href={'/posts/ssg-ssr'} passHref legacyBehavior>
                <LinkButton />
            </Link>
            <br />
            <br />
            <Link href={'/posts/ssg-ssr'} replace scroll={false}>
                <a>가즈아</a>
            </Link>
        </>
    )
}

const LinkButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    )
  });
// write.getInitialProps = async () => {};