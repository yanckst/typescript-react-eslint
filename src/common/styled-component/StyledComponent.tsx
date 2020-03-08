import React from "react";
import { WithStyles } from "react-jss";

export class StyledComponent<TProps, TState, TStyle> extends React.Component<
  TProps & WithStyles<TStyle>,
  TState
> {
  constructor(props: TProps & WithStyles<TStyle>) {
    super(props);
  }
}

export interface StyledFunctionComponent<TProps, TStyle>
  extends React.FunctionComponent<TProps & WithStyles<TStyle>> {}
