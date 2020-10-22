import React from 'react';
import bhub from '../../Images/bhub.png'
import bootcamp from '../../Images/bootcamper menu.png'
import bootcamp2 from '../../Images/bootcamper network.png'
import bootcamp3 from '../../Images/bootcamper profile.png'
import shipland from '../../Images/ShipstonLanding.png'
import shipgall from '../../Images/ShipstonGallery.png'
import shipmob from '../../Images/ShipstonMobile.png'
import shipform from '../../Images/ShipstonForms.png'
import greghelp from '../../Images/greghelp.png'
import css from './projects.module.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid
} from '@material-ui/core/'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'react-accessible-accordion/dist/fancy-example.css';
const useStyles = makeStyles({
  root: {
    maxWidth: 945,
    flexGrow: 1,
  },
});
 
export default function Example() {
    const classes = useStyles();
    return (
        <>
        <Grid container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
        <Grid item md={6}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={bootcamp3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bootcamper Network App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          For our four-week final project on the School of Code bootcamp our team built a ‘one stop shop’ for information and communications relating to the School of Code network. Here's some of the tech we used: <ul><li>React</li><li>Made it a Progressive Web App</li><li>Interfaced with the Meetup API using the OAuth strategy</li><li>Used web sockets for our chat feature</li><li>Authenticated logins using Firebase</li><li>Hosted our PostgreSQL database using AWS RDS and AWS Elastic Beanstalk</li></ul> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://bootcamper-network.netlify.app/">
          Visit the App
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md={6}>
    <Card p={1} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={shipland}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shipston Museum
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Shipston Museum is based in the market town of Shipston on Stour. They wanted a simple website to show visiting hours and their location, some of the photographs that are part of their collection, a podcast episode recorded with the museum curators, and downloadable forms for prospective volunteers and donators to fill in.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <>The website is static, built using HTML, CSS, and JavaScript. I used media queries to make it responsive on both desktop and mobile.</> 
          </Typography>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={shipgall}
          title="Contemplative Reptile"
        />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="www.shipstonmuseum.co.uk">
          Visit the Website
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
        <Accordion allowZeroExpanded="true">
         <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Bootcamper Network App
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    For our four-week final project on the School of Code bootcamp our team built a ‘one stop shop’ for information and communications relating to the School of Code network. Here's some of the tech we used: <ul><li>React</li><li>Made it a Progressive Web App</li><li>Interfaced with the Meetup API using the OAuth strategy</li><li>Used web sockets for our chat feature</li><li>Authenticated logins using Firebase</li><li>Hosted our PostgreSQL database using AWS RDS and AWS Elastic Beanstalk</li></ul> We used technologies we were familiar with but also pushed ourselves to learn new ones. We worked in an agile way, breaking the build down into distinct phases and iterating through each of them. See the finished result <a className={css.link} href="https://bootcamper-network.netlify.app/">here</a>.   
                    </p>
                    <figure><img className={css.img} height="250px" alt="screenshot of bootcamp app" src={bootcamp3}></img>
                    <figcaption>Creating a profile on the Bootcamper Network App.</figcaption></figure>
                    <figure><img className={css.img} height="250px" alt="screenshot of bootcamp app" src={bootcamp}></img>
                    <figcaption>Opening the menu on the Bootcamper Network App.</figcaption></figure>
                    <figure><img className={css.img} height="250px" alt="screenshot of bootcamp app" src={bootcamp2}></img>
                    <figcaption>The Bootcamper Network App landing screen.</figcaption></figure>
                    
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Shipston Museum
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Shipston Museum is based in the market town of Shipston on Stour. They wanted a simple website to show visiting hours and their location, some of the photographs that are part of their collection, a podcast episode recorded with the museum curators, and downloadable forms for prospective volunteers and donators to fill in.
                    The website is static, built using HTML, CSS, and JavaScript. I used media queries to make it responsive on both desktop and mobile. Visit the website <a className={css.link} href="http://shipstonmuseum.co.uk/">here</a></p>
                    <figure> <img src={shipland} className={css.img} height="250px" alt="screenshot of shipston website" />
                    <figcaption>The Shipston Museum landing page.</figcaption></figure>
                   <figure> <img src={shipgall} className={css.img} height="250px" alt="screenshot of shipston website" />
                   <figcaption>The gallery.</figcaption></figure>
                   <figure><img src={shipform} className={css.img} height="250px" alt="screenshot of shipston website" />
                   <figcaption>Get Involved with downloadable forms.</figcaption></figure>
                    <figure><img src={shipmob} className={css.img} height="250px" alt="screenshot of shipston website" /><figcaption>
                        Listen to the podcast on mobile.
                    </figcaption></figure>
                    
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Code First: Girls 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    This course provided an opportunity to put the skills learnt into practice by working in a group to create a website. The skills included:
<ul><li>Use of HTML, CSS, and Javascript.</li>
<li>Git, Github and Version Control.</li> 
<li>Bootstrap and JQuery.</li>
<li>Consideration for User Experience (UX).</li></ul>

Our group won the competition for the website we created. The website can be viewed <a className={css.link} href="https://nevillejodie.github.io/group_project/home.html">here</a>.   

The feedback we received is as follows: 
<p>"This website is gorgeous, I absolutely love the design and it was great that you backed up your design decisions in your presentation by referencing your target audience. I was impressed by how you've gone the extra mile to source fonts and think through your UX.
The interactive elements of the website were very impressive. The hover and drop-down features meant it already felt dynamic and engaging even in your limited time. It was clear in your presentation that you'd worked well together as a team and made collaborative decisions. Well done!!!!"</p>

                    </p>
                    <figure><img className={css.img} height="250px" alt="screenshot of bhub website" src={bhub}></img></figure>
                    
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Greg can Help
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p> Greg the handyman wanted a simple website where he could store his prices and contact details. This was also built statically using HTML, CSS, and JavaScript. This is what Greg had to say:
                    <p className={css.quote}>"Jodie was really great at listening to what I wanted and created it for me at a low cost. It is so much easier being able to direct customers to a price list on a website than having to remember or type it out on an email. Thank you "</p>
                    </p>
                    <figure><img src={greghelp} className={css.img} height="250px" alt="screenshot of handyman website" /></figure> 
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        WMCA Contract Management App
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Our team of three had 1 week to build and present solutions to a problem posed to us by the West Midlands Combined Authority on managing their contract process more efficiently using technology. We built a full-stack solution, represented on the front-end in a React App with form and automated email functionality. We completed this project using the agile methodology, having regular stand-ups and communicating effectively as a team. I worked on the front-end using state to manage the logic for our React components and ensuring fetches from and posts to our database were effective. You can view the repos on my <a className={css.link} href="https://github.com/nevillejodie">GitHub</a>. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>
        </>
    );
}