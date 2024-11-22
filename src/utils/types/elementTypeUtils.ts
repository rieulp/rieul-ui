import type { DetailedHTMLProps, ElementType, HTMLAttributes } from 'react';

/** ElementType를 HTMLElement 타입으로 변환 */
export type ElementTypeToHTMLElement<T extends ElementType> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] extends DetailedHTMLProps<HTMLAttributes<infer E>, any>
    ? E
    : never
  : never;
