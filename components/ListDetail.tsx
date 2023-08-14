import * as React from 'react'
import { marked } from 'marked'
import { Post } from '../interfaces'


type ListDetailProps = {
  item: Post
}

const ListDetail = ({ item: post }: ListDetailProps) => (
  <div>
    <h1>タイトル {post.title}</h1>
    <p>ID: {post.id}</p>
    <p>タイトル: {post.title}</p>
    <p>本文:</p> <div dangerouslySetInnerHTML={{ __html: marked.parse(post.contentHtml)}} />
    <p>作成日: {post.createdAt}</p>
    <p>更新日: {post.updatedAt}</p>
  </div>
)

export default ListDetail
