import { FunctionComponent } from "react";

const ErrorFallback: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      Fallback Error if anything happens in client side during mount even though
      it not supposed to happens
    </div>
  );
};

export default ErrorFallback;
