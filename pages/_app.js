import '../styles/globals.css'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

export default function App({Component, pageProps}) {
    const router = useRouter();
    return (
        <Layout home={router.pathname === '/'}>
            <Component {...pageProps}/>
        </Layout>
    )
}