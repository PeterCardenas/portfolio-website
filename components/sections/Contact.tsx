import LinkedText from "components/LinkedText";
import Link from "components/icons/Link";
import profile from "utils/profile.json";

const Contact = () => {
  const { about } = profile;

  return (
    <div className="relative w-screen h-screen short:pt-12 pt-20 lg:pt-40">
      <div className="lg:w-1/2 w-3/4 max-w-5xl mx-auto">
        <h1 className="mb-16 short:mb-12">Feel free to reach out!</h1>
        <p className="mb-12 short:mb-8">
          <strong>
            Whether you&apos;re hiring, working on a project, or just want to
            chat, feel free to{" "}
            <LinkedText href={`mailto:${about.email}`}>
              shoot me an email.
            </LinkedText>
          </strong>
        </p>
        <p>
          <strong>
            If you&apos;re looking to hire, here&apos;s{" "}
            <LinkedText href={about.resume}>my resume!</LinkedText>
          </strong>
        </p>
      </div>
      <div className="absolute left-0 bottom-0 px-4 lg:px-8 py-4 w-full bg-black text-white flex lg:flex-row flex-col items-center justify-between">
        <div className="items-end opacity-0 lg:inline-flex hidden">
          <p className="mr-1">Source</p>
          <Link theme="white" />
        </div>
        <p className="text-center">Designed and Coded by Peter Cardenas</p>
        <a
          className="inline-flex items-end group"
          href="https://github.com/PeterCardenas/portfolio-website"
        >
          <p className="mr-1">Source</p>
          <div className="mb-0.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <Link theme="white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
