export async function getSortedPostsData(offset: string) {
  const limit = process.env.NEXT_PUBLIC_PER_PAGE
  const res = await fetch('http://'+ process.env.NEXT_PUBLIC_API_URL +'/api/v1/posts?offset=' + offset +'&limit=' + limit)
    .then(response => {
      if (!response.ok) {
        throw new Error('エラーが発生しました');
      }
      return response.json();
    })

  const sortData = res.allPosts.sort(
    (a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (b.createdAt > a.createdAt) {
        return 1;
      }
      return 0;
    }
  )

  return {
    sortData: sortData,
    totalCount: res.totalCount
  }
}

export async function getAllPostIds() {
  const res = await fetch('http://'+ process.env.NEXT_PUBLIC_API_URL +'/api/v1/postlist')
  .then(response => {
    if (!response.ok) {
      throw new Error('エラーが発生しました');
    }
    return response.json();
  })

  return res.allPosts.map((post) => {
    return {
      params: {
        id: post.id,
        totalCount: res.totalCount,
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch('http://'+ process.env.NEXT_PUBLIC_API_URL +'/api/v1/post/'+ id)
  .then(response => {
    if (!response.ok) {
      throw new Error('エラーが発生しました');
    }
    return response.json();
  })

  return res[0]
}


export async function createPost(title, content) {
  const res = await fetch('http://'+ process.env.NEXT_PUBLIC_API_URL +'/api/v1/post',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      contenthtml: content,
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('エラーが発生しました');
    }
    return response.json();
  })

  return res[0]
}