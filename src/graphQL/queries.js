import { gql } from "@apollo/client";


const GET_POSTS_INFO = gql`
query{
  posts{
    title,
    id,
    slug
    author{
      name,
      avatar{
        url
      }
    },
    coverPhoto{
      url
    },
  }
}
`

const GET_AUTHORS_INFO = gql`
query{
  authors{
    id
    avatar{
      url
    }
    name
    slug
  }
}
`

const GET_AUTHOR_INFO = gql`
query author($slug:String!){
 author(where:{slug:$slug}) {
  name
  filed
  avatar{url}
  about{html}
  posts{
    coverPhoto{url}
    title,
    id,
    slug
  }
 }
}
`
const GET_POST_INFO = gql`
query getPost($slug:String!){
  post(where:{slug:$slug}){
    title
    content{html}
    coverPhoto{url}
    author{
      avatar{url}
      slug
      name
      filed
    }
  }
}
`
const GET_POST_COMMENTS = gql`
query getPostComments($slug:String!) {
  comments(where: {post: {slug:$slug}}){
    id,
    name,
    text
  }
}
`

export { GET_POSTS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO, GET_POST_COMMENTS }