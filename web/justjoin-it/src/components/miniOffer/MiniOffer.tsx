import { Paragraph, Title, DetailsSection, LogoContainer, MiniOfferCon, AmountBox, MiniLogoImg } from "./styled";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import { SmallOffer } from "../../types/types";
import { StyledLink } from "../topBar/styled";

const MiniOffer = ({ logo, title, amount, companyName, city, _id }: SmallOffer) => {
  return (
    <StyledLink to={`/offer/${_id}`}>
      <MiniOfferCon>
        <LogoContainer>
          <MiniLogoImg alt="logo" src={logo}></MiniLogoImg>
        </LogoContainer>
        <Title>
          <Typography variant="subtitle4">{title}</Typography>
        </Title>
        <AmountBox>
          {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
          {amount && <Typography variant="subtitle3">{amount} PLN</Typography>}
        </AmountBox>
        <DetailsSection>
          <BusinessIcon />
          <Paragraph>{companyName}</Paragraph>
          <LocationOnIcon />
          <Paragraph>{city}</Paragraph>
        </DetailsSection>
      </MiniOfferCon>
    </StyledLink>
  );
};

export default MiniOffer;
