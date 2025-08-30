import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import { projects } from "./projects/project-data";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg hover:opacity-80 transition-opacity duration-200 mx-2"
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
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6 text-blue-900 dark:text-blue-200">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium mb-2 text-black dark:text-white">{project.title}</h3>
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
    </section>
  );
}
