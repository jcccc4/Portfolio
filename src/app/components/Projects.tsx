import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      <h2 className="mt-10 ">PROJECTS</h2>
      <section className="flex flex-col mt-4 gap-4 md:flex-row ">
        <Card
          title={"Social Media Dashboard"}
          link={"https://social-media-dashboard-my7f3xfk9-jcccc4.vercel.app/"}
        >
          A social media dashboard with an easily switch button between light
          and dark modes for a customized viewing experience.
        </Card>
        <Card
          title={"Office Lite"}
          link={"https://officelite-coming-soon-site-gamma.vercel.app/"}
        >
          The website showcases a stylish and engaging 2-page coming soon
          landing page design with a countdown timer.
        </Card>
        <Card
          title={"Interactive Rating Component"}
          link={"https://jcccc4.github.io/interactive-rating-component/"}
        >
          The Interactive Rating Component is a small project practicing
          handling user interactions while dynamically updating the DOM.
        </Card>
      </section>
    </div>
  );
};

export default Projects;
