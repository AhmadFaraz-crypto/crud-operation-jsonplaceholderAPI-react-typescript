import {postsResponse} from '../data/posts/success'

export default [
  {
    id: 'get-posts',
    url: '/api/posts',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: postsResponse,
        },
      },
    ],
  },
] as const
