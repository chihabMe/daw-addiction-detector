import IQuestionResponseOption from "../../../../interfaces/IQuestionResponseOption";

interface Props {
  option: IQuestionResponseOption;
  chosedQuestionId: string;
  setResponseOption: (id: string) => void;
}
const QuestionResponseOptionListItem = ({
  option,
  chosedQuestionId,
  setResponseOption,
}: Props) => {
  const isActive = option.id == chosedQuestionId;
  console.log(isActive);
  console.log(option.id);
  console.log(chosedQuestionId);
  return (
    <li
      onClick={() => setResponseOption(option.id)}
      className={` py-6 rounded-lg px-4 transition-all duration-200 cursor-pointer  bg-gray-100 hover:bg-blue-500 hover:text-white font-medium ${
        isActive && "!text-white !bg-blue-500"
      }  `}
    >
      {option.text}
    </li>
  );
};

export default QuestionResponseOptionListItem;
