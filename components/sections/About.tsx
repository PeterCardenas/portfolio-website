import {about} from "utils/profile.json";

const About = () => {
  return <div className="h-screen w-screen">
    <div className="w-1/2 max-w-5xl flex flex-row justify-between">
      <div className="flex flex-col"><h1>Hi! I'm {about.bio}</h1></div>
    </div>
  </div>;
}

export default About;
