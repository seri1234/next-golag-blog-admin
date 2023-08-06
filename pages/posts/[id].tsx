import { GetStaticProps, GetStaticPaths } from 'next'

import { Post } from '../../interfaces'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'

type Props = {
  item?: Post
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.title : 'Post Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = await getPostData(id)
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
