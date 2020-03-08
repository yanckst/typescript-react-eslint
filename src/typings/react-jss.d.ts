declare module "react-jss" {
  export function createUseStyles<TStyle>(
    style: TStyle
  ): TStyle extends (...args: any) => any
    ? (data?: any) => Record<Extract<keyof ReturnType<TStyle>, string>, string>
    : (data?: any) => Record<Extract<keyof TStyle, string>, string>;
}

export * from "react-jss";
