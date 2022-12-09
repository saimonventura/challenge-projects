import type { AppProps } from 'next/app'
import { Provider } from 'shared/context/provider'
import BaseTemplate from 'shared/template/base.template'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Provider>
        <BaseTemplate>
            <Component {...pageProps} />
        </BaseTemplate>
    </Provider>
}