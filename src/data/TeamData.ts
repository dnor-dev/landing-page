import { StaticImageData } from "next/image";

import teamImg_1 from "@/assets/img/team/Six-modified-modified (1).png";
import teamImg_2 from "@/assets/img/team/one-modified-modified.png";
import teamImg_3 from "@/assets/img/team/Two-modified-modified.png";
import teamImg_4 from "@/assets/img/team/Three-modified-modified.png";
import teamImg_5 from "@/assets/img/team/Four-modified-modified.png";
import teamImg_6 from "@/assets/img/team/Five-modified-modified.png";

interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  profession: string;
  linkedIn: string;
  twitter: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    img: teamImg_2,
    title: "Rhys Armstrong",
    profession: "Web3 Content Publisher",
    linkedIn: "https://www.linkedin.com/in/rhys-armstrong-339a981b7",
    twitter: "twitter.com/@Rypto__",
  },
  {
    id: 2,
    img: teamImg_1,
    title: "Raul Fajardo",
    profession: "Blockchain Developer",
    linkedIn: "",
    twitter: "",
  },
  {
    id: 3,
    img: teamImg_3,
    title: "Wilson Ifeanyi",
    profession:
      "Cybersecurity Specialist, Cloud Infrastructure/Security Expert, Project Management professional",
    linkedIn: "linkedin.com/in/wilson-okafor-205b78226",
    twitter: "",
  },
  {
    id: 4,
    img: teamImg_4,
    title: "Pierre Ortega",
    profession: "Software Engineer",
    linkedIn:
      "https://www.linkedin.com/in/pierre-ortega?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNzlsLDM%2FTIKbsGMQ0CwRXg%3D%3D",
    twitter: "",
  },
  {
    id: 5,
    img: teamImg_5,
    title: "Becco Eliacik",
    profession: "Web3 Developer, Project Manager",
    linkedIn:
      "Linkedin: https://www.linkedin.com/in/becco-eliacik-15019135?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ90WL7yXQ4uwN3%2BlbIQClQ%3D%3D",
    twitter: "https://twitter.com/dbbgrafx",
  },
  {
    id: 6,
    img: teamImg_6,
    title: "David Sanchez",
    profession: "QA Tester and Entrepreneur",
    linkedIn: "https://www.linkedin.com/in/david-s%C3%A1nchez-17b469167",
    twitter: "",
  },
];

export default team_data;
