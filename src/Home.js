import React, { Component } from "react";
import "./App.css";

export default class Home extends Component {


  render() {
    return (
      <div>
        <head>
  <title>
    My Portfolio
  </title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap" rel="stylesheet" />
  <link href="fonts/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="log.js" />
</head>

<body>
  <header class="grid header-layout">
      <img class="logo"  />
      <ul>
        <li><a href=""></a></li>
        <li><a href="about.html"></a></li>
        <li><a href="contact.html"></a></li>
      </ul>
    </header>
  <div class="welcome-container grid">
    <div class="welcome-content grid">
      <div class="profile">
        <img
          src="" />
        <h1>Infant Michael</h1>
      </div>
      <h5 class="color-primary">Web Developer / Coach</h5>
    </div>
    <h4 class="desc">
      UI/UX Designer from Chennai, India. I specialize in clean, minimalistic
      aesthetic with a strong focus on User Experience, Web and Mobile
      Interface. Available for projects around the world.
      <a href="#" class="color-primary">Let’s talk</a>
    </h4>
  </div>
  <h2>Web Development</h2>
        <p>
          <em>Web development</em> is the work involved in developing a web site
          for the Internet (World Wide Web) or an intranet (a private network).[1]
          Web development can range from developing a simple single static page of
          plain text to complex web-based internet applications (web apps),
          electronic businesses, and social network services. A more comprehensive
          list of tasks to which web development commonly refers, may include web
          engineering, web design, web content development, client liaison,
          client-side/server-side scripting, web server and network security
          configuration, and e-commerce development.</p>
  
          <p>Among web professionals, "web development" usually refers to the main
          non-design aspects of building web sites: writing markup and coding.[2]
          Web development may use content management systems (CMS) to make content
          changes easier and available with basic technical skills.</p>
  
          <p>For larger organizations and businesses, web development teams can
          consist of hundreds of people (web developers) and follow standard
          methods like Agile methodologies while developing websites. Smaller
          organizations may only require a single permanent or contracting
          developer, or secondary assignment to related job positions such as a
          graphic designer or information systems technician. Web development may
          be a collaborative effort between departments rather than the domain of
          a designated department. There are three kinds of web developer
          specialization: front-end developer, back-end developer, and full-stack
          developer. Front-end developers responsible for behavior and visuals
          that run in the user browser, while back-end developers deal with the
          servers.Since the commercialization of the web, web development has been
          a growing industry. The growth of this industry is being driven by
          businesses wishing to use their website to advertise and sell products
          and services to customers.</p>
  
          <p>There are many open source tools for web development such as BerkeleyDB,
          GlassFish, LAMP (Linux, Apache, MySQL, PHP) stack and Perl/Plack. This
          has kept the cost of learning web development to a minimum. Another
          contributing factor to the growth of the industry has been the rise of
          easy-to-use WYSIWYG web-development software, such as Adobe Dreamweaver,
          BlueGriffon and Microsoft Visual Studio. Knowledge of HyperText Markup
          Language (HTML) or of programming languages is still required to use
          such software, but the basics can be learned and implemented quickly.
          </p>
          <p>An ever-growing set of tools and technologies have helped developers
          build more dynamic and interactive websites. Further, web developers now
          help to deliver applications as web services which were traditionally
          only available as applications on a desk-based computer. This has
          allowed for many opportunities to decentralize information and media
          distribution. Examples can be seen with the rise of cloud services such
          as Adobe Creative Cloud, Dropbox and Google Drive. These web services
          allow users to interact with applications from many locations, instead
          of being tied to a specific workstation for their application
          environment.</p>
  
          <p>Web development has also impacted personal networking and marketing.
          Websites are no longer simply tools for work or for commerce, but serve
          more broadly for communication and social networking. Web sites such as
          Facebook and Twitter provide users with a platform to communicate and
          organizations with a more personal and interactive way to engage the
          public.
        </p>
     
 <h2>Contact of Infant Michael</h2>
    <div class="grid contact-container">
      <div class="work-box">
        <i class="fa fa-clock-o"></i>
        <h5 class="box-title">Working hours</h5>
        <p>Find out opening hours and information.</p>
        <p>
          <strong>Mon-Fri:</strong> 8:00am – 19:00pm<br />
          <strong>Saturday:</strong> 8:00am – 13:00pm<br />
          <strong>Sunday:</strong> Closed
        </p>
      </div>
      <div class="address-box">
        <i class="fa fa-globe"></i>
        <h5 class="box-title">Corporate Office</h5>
        <p>
          <strong>Address:</strong>Web Development, <br />
          22/3 Sri ganesh enclave first main road, chrompet,Chennai,<br />
          Landmark(Saibaba kovil)<br />
          <br />
          <strong>Email:michaelinfant940@gmail.com</strong><br />
          <strong>Phone : +91 8675615515/+91 8637448421 </strong>
        </p>
      </div>
      <div class="contact-form">
        <h4>Contact us by email</h4>
        <p>
          Complete the contact form below and one of our dedicated Business
          Consultants will be in touch shortly.
        </p>
       
          <div class="box-contact grid  ">
          <input
            name="name"
            type="text"
            value=""
            placeholder="Name"
            required="required"
        /><input
            id="email"
            name="email"
            type="email"
            value=""
            placeholder="Email"
            required="required"
        /><input
            id="phone"
            name="phone"
            type="text"
            value=""
            placeholder="Phone Number"
            required="required"
        /><input
            id="subject"
            name="subject"
            type="text"
            value=""
            placeholder="Subject"
            required="required"
        /><textarea
            name="message"
            placeholder="Comment"
            required="required"
          ></textarea
        ><input
            name="submit"
            type="submit"
            id="contact_submit"
            class="submit"
            value="Sent Mail"
          />
        
      </div>
      </div>
    </div>
  

  <footer class="grid">
    <h4>Email : michaelinfant940@gmail.com</h4>
    <h4>Phone: +91 8675615515</h4>
      <ul class="social-icons">
      <li>
        <a  href="https://twitter.com/INFANT02629360"><i class="fa fa-twitter-square"></i></a>
      </li>
      <li>
        <a href="https://www.facebook.com/michael.infant.73"><i class="fa fa-facebook-square"></i></a>
      </li>
      <li>
        <a href="https://aboutme.google.com"><i class="fa fa-google-plus-square"></i></a>
      </li>
    </ul>
  </footer>
</body>
      </div>
    );
  }
}
