import React from "react";
import { Container, Typography, AppBar, Grid, Box, Fab } from "@material-ui/core"
import { ScrollTop } from "@material-ui/core"
// import { KeyboardArrowUpIcon } from "@material-ui/core"
import pfp from "./profile.png"
import passwordGenerator from "./passwordgenerator.png"
import eatDaBurger from "./eatdaburger.png"
import noteTaker from "./notetaker.png"
import weatherDashboard from "./weatherdashboard.png"
import foodFinder from "./foodfinder.png"
import fyre from "./fyre.png"




import resume from "./resume.pdf"
import { BrowserRouter as Router, Route } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Card, CardActionArea, CardContent, CardMedia, CardActions, Button } from "@material-ui/core"
// import {SvgIcon} from '@material-ui/core';
import "./app.css"



// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';


const Main = () => {
  document.title = "Ethan Lacy's Portfolio";
  return (

    <>
      <div className="container header">
        <div className="row">
          <img className="col-lg-4 col-sm-7 profileImg" height="525px" width="340px" src={pfp} alt="Ethan Lacy" />

          <div className="myInfo col-lg-6 d-flex flex-column justify-content-center">
            <div className="mt-3 mx-auto text-center">
            <h2>Hello, my name is</h2>
            <h1 className="name">Ethan Lacy</h1>
            <h5><i>Full-Stack Web Developer</i></h5>
            </div>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="mt-5 mx-auto"><button id="resumeBtn" className="btn"><h4>View my resume</h4></button></a>
            <div className="d-flex mt-5 mx-auto mb-3">
              <a href="https://github.com/Ethanl150" target="_blank" rel="noopener noreferrer"><GitHubIcon color="primary" className="github icon" /></a>
              <a href="https://www.linkedin.com/in/ethan-lacy-a4210819a/" target="_blank" rel="noopener noreferrer"><LinkedInIcon color="primary" className="icon" /></a>
              <a href="mailto: ethanlay150@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon color="primary" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light mt-5">
      <Grid container spacing={5}  justify="space-around">
        <Grid item lg={4} md={5} sm={7}>
          <Card className="card">
            <a href="https://ethanl150.github.io/PasswordGenerator/" target="_blank" rel="noopener noreferrer">
              <CardActionArea>
              <CardMedia
                component="img"
                alt="Password Generator"
                // height="140"
                image={passwordGenerator}
                title="Password Generator"
                className="cardMedia"
              />

              <CardContent className="text-center">
                <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                  Password Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that generates a random password according to the criteria determined by the end user.
                </Typography>
              </CardContent>
            </CardActionArea></a>
            <CardActions style={{ justifyContent: 'center'}}>
              <a href="https://github.com/Ethanl150/passwordgenerator" target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                GitHub Repository
              </Button></a>
            </CardActions>
          </Card>

        </Grid>


        <Grid item lg={4} md={5} sm={7}>

          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Eat-Da-Burger"
                // height="140"
                image={eatDaBurger}
                title="Eat-Da-Burger"
                className="cardMedia"
              />

              <CardContent className="text-center">
                <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                  Eat-Da-Burger
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that allows the user to "create" and "eat" burgers.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions  style={{ justifyContent: 'center' }}>
              <a href="https://github.com/Ethanl150/eat-da-burger" target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                GitHub Repository
              </Button></a>
            </CardActions>
          </Card>

        </Grid>


        <Grid item lg={4} md={5} sm={7}>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Note Taker"
                // height="140"
                image={noteTaker}
                title="Note Taker"
                className="cardMedia"
              />
              <CardContent className="text-center">
                <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                  Note Taker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that allows the user to create, view, edit, and delete notes.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
              <a href="https://github.com/Ethanl150/notetaker" target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                GitHub Repository
              </Button></a>
            </CardActions>
          </Card>
        </Grid>



        <Grid item lg={4} md={5} sm={7}>

          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Weather Dashboard"
                // height="140"
                image={weatherDashboard}
                title="Weather Dashboard"
                className="cardMedia"
              />

              <CardContent className="text-center">
                <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                  Weather Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that displays the weather of a specified city.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
              <a href="https://github.com/Ethanl150/weatherdashboard" target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                GitHub Repository
              </Button></a>
            </CardActions>
          </Card>

        </Grid>
      </Grid>

      <h1 className="text-center mt-5">Group projects</h1>

      <Grid container spacing={3} justify="space-around" className="mt-5">
        <Grid item lg={4} md={5} sm={7}>

          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Food Finder"
                // height="140"
                image={foodFinder}
                title="Food Finder"
                className="cardMedia"
              />

              <CardContent className="text-center">
                <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                  Food Finder
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that allows the user to search for places at which to eat in Philadelphia.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
              <a href="https://github.com/Ethanl150/foodfinder" target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                GitHub Repository
              </Button></a>
            </CardActions>
          </Card>

        </Grid>


        <Grid item lg={4} md={5} sm={7}>


          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Fyre"
                // height="140"
                image={fyre}
                title="Fyre"
                className="cardMedia"
              />

              <CardContent className="text-center">
                <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                  Fyre
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that allows the user to quickly discover new music.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center' }}>
              <a href="https://github.com/Ethanl150/fyre" target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                GitHub Repository
              </Button></a>
            </CardActions>
          </Card>

        </Grid>
      </Grid>
      </div>
    </>





  );
};

export default Main;

{/* <Router>
    //   <div>
    //        <Route exact path="/" component={Search} />
    //       <Route exact path="/signup" component={Signup} />
    //       <Route exact path="/search" component={Search} />
    //   </div>
    // </Router> */}


{/* <AppBar display="flex" position="sticky">
    <AppBar>
        <Grid display="flex" justify="space-between" p={3}>

          <Grid item lg={6} p={3}>
            <Typography variant="h4">Ethan Lacy</Typography>
          </Grid>
          <Grid item lg={6} p={3}>
            <Typography variant="h4">Contact Me</Typography>
          </Grid>
          
        </Grid>
      </AppBar>



      <Container fixed>
        <Typography variant="h1"> h1. heading </Typography>
    //   </Container>
    // </>



    //     <Box display="flex" p={1} bgcolor="background.paper">
    //       <Box p={1} flexGrow={1} bgcolor="grey.300">
    //         Item 1
    // </Box>
    //       <Box p={1} bgcolor="grey.300">
    //         Item 2
    // </Box>
    //       <Box p={1} bgcolor="grey.300">
    //         Item 3
    // </Box>
    //     </Box> */}