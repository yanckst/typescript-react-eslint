export type JSSProperty =
  | React.CSSProperties
  | {
      [key: string]: JSSProperty;
    };
