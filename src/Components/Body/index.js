import React from 'react';
import { MdRemoveRedEye } from 'react-icons/md'
import { 
  Container,
  LeftItem,
  H2,
  FollowButton,
  RightItem,
  PeopleViews
} from './style';

function Body() {
  return (
    <Container>
      <LeftItem>
        <H2>Gucci</H2>
        <FollowButton>Follow</FollowButton>
      </LeftItem>
      <RightItem>
        <MdRemoveRedEye size="40" fill="#858786"/>
        <PeopleViews>
          57 people are in website
        </PeopleViews>
      </RightItem>
    </Container>
  );
}

export default Body;