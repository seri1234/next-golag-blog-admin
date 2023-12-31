import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link>|{' '}
        <Link href="/posts">投稿一覧</Link> |{' '}
        <Link href="/posts/new">新規投稿</Link> |{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
    </footer>
  </div>
)

export default Layout
