import QuestionsList from "../components/pages/quiz/questions/QuestionsList";
import Button from "../components/ui/Button";

const QuizPage = () => {
  return (
    <main className="min-h-screen">
      <section className="w-full max-w-screen-md  mx-auto py-6 px-2">
        <QuestionsList />
        <div className="flex gap-4 justify-end px-2 py-4 mt-4">
          <Button className="w-full   bg-red-400 rounded-lg">reset</Button>
          <Button className="w-full     rounded-lg">submit</Button>

        </div>
      </section>
    </main>
  );
};

export default QuizPage;
