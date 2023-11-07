import QuestionListItemSkeleton from './QuestionListItemSkeleton'

const QuestionsListSkeleton = () => {
  return (
    <div className='flex flex-col gap-2 '>
      <QuestionListItemSkeleton/>
      <QuestionListItemSkeleton/>
      <QuestionListItemSkeleton/>
      <QuestionListItemSkeleton/>
    </div>
  )
}

export default QuestionsListSkeleton
