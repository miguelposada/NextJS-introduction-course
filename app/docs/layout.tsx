import { ReactNode } from "react";

const DocsLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default DocsLayoutPage;
