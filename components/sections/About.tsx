import Image from "next/image";
import MailIcon from "components/icons/Mail";
import GithubIcon from "components/icons/Github";
import LinkedinIcon from "components/icons/LinkedIn";
import profile from "utils/profile.json";

const About = () => {
  const { about } = profile;

  return (
    <div className="h-screen w-screen">
      <div className="md:h-1/4 h-1/6" />
      <div className="lg:w-1/2 w-3/4 max-w-5xl flex md:flex-row flex-col justify-between md:items-top items-center m-auto">
        <div className="flex flex-col md:mr-16 mr-0">
          <h1 className="mt-10 mb-10">Hi! I&apos;m {about.firstName}.</h1>
          <p>{about.bio}</p>
          <div className="flex flex-row mt-5">
            <a
              className="mr-6 transition hover:-translate-y-1"
              href={about.linkedinUrl}
            >
              <LinkedinIcon />
            </a>
            <a
              className="mr-6 transition hover:-translate-y-1"
              href={about.githubUrl}
            >
              <GithubIcon />
            </a>
            <a
              className="transition hover:-translate-y-1"
              href={`mailto:${about.email}`}
            >
              <MailIcon />
            </a>
          </div>
        </div>
        <div className="flex-grow flex-shrink-0 md:mt-0 mt-6">
          <Image
            className="w-full"
            src={about.profilePic}
            width={256}
            height={256}
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
