/* eslint-disable no-unused-vars */
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
const NewGroup = () => {
  const selectMemberHandler = () => {
    console.log("Handler");
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"30rem"}>
        <DialogTitle sx={{
          textAlign:"center"
        }}>New Group</DialogTitle>
        <TextField />

        <Typography sx={{
          textAlign:"center"
        }}>Members</Typography>
        <Stack>
          {sampleUsers.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
            />
          ))}
        </Stack>

        <Stack direction={"row"} sx={{
          justifyContent:"center"
        }}>
          <Button variant="text" color="error">Cancel</Button>
          <Button variant="contained">Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
