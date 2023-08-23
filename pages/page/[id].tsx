import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import { Post } from '../../interfaces'
import {  getSortedPostsData,getAllPostIds } from '../../lib/posts'
import Layout from '../../components/Layout'
import List from '../../components/List'
import Pagination from '../../components/pagination'

type Props = {
    items: Post[]
    totalCount: number
    id: number
}

export const getStaticPaths: GetStaticPaths = async () => {
    const repos = await getAllPostIds();
    const perPage = Number(process.env.NEXT_PUBLIC_PER_PAGE);
    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(repos[0].params.totalCount / perPage)).map((repo) => `/page/${repo}`);
    return { paths, fallback: false };
}

export const  getStaticProps: GetStaticProps = async ({ params }) => {
    const id = Number(params.id);
    const perPage = Number(process.env.NEXT_PUBLIC_PER_PAGE);
    const offset = (id - 1) * perPage;
    const items = await getSortedPostsData(String(offset));
    return { props: {
        items: items.sortData,
        totalCount: items.totalCount,
        id: id
    } }
}


const  BlogPage= ({ items, totalCount, id }: Props) => (
    <Layout title="Posts List">
        <h1>投稿されたコンテンツ</h1>
        <List items={items} />
        <Pagination totalCount={totalCount} id={id} />
        <p>
            <Link href="/">トップページ</Link>
        </p>
    </Layout>
)

export default BlogPage