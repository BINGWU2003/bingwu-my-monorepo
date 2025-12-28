interface InputProps {
  placeholder: string;
  value: string;
}

interface InputEmits {
  (e: 'input', value: string): void;
  (e: 'click', value: string): void;
}

export type { InputProps, InputEmits };
