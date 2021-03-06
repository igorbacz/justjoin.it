import { Box } from "@mui/system";
import { Fragment } from "react";
import StepperForm from "../../components/offerForm/StepperForm";
import { PostOffers } from "../../components/postOffers/PostOffers";
import { TopBar } from "../../components/topBar/TopBar";

export const PostOffersPage = () => {
  return (
    <Fragment>
      <TopBar />
      <PostOffers />
    </Fragment>
  );
};
