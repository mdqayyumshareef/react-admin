import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import Card from '../layout/card'
import { Post } from '../models/post.model'

export default function Posts() {

    const fetchPosts = async () => {
        const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        return data
    }

    const { isLoading, isError, data, error } = useQuery('posts', fetchPosts);

    return (
        <Card>
             {isLoading && <div>Loading..</div>}
            {isError && <div>Error fetching posts</div>}
            {data?.map(x => {
                return (
                    <div>{x.title}</div>
                )
            })}
        </Card>
    )
}
