interface CountProps {
    count: number
    topic: string
}

const Count = ({
    count,
    topic
}: CountProps) => {
    return (
        <div className="flex flex-col items-end justify-center">
            <div className="flex items-start justify-end">
                <span className="text-7xl font-medium">+</span>
                <span className="text-9xl font-semibold">{count}</span>
            </div>
            <p className="w-3/5 text-end text-gray-400">{topic}</p>
        </div>
    )
}

export default Count