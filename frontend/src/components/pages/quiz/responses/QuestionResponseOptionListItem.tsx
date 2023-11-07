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
  return (
    <li
      onClick={() => setResponseOption(option.id)}
      className={` py-[22px] rounded-md px-4 transition-all  flex gap-4  items-center duration-400 cursor-pointer  bg-gray-100 hover:bg-blue-500 hover:text-white font-medium ${
        isActive && "!text-white !bg-blue-500"
      }  `}
    >
      <div className={ `w-4 h-4 flex justify-center items-center rounded-full ring-2 ${isActive&&"ring-white"} ring-blue-500 ` }>
        <div className={` ${isActive&&"bg-white"} rounded-full w-3 h-3  `}></div>
      </div>
      <p>{option.text}</p>
    </li>
  );
};

export default QuestionResponseOptionListItem;
