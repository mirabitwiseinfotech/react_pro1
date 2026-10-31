import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function PostCard({ $id, title, featuredimage }) {

    return (
        <Link to={`/post/${$id}`} className="block h-full">

            <div className="
                w-full h-full
                min-h-[290px]
                flex flex-col
                bg-white/10
                backdrop-blur-xl
                border border-white/15
                rounded-2xl
                p-3
                shadow-lg
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:border-purple-400/60
                hover:shadow-purple-500/20
            ">

                {/* Fixed image size */}
                <div className="w-full h-[180px] shrink-0 overflow-hidden rounded-xl">

                    <img
                        src={appwriteService.getFilePreview(featuredimage)}
                        alt={title}
                        className="
                            w-full h-full
                            object-cover
                            rounded-xl
                            transition-transform duration-500
                            hover:scale-110
                        "
                    />

                </div>

                {/* Card title */}
                <div className="flex-1 flex items-center pt-3">

                    <h2 className="
                        text-lg
                        font-bold
                        text-white
                        line-clamp-2
                        leading-6
                    ">
                        {title}
                    </h2>

                </div>

            </div>

        </Link>
    )
}

export default PostCard