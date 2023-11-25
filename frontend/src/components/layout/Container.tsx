import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className="w-full max-w-[1450px] mx-auto">{children}</div>;
};

export default Container;
