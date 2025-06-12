const Card = (props) => {

    if (!props.data || !Array.isArray(props.data)) {
        return <p>Loading or no data available</p>;
    }
    return (
        <div className="app">
            {props.data.map((item, index) => (
                <div key={index} className="post-card">
                    <h2 className="post-title">{item.title}</h2>

                    {/* Author and Date */}
                    <p className="post-meta">
                        <strong>By:</strong> {item.author || 'Unknown'} |{' '}
                        <strong>Date:</strong> {new Date(item.pubDate).toLocaleString()}
                    </p>

                    {/* Thumbnail if available */}
                    {item.thumbnail && (
                        <img src={item.thumbnail} alt={item.title} className="post-thumbnail" />
                    )}

                    {/* If thumbnail is empty string, try enclosure.link */}
                    {!item.thumbnail && item.enclosure?.link && (
                        <img src={item.enclosure.link} alt={item.title} className="post-thumbnail" />
                    )}

                    <p className="post-body">{item.description}</p>

                    {/* Full content */}
                    <div className="post-content">{item.content}</div>

                    {/* Link to full article */}
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="post-link">
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Card;