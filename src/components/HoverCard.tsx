import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react';

interface HoverCardProps {
    icon: string
    title: string
    body: string
    url: string
}

function HoverCard({ icon, title, body, url }: HoverCardProps) {
    return (
        <div className="group relative bg-gray-100 rounded-sm px-10 py-12 cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-[#908cee] translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-out"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-4 text-left">
                {/* Icon */}
                <div className="flex">
                    <Image
                        src={icon}
                        alt={title}
                        width={48}
                        height={48}
                        className="w-12 h-12 animate-bounce [animation-duration:2s]"
                    />
                </div>
                
                <h3 className="text-black font-semibold text-lg">{title}</h3>
                
                <p className="text-gray-900 text-sm leading-relaxed">{body}</p>
                
                {/* Read More aligned left */}
                <div className="flex">
                    <a 
                        href={url}
                        className="inline-flex items-center text-black font-medium hover:underline"
                    >
                        Read More
                        <ArrowUpRight className="ml-1 w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HoverCard
