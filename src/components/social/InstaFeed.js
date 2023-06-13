import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const InstaFeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 80%;
  margin: auto; // centers the grid
  margin-top: 2%
`;

const InstaPost = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; // This enforces the square aspect ratio.
  overflow: hidden;
`;

const InstaImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InstaVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 50px auto;
  background-color: transparent;
  border: 5px solid black;
  color: #000;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  text-align: center;
`;

// New styled component for the title
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 2%;
  margin-top: 5%
`;



function InstaFeed() {
    const [instagramPosts, setInstagramPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(6); // Initial number of visible posts
  
    const token = 'IGQVJYaTN3bXhTbF9PSDhVcGp0OEx3YWd5eVluX08tT2VfQXlJeUdZAU2FrMXVoTC11c2ktQkhOYmhhdWFoTXE0UjVQTlFHRUZAYSHN0MWFGSXlqWVg1bksxdDYtbzQyQ2FHeDBrQlBtN2JhV3F2eFdNMgZDZD';
    const userId = '6273426379413233';
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{id,media_type,media_url}&access_token=${token}`)
          .then(response => response.json());
  
        const postsWithChildrenResolved = await Promise.all(result.data.map(async post => {
          if (post.children) {
            const childDetails = await fetch(`https://graph.instagram.com/${post.children.data[0].id}?fields=id,media_type,media_url&access_token=${token}`)
              .then(response => response.json());
  
            post.media_type = childDetails.media_type;
            post.media_url = childDetails.media_url;
          }
  
          return post;
        }));
  
        setInstagramPosts(postsWithChildrenResolved);
      };
  
      fetchData();
    }, []);
  
    return (
    <div>
        <Title>OUR FEED</Title>
        <InstaFeedContainer>
          {instagramPosts.slice(0, visiblePosts).map(post => (
            <InstaPost>
            {post.media_type === "IMAGE" ? (
                <InstaImage src={post.media_url} alt={post.caption} />
            ) : post.media_type === "VIDEO" ? (
                <InstaVideo src={post.media_url} controls />
            ) : null}
            </InstaPost>
          ))}
        </InstaFeedContainer>
        {visiblePosts < instagramPosts.length && (
          <ShowMoreButton onClick={() => setVisiblePosts(visiblePosts + 3)}>
            SHOW MORE
          </ShowMoreButton>
        )}
      </div>
    );
  }
  
  export default InstaFeed;
  
