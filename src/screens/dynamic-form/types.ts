type Options = {
  label: string;
  value: string;
};

export type FormItem = {
  type: 'input' | 'dropdown' | 'checkbox';
  options?: Options[];
  label: string;
  placeholder: string;
  id: number;
  value?: string | number | boolean;
};
