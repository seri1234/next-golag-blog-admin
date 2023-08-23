import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Post } from '../../interfaces'
import {  getSortedPostsData } from '../../lib/posts'
import Layout from '../../components/Layout'
import List from '../../components/List'
import Pagination from '../../components/pagination'

type Props = {
  items: Post[]
  totalCount: number
  id: number
}

const WithStaticProps = ({ items, totalCount, id }: Props) => (
  <Layout title="Posts List">
    <h1>投稿されたコンテンツ</h1>
    <List items={items} />
    <Pagination totalCount={totalCount} id={id} />
    <p>
      <Link href="/">トップページ</Link>
    </p>
  </Layout>
)

export const  getStaticProps: GetStaticProps = async () => {
  const offset = "0";
  const id = 1;
  const items = await getSortedPostsData(offset);
  return { props: {
    items: items.sortData,
    totalCount: items.totalCount,
    id: id
} }
}

export default WithStaticProps
