export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "OZ: Video Effects & Cam",
    year: 2022,
    description: "Creative video effects app for iOS",
    url: "https://ozapp.co",
  },
  {
    title: "VR Résumé",
    year: 2014,
    description: "My old 3D and React based resume to view in Virtual Reality",
    url: "https://ozgungenc.com/reactvr/",
  }

];
