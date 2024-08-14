import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../../constants/color";
import {
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  Group as GroupIcon,
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { lazy, Suspense, useState, startTransition } from "react";

const SearchDialog = lazy(() => import("../special/Search"));
const NotificationDialog = lazy(() => import("../special/Notification"));
const NewGroupDialog = lazy(() => import("../dialogs/NewGroup"));
const Header = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearchDialog = () => {
    startTransition(() => {
      setIsSearch(!isSearch);
    });
  };

  const openNewGroup = () => {
    console.log("Hello")
    startTransition(() => {
      if(!isNewGroup) console.log("hello")
      setIsNewGroup((prev) => !prev);
    });
  };

  const openNotification = () => {
    startTransition(() => {
      setIsNotification((prev) => !prev);
    });
  };

  // const navigateToGroup = () => {
  //   return redirect("/groups");
  // };

  const navigateGroups = () =>{
    console.log("Hello")
    navigate("/groups")
  }

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chattu
            </Typography>
            <Box
              sx={{
                display: { sm: "none", xs: "block" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onclick={openSearchDialog}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onclick={openNewGroup}
              />
              <IconBtn
                title={"Manage Group"}
                icon={<GroupIcon />}
                onclick={navigateGroups}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onclick={openNotification}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onclick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onclick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

IconBtn.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Header;
