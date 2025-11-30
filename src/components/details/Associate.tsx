import React from 'react'
import associateContribution from '../../assets/associate-contribution.png'
import FirstYearPost from '../../assets/first-year-post.png'
import { associateDetail } from '@/Constant'
import { ArrowLeft } from 'lucide-react'

const Associate = () => {
    return (
        <div className="py-12 px-6 flex justify-center">
            <article className="max-w-3xl w-full space-y-10">
                <div className="flex gap-3 justify-content-center items-center mb-6">
                    <ArrowLeft size={30}/>
                    {/* Blog Title */}
                    <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight">
                        {associateDetail.title}
                    </h1>
                </div>

                {/* Featured Image */}
                <div className="z-10">
                    <img
                        src={associateContribution}
                        alt="Associate Contribution"
                        className="z-10 w-full h-auto rounded-lg shadow-md "
                    />
                </div>

                {/* Blog Content */}
                <div className="text-left space-y-6 text-lg leading-relaxed app-text-primary">
                    <p>{associateDetail.description1}</p>

                    {/* Second Image */}
                    <img
                        src={FirstYearPost}
                        alt="First Year Post"
                        className="w-full h-auto rounded-lg shadow-md z-99"
                    />
                </div>

            </article>
        </div>
    )
}

export default Associate
