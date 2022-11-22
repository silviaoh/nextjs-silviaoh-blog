import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {};
    colors: {
      white: string;
      black: string;
      gray: string;
      darkGray: string;
      deepDarkGray: string;
      purple: string;
    };
  }
}
