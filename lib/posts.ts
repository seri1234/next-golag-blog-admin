export async function getSortedPostsData() {
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/posts')
  const data = await res.json()

    const sortData = data.sort(
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
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/posts')
  const posts = await res.json()

  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch('http://'+ process.env.HOST_DOMAIN +'/api/v1/post/'+ id)
  const data = await res.json()

  return data[0]
}
