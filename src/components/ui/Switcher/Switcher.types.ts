export interface IValue {
  title: string;
  value: string | number;
}

export interface ISwitcherProps {
  readonly onChange: (value: IValue) => void;
  readonly values: Array<IValue>;
  readonly value: ISwitcherProps["values"][number];
  readonly className?: string;
}
