import styled from 'styled-components'
import border from 'styles/border.js'

const HotContainer = styled.div`
  background: #fff;
  .am-grid.am-grid-square .am-grid-item .am-grid-item-inner-content .am-grid-icon {
    width: .63rem!important;
    border-radius: .1rem!important;
  }
  .am-grid .am-flexbox .am-flexbox-item.am-grid-item{
    padding: .04rem 0;
  }
`

const HotTitle = border({
  component: styled.h2`
    height: .48rem;
    color: #666;
    font-size: .14rem;
    padding-left: .18rem;
    line-height: .48rem;
    font-weight: 100;
    margin-bottom: .1rem;
  `,
  width: '0 0 1px 0'
})



export {
  HotContainer,
  HotTitle
}