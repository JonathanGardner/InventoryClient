import React from 'react';
import styled from 'styled-components';
import star from '../../images/Star.png';

const StarImage = styled.img`
  width: 20px;  // Adjust size as needed
  height: 20px;  // Adjust size as needed
`;

function Rating({rating}) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<StarImage key={i} src={star} alt="star" />);
    } else {
      stars.push(<StarImage key={i} src={star} alt="star" style={{opacity: 0.5}} />);
    }
  }

  return (
    <div>
      {stars}
    </div>
  );
}

export default Rating;
