import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using a CORS proxy to fetch Medium RSS feed
        const response = await fetch(
          'https://api.allorigins.win/get?url=' + 
          encodeURIComponent('https://medium.com/feed/@neeshant')
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        if (!data.contents) {
          throw new Error('No content received');
        }

        // Parse the XML content
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const processedPosts = Array.from(items).map(item => {
          // Get the content encoded section
          const content = item.querySelector('content\\:encoded, encoded')?.textContent || '';
          
          // Extract the first image from the content
          const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
          const image = imgMatch ? imgMatch[1] : null;

          // Clean up the description
          const description = item.querySelector('description')?.textContent || '';
          const cleanDescription = description
            .replace(/<[^>]*>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

          return {
            title: item.querySelector('title')?.textContent || 'Untitled',
            link: item.querySelector('link')?.textContent || '#',
            pubDate: item.querySelector('pubDate')?.textContent || '',
            description: cleanDescription,
            guid: item.querySelector('guid')?.textContent || Date.now().toString(),
            image: image || `https://picsum.photos/seed/${Date.now()}/800/400`
          };
        });

        setPosts(processedPosts);
      } catch (err) {
        console.error('Error details:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blogPage">
      <div className="blogPageHeader">
        <Link to="/" className="backButton">
          <ArrowBackIcon />
          <span>Head Back</span>
        </Link>
        <h1>My Medium Posts</h1>
        <p>Thoughts on Technology, Startups and Entrepreneurship</p>
      </div>

      {loading && (
        <div className="loadingSpinner">
          <div className="spinner"></div>
          <p>Loading posts...</p>
        </div>
      )}

      {error && (
        <div className="errorMessage">
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retryButton">
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="noPostsMessage">
          <p>No blog posts found. Check back later!</p>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="blogPageContainer">
          {posts.map((post) => (
            <a 
              key={post.guid} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blogPageCard"
            >
              <div 
                className="blogPageImage" 
                style={{ 
                  backgroundImage: `url(${post.image})`,
                  backgroundColor: 'rgba(0, 243, 255, 0.1)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="blogOverlay" />
              </div>
              <div className="blogPageContent">
                <div className="blogPageHeader">
                  <BookIcon className="blogIcon" />
                  <h3>{post.title}</h3>
                </div>
                <p>{post.description.substring(0, 200)}...</p>
                <div className="blogPageMeta">
                  <span>{new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <ArrowOutwardIcon className="arrowIcon" />
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage; 