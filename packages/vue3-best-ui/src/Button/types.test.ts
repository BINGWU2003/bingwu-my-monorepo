import { describe, it, expectTypeOf } from 'vitest';
import type { ButtonProps, ButtonEmits } from './types';

describe('ButtonProps 类型', () => {
  it('text 字段应为 string 类型', () => {
    expectTypeOf<ButtonProps['text']>().toBeString();
  });

  it('ButtonProps 对象结构应符合预期', () => {
    const props: ButtonProps = { text: '确认' };
    expectTypeOf(props).toMatchTypeOf<ButtonProps>();
  });
});

describe('ButtonEmits 类型', () => {
  it('ButtonEmits 应为函数类型', () => {
    expectTypeOf<ButtonEmits>().toBeFunction();
  });
});
