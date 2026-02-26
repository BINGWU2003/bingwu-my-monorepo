import { describe, it, expectTypeOf } from 'vitest';
import type { InputProps, InputEmits } from './types';

describe('InputProps 类型', () => {
  it('placeholder 字段应为 string 类型', () => {
    expectTypeOf<InputProps['placeholder']>().toBeString();
  });

  it('value 字段应为 string 类型', () => {
    expectTypeOf<InputProps['value']>().toBeString();
  });

  it('InputProps 对象结构应符合预期', () => {
    const props: InputProps = { placeholder: '请输入', value: '' };
    expectTypeOf(props).toMatchTypeOf<InputProps>();
  });
});

describe('InputEmits 类型', () => {
  it('InputEmits 应为函数类型', () => {
    expectTypeOf<InputEmits>().toBeFunction();
  });
});
