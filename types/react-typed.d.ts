declare module "react-typed" {
  import * as React from "react";

  export interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    backDelay?: number;
    startDelay?: number;
    showCursor?: boolean;
    cursorChar?: string;
  }

  const Typed: React.FC<TypedProps>;
  export default Typed;
}
