
type NewsCardProps = {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
};

export default function NewsCard({ title, description, url, imageUrl }: NewsCardProps) {
    return (
        <div className="border border-gray-200 rounded-lg shadow-md p-4">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-4">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            <a href={url} target="_blank" className="text-blue-600 mt-4 block">
                Read More
            </a>
        </div>
    );
}
