import Home from "@/components/home";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Spunky SDX",
};
const index = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default index;
