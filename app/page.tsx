import Image from "next/image";
import { socialLinks } from "./lib/config";

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
    </section>
  );
}
