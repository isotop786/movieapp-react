import Layout from '../components/Layout';
import Head from 'next/head';

const About =()=>{
    return(
        <Layout title="About page">
            <Head>
                <title>About page</title>
            </Head>
            <p>Hey this is about page</p>
        </Layout>
    )
}

export default About;