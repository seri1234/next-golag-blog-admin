import * as React from 'react'

import { Post } from '../interfaces'

type ListDetailProps = {
  item: Post
}

const ListDetail = ({ item: post }: ListDetailProps) => (
  <div>
    <h1>タイトル {post.title}</h1>
    <p>ID: {post.id}</p>
    <p>ID: {post.title}</p>
    <p>ID: {post.contentHtml}</p>
    <p>ID: {post.createdAt}</p>
    <p>ID: {post.updatedAt}</p>
  </div>
)

export default ListDetail
