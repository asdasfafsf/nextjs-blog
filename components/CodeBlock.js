import SyntaxHighlighter from "react-syntax-highlighter"
import { rainbow } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import { useRef } from "react"



const CopyButton = ({target}) => {
    const handleCopy = async (event) => {
        if (target) {
            try {
                await navigator.clipboard.writeText(target);
                alert('copied');
            } catch (e) {
                alert('copy failed');
            }
        }
    }
    return (
        <button
            className="absolute right-0.5 bg-white rounded-sm px-2 dark:text-gray-800"
            onClick={handleCopy}
        >
            copy
        </button>
    )
}



export default function CodeBlock({children}) {
    const ref = useRef();
    return (
        <div className="relative">
            <CopyButton 
                target={children}
            />
            <SyntaxHighlighter
                showLineNumbers={true}
                style={rainbow}
                button={CopyButton}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}