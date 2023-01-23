import Layout from "../../components/Layout"
import { useRef } from "react";

export default function write () {
    const idRef = useRef(undefined);
    const titleRef = useRef(undefined);
    const contentRef = useRef(undefined);


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
            .then(response => response.json())
            .then(data => alert(data.message));
        }
    }

    return (
        <Layout>
            <h1>Write a Post</h1>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="id" id="id" required ref={idRef}/>
                <br />
                <input type='text' placeholder="title" id="title" required ref={titleRef}/>
                <br />
                <textarea type='text' placeholder="title" id="title" required ref={contentRef} />
                <br />
                <input type="submit" value ="Create" />
            </form>
        </Layout>
    )
}