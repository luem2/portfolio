import React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {CssBaseline.flush()}
                    <link
                        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
