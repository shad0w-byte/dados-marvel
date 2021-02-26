import React from 'react'
import NextHead from 'next/head'
export default function head({title}) {
    return (
        <>
            <NextHead>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Victor Kiss"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Busque dados de seus heróis e HQs preferidas de forma intuitiva e divertida."/>
                <link rel="shortcut icon" href="/favicon.co" type="image/x-icon"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
                <title>{title}</title>
            </NextHead>
        </>
    )
}
