import styled from 'styled-components'


export const DelicacyUl = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const DelicacyLi = styled.li`
  width: 1.73rem;
  padding-top: .1rem;
  a{
    dispay: flex;
    flex-direction: column;
    color: #000;
    img{
      width: 100%;
      height: 1.15rem;
    }
    h3{
      padding-top: .1rem;
      font-size: .14rem;
      text-align: center;
    }
    p{
      font-size: .12rem;
      display: flex;
      span{
        flex: 1;
        margin-right: .1rem;
      }
    }
  }
`

