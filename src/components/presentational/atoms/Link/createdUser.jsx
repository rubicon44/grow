import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CreatedUserCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export function CreatedUser(props) {
  const link = props.link;
  return (
    <CreatedUserCover>
      作成者:{link}
    </CreatedUserCover>
  )
}

CreatedUser.propTypes = {
  link: PropTypes.object
};