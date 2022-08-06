import { FC } from "react";
import { Container, TitleContainer } from "./styles";
import { COLORS } from "app/theme";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import IconAdd from "@mui/icons-material/AddRounded";
import IconArrowLeft from "@mui/icons-material/ArrowBackIosNewRounded";

interface AsideHeaderProps {
  onShowAllRooms: () => void;
  onShowRoomModal: () => void;
  showAllRooms: boolean;
}

const AsideHeader: FC<AsideHeaderProps> = ({
  onShowAllRooms,
  onShowRoomModal,
  showAllRooms
}) => {
  const title = showAllRooms ? "Channels" : "All channels";

  return (
    <Container>
      <TitleContainer>
        {showAllRooms ? null : (
          <IconButton
            disableRipple
            onClick={onShowAllRooms}
            sx={{ marginLeft: "-12px", marginRight: "12px", padding: "0" }}
          >
            <IconArrowLeft
              sx={{ height: "22px", width: "22px", fontSize: "22px" }}
            />
          </IconButton>
        )}

        <Typography variant="h1" component="h4">
          {title}
        </Typography>
      </TitleContainer>

      {showAllRooms && (
        <IconButton
          onClick={onShowRoomModal}
          sx={{
            borderRadius: "8px",
            padding: "4px",
            backgroundColor: COLORS.JAGUAR
          }}
        >
          <IconAdd sx={{ height: "24px", width: "24px", fontSize: "24px" }} />
        </IconButton>
      )}
    </Container>
  );
};

export default AsideHeader;
