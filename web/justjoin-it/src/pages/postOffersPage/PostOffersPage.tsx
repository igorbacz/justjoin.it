import { Box } from "@mui/system";
import React, { Fragment } from "react";
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
