import { generateId } from '@bingwu-my-monorepo/shared';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export class Button {
  private id: string;
  private element: HTMLButtonElement;

  constructor(props: ButtonProps) {
    this.id = generateId();
    this.element = document.createElement('button');
    this.element.textContent = props.text;
    this.element.id = this.id;

    if (props.onClick) {
      this.element.addEventListener('click', props.onClick);
    }
  }

  render(container: HTMLElement): void {
    container.appendChild(this.element);
  }
}
