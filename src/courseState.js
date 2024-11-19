// import images
import react from "./images/benefit.jpg";
import react2 from "./images/benefit.jpg";
import js from "./images/benefit.jpg";
import js2 from "./images/benefit.jpg";
import soon from "./images/benefit.jpg";
import soon2 from "./images/benefit.jpg";

export const CourseState = () => {
  return [
    {
      title: "Interaktive React va Redux",
      mainImg: react,
      secondaryImg: react2,
      url: "/courses/react",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
            price:"500",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
      ],
    },
    {
      title: "Tez kunda",
      mainImg: soon,
      secondaryImg: soon2,
      url: "/courses/soon",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
      ],
    },
    {
      title: "Interaktive JavaScript",
      mainImg: js,
      secondaryImg: js2,
      url: "/courses/javascript",
      awards: [
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
        {
          title: "lorem ipsum dolor",
          description:
            "Lorem ipsum dolor in pret sit amet, consectetur adipiscing elit in pret sit amet",
        },
      ],
    },
  ];
};