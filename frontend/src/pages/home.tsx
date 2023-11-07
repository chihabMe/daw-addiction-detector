import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Link to="/quiz">
        <Button className="rounded-lg m-1">take a test</Button>
      </Link>
    </main>
  );
};
export default HomePage;
