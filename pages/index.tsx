import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperience } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="z-0 h-screen overflow-x-hidden overflow-y-scroll text-white bg-black snap-y snap-mandatory scrollbar scrollbar-track-gray-400/30 scrollbar-thumb-[#edf1cf]/80">
      <Head>
        <title>AK Portfolio</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no"
        />
        <meta name="description" content="AK portfolio" />
        <link rel="icon" href="/logoAK.png" />
      </Head>

      <Header socials={socials} />
      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* about */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky w-full bottom-5">
          <div className="flex items-center justify-center">
            <img
              src="/logoAK.png"
              alt=""
              className="w-10 h-10 leading-[100px] rounded-full cursor-n-resize filter grayscale hover:grayscale-0"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      projects,
      experiences,
      skills,
      socials,
    },
    //revalidate cached data every 10 seconds
    revalidate: 10,
  };
};
