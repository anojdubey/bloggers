import { AppBar, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useRouter } from "next/router";

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const route = useRouter();
  return (
    //navigation bar
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <h1 style={{
          fontSize: isMobile&&"20px",
        }}>Bloggers.com</h1>
        {/* //To render content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "40%",
            flexDirection: "row",
          }}
        >
          <h2
            style={{
              cursor: "pointer",
              fontSize: isMobile&&"20px",

            }}
            onClick={() => route.push("/")}
          >
            Home
          </h2>
          {!isMobile && (
            <h2
              style={{
                cursor: "pointer",
              }}
            >
              Search
            </h2>
          )}
          <h2
            style={{
              cursor: "pointer",
              fontSize: isMobile&&"20px",
            }}
            onClick={() => route.push("/post")}
          >
            Posts
          </h2>
          {!isMobile && (
            <h2
              style={{
                cursor: "pointer",
              }}
            >
              Live
            </h2>
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: isMobile?"10px":"30px",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <AccountCircleRoundedIcon
              sx={{
                mb: !isMobile&&-2,
              }}
              fontSize={isMobile?"small":"large"}
            />
            {!isMobile && (
            <h4>UserName</h4>)}
          </div>
          <h2 style={{
            fontSize: isMobile&&"20px",
          }}>LogOut</h2>
        </div>
      </Toolbar>
    </AppBar>
  );
}
