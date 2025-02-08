export default function Loading() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-4 bg-gray-200 animate-pulse h-40 rounded-lg" />
            ))}
        </div>
    );
}
