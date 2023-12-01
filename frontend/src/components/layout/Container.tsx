import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className="w-full max-w-screen-2xl mx-auto">{children}</div>;
};

export default Container;
