import type {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  PropsWithChildren,
  PropsWithoutRef,
  ReactElement
} from 'react';

import type { ElementTypeToHTMLElement } from './elementTypeUtils';

/** `as` prop을 추가한 타입 */
type withAsProp<T> = { as?: T };

/** 다형성 컴포넌트의 props 타입 */
type PolymorphicComponentProps<T extends ElementType, P = {}> = PropsWithChildren<P & withAsProp<T>> &
  Omit<ComponentPropsWithoutRef<T>, keyof (P & withAsProp<T>)>;

/** 다형성 컴포넌트 렌더링 함수 */
export type PolymorphicRenderFunction<T extends ElementType, P = {}> = (
  props: PropsWithoutRef<PolymorphicComponentProps<T, P>>,
  ref: ForwardedRef<ElementTypeToHTMLElement<T>>
) => ReactElement | null;

/** 다형성 컴포넌트 타입 */
export type PolymorphicComponent<T extends ElementType, P> = <Element extends ElementType = T>(
  props: PolymorphicComponentProps<Element, P> & {
    ref?: ForwardedRef<ElementTypeToHTMLElement<Element>>;
  }
) => ReactElement;
