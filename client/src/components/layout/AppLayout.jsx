/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { sampleChats } from "../../constants/sampleData";
import Title from "../shared/Title";
import Chatlist from "../special/Chatlist";
import Header from "./Header";
import { Grid } from "@mui/material";
import Profile from "../special/Profile";

const AppLayout = ()=> WrappedComponent=> {
  
  
  // eslint-disable-next-line react/display-name
  return (props) => {
    const {chatId} = useParams();
    console.log(chatId);

    const handleDeleteChat = (e, _id, groupChat)=>{
      e.preventDefault();
      console.log("delete chat"), _id, groupChat;
    }
    


    return (
      <>
        <Title />
        <Header />

        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            item
            sm={4}
            md={3}
            height={"100%"}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Chatlist
              chats={sampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
            height={"100%"}
          >
            <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
