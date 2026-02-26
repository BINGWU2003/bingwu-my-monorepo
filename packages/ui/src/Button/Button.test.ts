import { describe, it, expect, beforeEach } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('应能成功创建 Button 实例', () => {
    const btn = new Button({ text: '点击我' });
    expect(btn).toBeInstanceOf(Button);
  });

  it('render 后 container 应包含 button 元素', () => {
    const btn = new Button({ text: '提交' });
    btn.render(container);
    const el = container.querySelector('button');
    expect(el).not.toBeNull();
  });

  it('button 的文本内容应与 props.text 一致', () => {
    const btn = new Button({ text: '确认' });
    btn.render(container);
    const el = container.querySelector('button');
    expect(el?.textContent).toBe('确认');
  });

  it('button 应有唯一的 id 属性', () => {
    const btn = new Button({ text: '按钮' });
    btn.render(container);
    const el = container.querySelector('button');
    expect(el?.id).toBeTruthy();
    expect(el?.id.length).toBeGreaterThan(0);
  });

  it('两个 Button 实例的 id 应不同', () => {
    const btn1 = new Button({ text: 'A' });
    const btn2 = new Button({ text: 'B' });
    btn1.render(container);
    btn2.render(container);
    const [el1, el2] = Array.from(container.querySelectorAll('button'));
    expect(el1.id).not.toBe(el2.id);
  });

  it('传入 onClick 时点击应触发回调', () => {
    let clicked = false;
    const btn = new Button({
      text: '触发',
      onClick: () => {
        clicked = true;
      },
    });
    btn.render(container);
    const el = container.querySelector('button')!;
    el.click();
    expect(clicked).toBe(true);
  });
});
