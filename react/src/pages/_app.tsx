import type { AppProps } from 'next/app'
import BaseTemplate from 'template/base.template'
import { Provider } from 'context/provider'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Provider>
        <BaseTemplate>
            <Component {...pageProps} />
        </BaseTemplate>
    </Provider>
}