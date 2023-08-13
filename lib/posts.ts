export async function getSortedPostsData() {
  const res = await fetch('http://'+ process.env.NEXT_PUBLIC_API_URL +'/api/v1/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('エラーが発生しました');
    }
    return response.json();
  })

    const sortData = res.sort(
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

  return sortData
}

export async function getAllPostIds() {
  const res = await fetch('http://'+ process.env.NEXT_PUBLIC_API_URL +'/api/v1/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('エラーが発生しました');
    }
    return response.json();
  })

  return res.map((post) => {
    return {
      params: {
        id: post.id,
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