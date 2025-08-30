import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import { projects } from "./projects/project-data";
import { formatDate, getBlogPosts } from "./lib/posts";
import { MediumComponent } from "./components/medium";
import { SubstackComponent } from "./components/substack";
import { BlogSection } from "./components/blog-section";
import { YouTubeComponent } from "./components/youtube";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SiMedium, SiSubstack } from "react-icons/si";

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg text-blue-900 dark:text-blue-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mx-2"
    >
      <Icon />
    </a>
  );
}

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium text-blue-900 dark:text-blue-200">Visual AI Engineer</h1>
      <div className="prose prose-neutral dark:prose-invert" style={{ textAlign: "justify" }}>
        <p>
          Experienced Software Engineer with a strong background in Image Processing. Proven expertise in 3D Computer Vision, Computer Graphics and Neural Graphics. Skilled in rapid prototyping and driving projects from concept to completion. Seeking a position as a CV/ML Engineer to leverage my skills in developing innovative solutions.
        </p>
      </div>

      {/* Social Links Section - Under Bio */}
      <section className="flex justify-start mb-8 mt-8">
        <div className="flex items-center gap-2">
          <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
          <SocialLink href={socialLinks.github} icon={FaGithub} />
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          <SocialLink href={socialLinks.medium} icon={SiMedium} />
          <SocialLink href={socialLinks.substack} icon={SiSubstack} />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
        </div>
      </section>

      <section className="mt-12">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-lg font-medium mb-2 text-blue-900 dark:text-blue-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer">
                  {project.title}
                </h3>
              </a>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            View all projects →
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="mt-12 mb-12">
        <BlogSection
          showHeading={true}
          maxPosts={3}
          showEmbeds={true}
          isMainPage={true}
        />
        <div className="mt-6">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            View all blog posts →
          </Link>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="mt-12 mb-12">
        <h2 className="text-xl font-semibold mb-6 text-blue-900 dark:text-blue-200">My AI Shorts</h2>
        <div className="space-y-8">
            <div>
              <p className="prose prose-neutral dark:prose-invert text-left mb-4 max-w-none">
                <b>Nth Industrial Revolution </b> (August 2025)
              </p>
              <div className="flex justify-center">
                <YouTubeComponent videoId="D9A4hVWdbvs" />
              </div>
            </div>
          <div>
            <p className="prose prose-neutral dark:prose-invert text-left mb-4 max-w-none">
              <b>Fault </b> (September 2024) 
            </p>
            <div className="flex justify-center">
              <YouTubeComponent videoId="kl-KrQOy8yM" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
