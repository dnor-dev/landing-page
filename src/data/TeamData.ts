import { StaticImageData } from "next/image";

import teamImg_1 from "@/assets/img/team/Six-modified-modified.png";
import teamImg_2 from "@/assets/img/team/one-modified-modified.png";
import teamImg_3 from "@/assets/img/team/Two-modified-modified.png";
import teamImg_4 from "@/assets/img/team/Three-modified-modified.png";
import teamImg_5 from "@/assets/img/team/Four-modified-modified.png";
import teamImg_6 from "@/assets/img/team/Five-modified-modified.png";

export interface TeamDataType {
  id: number;
  img: StaticImageData;
  title: string;
  profession: string;
  desc: string;
  linkedIn: string;
  twitter: string;
}

const team_data: TeamDataType[] = [
  {
    id: 1,
    img: teamImg_2,
    title: "Rhys Armstrong",
    profession: "Web3 Content Publisher",
    desc: "Rhys Armstrong, a proactive and dedicated Web3 content publisher, is driven by his passion for digital evolution and the zeal to help others by creating engaging, easy-to-understand contents which provide invaluable insights into the workings of Web3 and dApps UI/UX",
    linkedIn: "https://www.linkedin.com/in/rhys-armstrong-339a981b7",
    twitter: "twitter.com/@Rypto__",
  },
  {
    id: 2,
    img: teamImg_1,
    title: "Raul Fajardo",
    profession: "Blockchain Developer",
    desc: "Raul Fajardo, a experienced leader in the digital landscape, known for his unrivaled Search Engine Optimization expertise and expansive web development portfolio. Endorsed by Google and attuned to the pulse of tech innovation, his proficiency spans from web technologies to cryptocurrencies.",
    linkedIn: "",
    twitter: "",
  },
  {
    id: 3,
    img: teamImg_3,
    title: "Wilson Ifeanyi",
    profession: "Cybersecurity Expert",
    desc: "Wilson Ifeanyi is a seasoned Cybersecurity Specialist, Cloud Infrastructure/Security expert, DevOps Engineer, and Project Management Professional.",
    linkedIn: "linkedin.com/in/wilson-okafor-205b78226",
    twitter: "",
  },
  {
    id: 4,
    img: teamImg_4,
    title: "Pierre Ortega",
    profession: "Software Engineer",
    desc: "Pierre as a vibrant Software Engineer skilled in JavaScript and web design.",
    linkedIn:
      "https://www.linkedin.com/in/pierre-ortega?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNzlsLDM%2FTIKbsGMQ0CwRXg%3D%3D",
    twitter: "",
  },
  {
    id: 5,
    img: teamImg_5,
    title: "Becco Eliacik",
    profession: "Web3 Developer",
    desc: "Becco’s is multi-talented and skilled in PHP Development, Web3 and dApp Development, Creative and Interactive Designs, and Project Management.",
    linkedIn:
      "Linkedin: https://www.linkedin.com/in/becco-eliacik-15019135?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ90WL7yXQ4uwN3%2BlbIQClQ%3D%3D",
    twitter: "https://twitter.com/dbbgrafx",
  },
  {
    id: 6,
    img: teamImg_6,
    title: "David Sanchez",
    profession: "QA Tester and Entrepreneur",
    desc: "David is a well-rounded individual who leverages his broad skill set to provide value in multiple areas: Entrepreneurship, Business Management, Customer Service and QA/App Testing.",
    linkedIn: "https://www.linkedin.com/in/david-s%C3%A1nchez-17b469167",
    twitter: "",
  },
];

export default team_data;
