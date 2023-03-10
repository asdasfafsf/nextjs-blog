import '../styles/globals.css'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import ErrorBoundary from '@/components/ErrorBoundary';

export function reportWebVitals(metric) {
    console.log(metric);
}

export default function App({Component, pageProps}) {
    const router = useRouter();
    const [visitedTime] = useState(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));

    return (
        <Layout home={router.pathname === '/'}>
            <div>
                visited : {formatDistanceToNow(new Date(), visitedTime, { addSuffix: true, includeSeconds: true})}
            </div>
            <ErrorBoundary fallbackComponent={<div>하하하</div>}>
                <Component {...pageProps} pathname={router.pathname}/>
            </ErrorBoundary>
        </Layout>
    )
}