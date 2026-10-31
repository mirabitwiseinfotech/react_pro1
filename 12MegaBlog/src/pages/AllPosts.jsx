
import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([])
            .then((response) => {
                if (response) {
                    setPosts(response.documents)
                }
            })
            .catch((error) => {
                console.log("Get Posts Error:", error)
            })
    }, [])

    return (
        <div className="w-full min-h-screen py-12 px-4">
            <Container>
                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        All Blog Posts
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg">
                        Explore all our latest stories and articles.
                    </p>
                </div>

                {/* Responsive Posts Grid */}
                <div className="posts-grid">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="post-grid-item"
                        >
                            <PostCard
                                $id={post.$id}
                                title={post.title}
                                featuredimage={post.featuredimage}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
