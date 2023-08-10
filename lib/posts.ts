export async function getSortedPostsData() {
  const res = await fetch('http://'+ process.env.API_URL +'/api/v1/posts')
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
  const res = await fetch('http://'+ process.env.API_URL +'/api/v1/posts')
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
  const res = await fetch('http://'+ process.env.API_URL +'/api/v1/post/'+ id)
  .then(response => {
    if (!response.ok) {
      throw new Error('エラーが発生しました');
    }
    return response.json();
  })

  return res[0]
}


export async function createPostData() {
  const res = await fetch('http://'+ process.env.API_URL +'/api/v1/post/')
  .then(response => {
    if (!response.ok) {
      throw new Error('エラーが発生しました');
    }
    return response.json();
  })

  return res[0]
}