import QuestionsList from "../components/pages/quiz/questions/QuestionsList";

const QuizPage = () => {
  return (
    <main className="min-h-screen">
      <section className="w-full max-w-screen-md  mx-auto py-6">
        <QuestionsList />
      </section>
    </main>
  );
};

export default QuizPage;
