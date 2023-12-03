import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className="w-full container  mx-auto">{children}</div>;
};

export default Container;
