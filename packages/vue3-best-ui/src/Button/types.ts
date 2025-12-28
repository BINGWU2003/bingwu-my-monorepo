type ButtonProps = {
  text: string;
};

type ButtonEmits = {
  (e: 'click'): void;
};

export type { ButtonProps, ButtonEmits };
