import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Post } from '../../interfaces'
import {  getSortedPostsData } from '../../lib/posts'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Post[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Posts List">
    <h1>投稿されたコンテンツ</h1>
    <List items={items} />
    <p>
      <Link href="/">トップページ</Link>
    </p>
  </Layout>
)

export const  getStaticProps: GetStaticProps = async () => {
  const items = await getSortedPostsData()
  return { props: { items } }
}

export default WithStaticProps
