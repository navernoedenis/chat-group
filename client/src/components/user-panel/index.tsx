import { FC, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "app/theme";

import {
  Container,
  Divider,
  IconArrow,
  IconButton,
  Menu,
  MenuItem,
  MenuItemIconBox,
  MenuItemText
} from "./styles";

import LogoutIcon from "@mui/icons-material/ExitToAppRounded";
import ProfileIcon from "@mui/icons-material/AccountCircleRounded";
import TweeterIcon from "@mui/icons-material/EmojiEventsRounded";

import UserCard from "components/user-card";

interface UserMenuProps {
  onLogout: () => void;
  user: User;
}

const UserMenu: FC<UserMenuProps> = ({ onLogout, user }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpened = Boolean(menuAnchorEl);

  const handleShowMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <Container>
        <UserCard user={user} />
        <IconButton onClick={handleShowMenu}>
          <IconArrow />
        </IconButton>
      </Container>

      <Menu
        anchorEl={menuAnchorEl}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        onClick={handleCloseMenu}
        onClose={handleCloseMenu}
        open={isMenuOpened}
        transformOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/profile">
          <MenuItem>
            <MenuItemIconBox>
              <ProfileIcon />
            </MenuItemIconBox>
            <MenuItemText variant="caption">My Profile</MenuItemText>
          </MenuItem>
        </Link>

        <Link to="/tweeter">
          <MenuItem>
            <MenuItemIconBox>
              <TweeterIcon />
            </MenuItemIconBox>
            <MenuItemText variant="caption">Tweeter</MenuItemText>
          </MenuItem>
        </Link>

        <Divider />

        <MenuItem onClick={onLogout}>
          <MenuItemIconBox>
            <LogoutIcon sx={{ color: COLORS.BURNT_SIENNA }} />
          </MenuItemIconBox>
          <MenuItemText variant="caption" sx={{ color: COLORS.BURNT_SIENNA }}>
            Logout
          </MenuItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
