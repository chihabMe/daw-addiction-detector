import { StarIcon } from "@heroicons/react/24/solid";
import Container from "../../layout/Container";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface IReview {
  username: string;
  body: string;
  id: string;
  image: string;
  rating: number;
}
const reviews: IReview[] = [
  {
    id: "1",
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate d",
    username: "zino",
    image: "https://picsum.photos/80/80",
    rating: 4,
  },
  {
    id: "2",
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate d",
    image: "https://picsum.photos/80/80",
    username: "massi",
    rating: 4,
  },
  {
    id: "3",
    username: "lotfi",
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate d",
    image: "https://picsum.photos/80/80",
    rating: 3,
  },
  {
    id: "1",
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate d",
    username: "zino",
    image: "https://picsum.photos/80/80",
    rating: 4,
  },
  {
    id: "2",
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate d",
    image: "https://picsum.photos/80/80",
    username: "massi",
    rating: 4,
  },
  {
    id: "3",
    username: "lotfi",
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate d",
    image: "https://picsum.photos/80/80",
    rating: 3,
  },
];
const Reviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <Container>
      <section className="py-8 ">
        <h1 className="text-text-darker dark:text-text-ligther py-8  font-bold text-3xl">
          What people said about us
        </h1>

        <ul
          ref={ref}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  "
        >
          {reviews.map((review, idx) => (
            <ReviewItem inView={inView} index={idx} review={review} />
          ))}
        </ul>
      </section>
    </Container>
  );
};

const ReviewItem = ({
  review,
  index,
  inView,
}: {
  review: IReview;
  index: number;
  inView: boolean;
}) => {
  const animate = useAnimation();
  if (inView) {
    animate.start({
      opacity: 1,
      scale:1,
      transition: {
        delay: 0.1 * index,
        type: "tween",
        duration: 0.5,
      },
    });
  }
  console.log(inView)

  const starts = [];
  for (let i = 0; i < review.rating; i++) {
    starts.push(<StarIcon className="text-yellow-400 w-4 h-4" />);
  }
  return (
    <motion.li
      initial={{opacity:0,scale:0.8}}
      animate={animate}
      className="rounded-xl   cursor-pointer hover:shadow-lg shadow p-4 bg-gray-50 dark:bg-dark "
    >
      <div className="   flex gap-2 items-center">
        <img className="rounded-xl bg-blue-400 w-10  h-10 p-2" />
        <h1 className="font-bold capitalize text-[19px] text-text-darker dark:text-text-ligther">
          {review.username}
        </h1>
        <div className="flex gap-1 items-center">{starts}</div>
      </div>
      <p className="text-text-darker text-sm py-2 font-bold  text-sm dark:text-text-ligther font-medium">
        {review.body}
      </p>
    </motion.li>
  );
};

export default Reviews;
