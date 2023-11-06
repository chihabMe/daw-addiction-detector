import { useRouteError } from "react-router-dom";
import Header from "../components/layout/Header/Header";
interface RouterError {
  statusText: string;
  message: string;
}
const ErrorPage = () => {
  const error = useRouteError() as RouterError;
  console.error(error);
  return (
    <>
      <Header />
      <main className="">
        <section className="w-full max-w-[600px] mx-auto pt-10 text-xl">
        <h1>Oops!</h1>
        <p>Sorry ,an unexpected error has occurred.</p>
        <p className="text-2xl font-bold text-black">
          <i>{error.statusText || error.message}</i>
        </p>

        </section>
      </main>
    </>
  );
};
export default ErrorPage;
