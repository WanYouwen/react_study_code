import  styled  from 'styled-components';
import border from 'styles/border.js'
const SearchContainer = styled.div`
  margin: .12rem .15rem;
  height: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: .18rem;
    height: .18rem;
    margin-right: 0.06rem;
  }
  span{
    color: #979797;
    font-size: .14rem;
  }
`


const SearchContent = border({
  component: styled.div`
    background: ${ props => props.background || '#fff' }
  `,
  color: '#ee7530',
  radius: '6',
  width: props => props.width ? '1px' : 0
})



export {
  SearchContainer,
  SearchContent
}