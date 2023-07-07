import Navigation from "@/components/Navigation";
import { Container, Card, Grid ,Rating, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

export default function Posts({ data }) {

  return (
    <>
      <Navigation />
      <Container
        sx={{
          mt: "100px",
        }}
      >
        <Grid container spacing={2}>
          {data.map((post, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <PostCard title={post.title} img={post.image} desc={post.description} rating={post.rating.rate} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
const PostCard = ({ title, img ,rating}) => {
  return (
    <Card
      sx={{
        m: 4,
        p: 2,
        gap: "10px",
        minWidth: "220px",
        minHeight: "300px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.2s ease-in-out",
            cursor: "pointer",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        },
      }}
    >
      <Typography style={{textAlign:"center",fontSize:"16px",fontWeight:"700"}}>{title}</Typography>
      <Rating name="read-only" value={rating} readOnly />
      <img src={img} width={"200px"} height={"200px"} alt="" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <FavoriteIcon sx={{
            color: "red"
        }}/>
        <CommentIcon/>
        <ShareIcon/>
      </div>
    </Card>
  );
};
export const getServerSideProps = async (req, res) => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
};
