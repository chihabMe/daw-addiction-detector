import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";

const SubmittedQuizDetails = () => {
  const { submissionId } = useParams();
  return (
    <main className="min-h-screen">
      <section>
        <Link to={"/dashboard/submitted"}>
          <Button className="px-4 py-2 ">
            <ArrowLeftIcon className="w-4 h-4 text-white" />
          </Button>
        </Link>
      </section>
      <section>{submissionId}</section>
    </main>
  );
};

export default SubmittedQuizDetails;
