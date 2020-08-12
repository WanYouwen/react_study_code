/* 
  分类页面的 ： 食材
*/

/* 
  分类页面的 ： 分类
*/

import {
  CategoryContentContainer,
  CategorySilderBarNav,
  CategorySilderBarNavItem,
  CategorySilderBarContent
} from './StyleCategoryComponent';

import React, { Component } from 'react';

import WrpperAnimate from 'components/HOC/WrpperAnimate'


class CategoryFoodMaterial extends Component {
  render() {
    return (
      <CategoryContentContainer>
            {/* 左侧导航 */}
            <CategorySilderBarNav>

              <CategorySilderBarNavItem
                active = 'true'
              >
                <span> 其他 </span>
              </CategorySilderBarNavItem>
            
            </CategorySilderBarNav>

            {/* 右侧内容 */}
            <CategorySilderBarContent>
              <div>
                巧克力
              </div>
            </CategorySilderBarContent>
          </CategoryContentContainer>
    );
  }
}

export default WrpperAnimate(CategoryFoodMaterial);

