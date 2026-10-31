
import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-[65vh] py-16 mt-4 flex items-center justify-center text-center">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-6 w-full">
                            <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-10">

                                <h1 className="text-3xl font-bold text-white mb-4">
                                    Login to read posts
                                </h1>

                                <p className="text-gray-300 text-base">
                                    Welcome! Please login to explore amazing blog posts.
                                </p>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full min-h-screen py-12 px-4">

            <Container>

                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Explore Our Blog
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg">
                        Discover stories, ideas and inspiration.
                    </p>
                </div>

               {/* Posts Grid */}
<div className="posts-grid">
    {posts.map((post) => (
        <div
            key={post.$id}
            className="post-grid-item"
        >
            <PostCard {...post} />
        </div>
    ))}
</div>

            </Container>

        </div>
    )
}

export default Home
