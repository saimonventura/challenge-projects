import Head from 'next/head';
import { wrapperStyle } from 'shared/style/className';

export default function BaseTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={wrapperStyle}
        >
            <Head>
                <title>Saimon Projects</title>
                <meta name="description" content="Saimon Projects" />
            </Head>

            <main className='p-2 bg-slate-200 m-2 rounded-md border-2 border-slate-400'>
                {children}
            </main>

            <footer className="text-slate-300 fixed bottom-1 right-1" >
                🤖 Created by Saimon Ventura 🤖
            </footer>
        </div>
    );
}
