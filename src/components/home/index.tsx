import Banner from "./Banner";
import Brand from "./Brand";
import ChartArea from "./ChartArea";
import FAQ from "./Faq";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import RoadMapArea from "./RoadMapArea";
import SpunkySale from "./SpunkySale";
import Steps from "./Steps";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Banner />
      <Brand />
      <FeatureOne />
      <SpunkySale />
      <Steps />
      <FeatureTwo />
      <ChartArea />
      <RoadMapArea />
      <Team />
      <FAQ />
      {/* <DownloadArea /> */}
    </>
  );
};

export default Home;
