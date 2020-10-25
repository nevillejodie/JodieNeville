import React from 'react'
import bootcamp from '../../Images/bootcamper menu.png'
import bootcamp2 from '../../Images/bootcamper network.png'
import bootcamp3 from '../../Images/bootcamper profile.png'
import './styles.css'
import Fade from 'react-reveal'

const Projects2 = () => {
    return (<Fade>
        <div>
        <div class="text"><h3>Bootcamper Network App</h3>For our four-week final project on the School of Code bootcamp our team built a ‘one stop shop’ for information and communications relating to the School of Code network. Here's some of the tech we used: <ul><li>React</li><li>Made it a Progressive Web App</li><li>Interfaced with the Meetup API using the OAuth strategy</li><li>Used web sockets for our chat feature</li><li>Authenticated logins using Firebase</li><li>Hosted our PostgreSQL database using AWS RDS and AWS Elastic Beanstalk</li></ul> We used technologies we were familiar with but also pushed ourselves to learn new ones. We worked in an agile way, breaking the build down into distinct phases and iterating through each of them. See the finished result <a href="https://bootcamper-network.netlify.app/">here</a>.</div>
<div class="responsive">
<div class="gallery">
<img src={bootcamp} alt="example"/>
<div class="desc">Bootcamper Network App Navigation</div>
</div>
</div>
<div class="responsive">
<div class="gallery">
<img src={bootcamp2} alt="example"/>
<div class="desc">Bootcamper Network App Menu</div>
</div>
</div>
<div class="responsive">
<div class="gallery">
<img src={bootcamp3} alt="example"/>
<div class="desc">Bootcamper Network App Profile</div>
</div>
</div>

        </div>
        </Fade>
    )
}

export default Projects2