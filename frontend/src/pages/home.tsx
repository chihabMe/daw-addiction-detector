import AddedValue from "../components/pages/home/AddedValue";
import Hero from "../components/pages/home/Hero";
import Introduction from "../components/pages/home/Introduction";
import OurNumbers from "../components/pages/home/OurNumbers";
import Reviews from "../components/pages/home/Reviews";
const introductions = [
  {
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate . Sit irure elit esse ea nulla sunt ex occaecat rep. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: "/images/home/doctor.svg",
  },

  {
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate . Sit irure elit esse ea nulla sunt ex occaecat rep. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: "/images/home/doctor.svg",
  },

  {
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate . Sit irure elit esse ea nulla sunt ex occaecat rep. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    image: "/images/home/doctor.svg",
  },
];
const HomePage = () => (
  <main className="min-h-screen px-4 relative ">
    <Hero />
    <Reviews />
    <OurNumbers/>
    {introductions.map((intro, idx) => (
      <Introduction
        key={`intro_item_${idx}`}
        body={intro.body}
        image={intro.image}
        reverse={(idx + 1) % 2 == 0}
      />
    ))}
  </main>
);

export default HomePage;
