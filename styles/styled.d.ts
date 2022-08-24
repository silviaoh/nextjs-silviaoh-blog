import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {};
    colors: {
      black: string;
      gray: string;
      darkGray: string;
      purple: string;
    };
  }
}
