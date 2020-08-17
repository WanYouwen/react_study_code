import styled from 'styled-components';
import border from 'styles/border.js';
const SearchContainer = styled.div`
  margin: 0.12rem 0.15rem;
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 0.18rem;
    height: 0.18rem;
    margin-right: 0.06rem;
  }
  span {
    color: #979797;
    font-size: 0.14rem;
  }
`;

const SearchContent = border({
  component: styled.div`
    background: ${(props) => props.background || '#fff'};
  `,
  color: '#ee7530',
  radius: '6',
  width: (props) => (props.width ? '1px' : 0),
});

export { SearchContainer, SearchContent };
