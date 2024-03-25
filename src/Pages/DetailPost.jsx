import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContentPost from '../Components/ContentPost';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopButton from '../Components/TopButton';
import Preview from '../Components/Preview';

function DetailPost() {
  const baseUrl = '/recipes';
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });

  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='montaga-regular'>
      <Header />
      <Preview post={post} />
      <ContentPost post={post} />
      <Footer />
      <TopButton />
    </div>
  );
}

export default DetailPost;
