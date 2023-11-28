import FeaturedProperty from "@/components/customer/page/home/FeaturedProperty";
import HeroBanner from "@/components/customer/page/home/HeroBanner";
import Image from "next/image";
import { Stack } from "@mui/material";
import RecentProperyListed from "@/components/customer/page/home/RecentProperyListed";
import OurAwards from "@/components/customer/page/home/OurAwards";
import FeaturedAgents from "@/components/customer/page/home/FeaturedAgents";
import OfferPackages from "@/components/customer/page/home/OfferPackages";
import HaveQuestion from "@/components/customer/page/home/HaveQuestion";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Stack direction="column" gap={15}>
        <HeroBanner />
        <FeaturedProperty />
        <RecentProperyListed />
        <OurAwards />
        <FeaturedAgents />
        <OfferPackages />
        <HaveQuestion />
       
      </Stack>
    </>
  );
}
