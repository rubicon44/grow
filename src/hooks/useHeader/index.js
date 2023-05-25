import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useCurrentUserName } from "../useCurrentUserName";
import { LinkToTaskCreate } from "../../components/containers/organisms/common/LinkToTaskCreate";

export const useHeader = () => {
  const currentUserName = useCurrentUserName();
  const spHeaderLinks = [
    {
      id: "tasks",
      url: "/tasks",
      text: <HomeOutlinedIcon />,
      clickedText: <HomeIcon />,
    },
    {
      id: "searches",
      url: `/searches`,
      text: <SearchOutlinedIcon />,
      clickedText: <SearchIcon style={{ fontSize: "1.8rem" }} />,
    },
    {
      id: "notifications",
      url: `/notifications`,
      text: <NotificationsOutlinedIcon />,
      clickedText: <NotificationsIcon />,
    },
  ];

  const pcHeaderLinks = [
    {
      id: "tasks",
      url: "/tasks",
      text: <HomeOutlinedIcon />,
      clickedText: <HomeIcon />,
    },
    {
      id: "searches",
      url: `/searches`,
      text: <SearchOutlinedIcon />,
      clickedText: <SearchIcon style={{ fontSize: "1.8rem" }} />,
    },
    {
      id: "notifications",
      url: `/notifications`,
      text: <NotificationsOutlinedIcon />,
      clickedText: <NotificationsIcon />,
    },
    {
      id: "tasks/create",
      url: "/tasks/create",
      text: <LinkToTaskCreate />,
      clickedText: <LinkToTaskCreate />,
    },
    {
      id: `${currentUserName}`,
      url: `/${currentUserName}`,
      text: <AccountCircleOutlinedIcon />,
      clickedText: <AccountCircleRoundedIcon />,
    },
  ];

  const headerLinksForAuth = [
    {
      id: "signIn",
      url: "/signIn",
      text: "ログイン",
    },
    {
      id: "signUp",
      url: "/signUp",
      text: "会員登録",
    },
  ];

  return {
    headerLinksForAuth,
    pcHeaderLinks,
    spHeaderLinks,
  };
};
