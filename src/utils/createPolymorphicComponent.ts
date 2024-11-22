import { ElementType, forwardRef } from 'react';

import { PolymorphicComponent, PolymorphicRenderFunction } from './\btypes/polymorphicTypes';

/**
 * 다형성 컴포넌트를 생성하는 함수
 * @param render 렌더링 함수
 * @param displayName 컴포넌트 이름
 * @returns 생성된 다형성 컴포넌트
 */
export const createPolymorphicComponent = <T extends ElementType = 'div', P = {}>(
  render: PolymorphicRenderFunction<T, P>,
  displayName?: string
) => {
  const Component = forwardRef(render);
  Component.displayName = displayName || 'PolymorphicComponent';
  return Component as unknown as PolymorphicComponent<T, P>;
};
