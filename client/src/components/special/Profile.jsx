import { Avatar, Stack, Typography } from "@mui/material";
import {Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalenderIcon} from "@mui/icons-material"

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"lorem Ipsum ahoi fhaioshf gasfoiug"}/>
      <ProfileCard heading={"Username"} text={"rerodo"} icon={<UsernameIcon/>}/>
      <ProfileCard heading={"Name"} text={"Rydhampreet Singh Gindra"} icon={<FaceIcon/>}/>

    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {icon && icon}

      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color={"gray"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
