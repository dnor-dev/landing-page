interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "Whitepaper",
    link: "/Spunkysdx_Whitepaper.pdf",
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Spunkymap",
    link: "/#roadMap",
  },
  {
    id: 5,
    has_dropdown: false,
    title: "Investors Pitch",
    link: "/#",
  },
  {
    id: 6,
    has_dropdown: false,
    title: "FAQ",
    link: "/#faq",
  },
  {
    id: 7,
    has_dropdown: false,
    title: "Blog",
    link: "/#",
  },
];
export default menu_data;
