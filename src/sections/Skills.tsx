import Card from "@/components/Card";
import { FC } from "react";

const Skills: FC = () => {
  return <section className="py-24 md:py-32 lg:py-40 xl:py-44">
    <div className="container">
        <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">Skills</h1>
        <div>
            <Card title="html" image={"image"} />
        </div>
    </div>
  </section>;
};

export default Skills;
