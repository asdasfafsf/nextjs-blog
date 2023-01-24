import { memo } from "react";

function Utterance () {
    return (
        <section 
            ref={(elem) => {
                if (!elem) {
                    return;
                }

                const scriptElement = document.createElement('script');
                scriptElement.src = 'https://utteranc.es/client.js';
                scriptElement.async = true;
                scriptElement.setAttribute('repo', 'asdasfafsf/nextjs-blog');
                scriptElement.setAttribute('theme','github-dark-orange');
                scriptElement.setAttribute('issue-term','pathname');
                scriptElement.setAttribute('crossorigin','anonymous');

                elem.appendChild(scriptElement);
            }}
        />
    )
}


export default memo(Utterance);