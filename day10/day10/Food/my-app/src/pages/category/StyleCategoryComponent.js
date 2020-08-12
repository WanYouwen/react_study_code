import styled from 'styled-components'
import border from 'styles/border.js'

const CategoryContainer = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`

const CategoryHeader = styled.header`
  height: .44rem;
  background: #ee7530;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContainer = border({
  component: styled.nav`
    width: 1.44rem;
    height: .3rem;
    display: flex;
    position: relative;

  `,
  color: '#fff',
  width: '1px',
  radius: 15,
})

const NavItem = styled.div`
  width: 50%;
  height: 100%;
  text-align: center
  line-height: .3rem;
  position: relative;
  left: 0;
  top: 0;
  z-index: 100;
  a{
    display: block;
    width: 100%;
    height: 100%;
    transition: all .2s ease-in;
    color: ${ props => props.active ? '#ee7530': '#fff'}
  }
`

const NavSlider = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: .15rem;
  position: absolute;
  left: ${ props => props.pos? 0 : '.72rem' };
  top: 0;
  transition: all .2s ease-in;
`

const CategoryContentContainer = border({
  component: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute!important;
    left:0;top:0;
    background: #fff;
  `,
  width: '1px 0 0 0 '
})


const CategorySilderBarNav = styled.ul`
  height: 100%;
  width: .93rem;
  background: #f3f3f3;
`

const CategorySilderBarNavItem = styled.li`
  width: 100%;
  height: .48rem;
  background: ${ props => props.active ? '#fff':''}
  text-align: center;
  line-height: .48rem;
  span{
    display: inline-block;
    height: 100%;
    border-bottom: .02rem solid #ee7530;
  }
`

const CategorySilderBarContent = styled.div`
  flex: 1;
  height: 100%;
  padding: .2rem;
  padding-top: 0;
  margin-top: .2rem;
`

const RouterContainer = styled.div`
  height: 100%;
  position: relative;

`

export {
  CategoryContainer,
  CategoryHeader,
  HeaderContainer,
  NavItem,
  NavSlider,
  CategoryContentContainer,
  CategorySilderBarNav,
  CategorySilderBarNavItem,
  CategorySilderBarContent,
  RouterContainer
}