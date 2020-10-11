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
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Example() {
    return (
        <Accordion allowZeroExpanded="true">
         <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Bootcamper Network App
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    For our four-week final project on the School of Code bootcamp our team built a ‘one stop shop’ for information and communications relating to the School of Code network of bootcampers, mentors, and employers. Here's some of the tech we used: <ul><li>React</li><li>Made it a Progressive Web App</li><li>Interfaced with the Meetup API using the OAuth strategy</li><li>Used web sockets for our chat feature</li><li>Authenticated logins using Firebase</li><li>Hosted our PostgreSQL database using AWS RDS and AWS Elastic Beanstalk</li></ul> We used technologies we were familiar with but also pushed ourselves to learn new ones. We worked in an agile way, breaking the build down into distinct phases and iterating through each of them. See the finished result <a href="https://bootcamper-network.netlify.app/">here</a>.   
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
                    <p>Shipston Museum is based in the village of Shipston on Stour. They wanted a simple website to show visiting hours and their location, some of the photographs that are part of their collection, a podcast episode recorded with the museum curators, and downloadable forms for prospective volunteers and donators to fill in.
                    The website is static, built using mainly HTML, CSS, and JavaScript. I used media queries to make it responsive on both desktop and mobile. Visit the website <a href="http://shipstonmuseum.co.uk/">here</a></p>
                    <img src={shipland} className={css.img} height="250px" alt="screenshot of shipston website" />
                    <img src={shipgall} className={css.img} height="250px" alt="screenshot of shipston website" />
                    <img src={shipform} className={css.img} height="250px" alt="screenshot of shipston website" /><br></br>
                    <img src={shipmob} className={css.img} height="250px" alt="screenshot of shipston website" />
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
                    This course combined education with a network of motivated individuals. It provided an opportunity to put the skills learnt into practice by working with a group to create a website. The skills included:
<ul><li>Use of HTML, CSS, and Javascript.</li>
<li>Git, Github and Version Control.</li> 
<li>Bootstrap and JQuery.</li>
<li>Consideration for User Experience (UX).</li></ul>

Our group won the competition for the website we created. The website can be viewed <a href="https://nevillejodie.github.io/group_project/home.html">here</a>.   

The feedback for our website was as follows: <br></br>
"This website is gorgeous, I absolutely love the design and it was great that you backed up your design decisions in your presentation by referencing your target audience. I was impressed by how you've gone the extra mile to source fonts and think through your UX.
The interactive elements of the website were very impressive. The hover and drop-down features meant it already felt dynamic and engaging even in your limited time. It was clear in your presentation that you'd worked well together as a team and made collaborative decisions. Well done!!!!"
                    </p>
                    <img className={css.img} height="250px" alt="screenshot of bhub website" src={bhub}></img>
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
                    Our team of three had 1 week to build and present solutions to a problem posed to us by the West Midlands Combined Authority on managing their contract process more efficiently using technology. We built a full-stack solution, represented on the front-end in a React App with form and automated email functionality. We completed this project using the agile methodology, having regular stand-ups and communicating effectively as a team. I worked on the front-end using state to manage the logic for our React components and ensuring fetches from and posts to our database were effective. You can view the repos on my <a href="https://github.com/nevillejodie">GitHub</a>. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Greg Can Help
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                 I made <a href="https://greghelp.co.uk/index.html" rel="noopener noreferrer" target="_blank">this website</a> for a local handyman. He wanted a simple front end where he could store his prices and contact details in a clear and accessible way. 
                    </p>
                    <img src={greghelp} className={css.img} height="250px" alt="screenshot of handyman website" />
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}