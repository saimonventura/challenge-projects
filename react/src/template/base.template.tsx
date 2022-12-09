import Head from 'next/head';

export default function BaseTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Head>
                <title>Saimon Projects</title>
                <meta name="description" content="Saimon Projects" />
            </Head>

            <main>
                <h1>Saimon Projects</h1>

                {children}
            </main>

            <footer style={{ position: 'fixed', bottom: 10, right: 20 }}>
                Created by Saimon Ventura
            </footer>
        </div>
    );
}
