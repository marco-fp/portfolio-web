import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div>
    <div id="mobile-menu-open" className="shadow-large">
      <i className="fa fa-bars" aria-hidden="true"></i>
    </div>

    <header>
      <div id="mobile-menu-close">
        <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <ul id="menu" className="shadow">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>


    <div id="lead">
      <div id="lead-content">
        <h1>Ryan Fitzgerald</h1>
        <h2>Software Engineer</h2>
        <a href="#" className="btn-rounded-white">Download Resume</a>
      </div>


      <div id="lead-overlay"></div>

      <div id="lead-down">
        <span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </span>
      </div>

    </div>


    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="heading">About Me</h2>
          </div>
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat. Donec
              eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. Quisque et tincidunt libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra. Vivamus nunc justo, finibus
              ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas, egestas ante et, congue eros. In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo.
                    </p>
          </div>
        </div>
      </div>
    </div>

    <div id="experience" className="background-alt">
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        <div data-date="September 2015 – September 2016">
          <h3>Employer Name</h3>
          <h4>Job Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
        </div>

        <div data-date="September 2015 – September 2016">
          <h3>Employer Name</h3>
          <h4>Job Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
        </div>

        <div data-date="September 2015 – September 2016">
          <h3>Employer Name</h3>
          <h4>Job Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
        </div>
      </div>
    </div>

    <div id="education">
      <h2 className="heading">Education</h2>
      <div className="education-block">
        <h3>University of Ottawa</h3>
        <span className="education-date">Sept 2016 - Sept 2017</span>
        <h4>Bachelor of Science in Computer Science</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
            </p>
      </div>

      <div className="education-block">
        <h3>University of Ottawa</h3>
        <span className="education-date">Sept 2016 - Sept 2017</span>
        <h4>Bachelor of Science in Computer Science</h4>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
        </ul>
      </div>
    </div>

    <div id="projects" className="background-alt">
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">
          <div className="project shadow-large">
            <div className="project-image">
              <img src="images/project.jpg" />
            </div>

            <div className="project-info">
              <h3>Project Name Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                        </p>
              <a href="#">View Project</a>
            </div>
          </div>

          <div className="project shadow-large">
            <div className="project-image">
              <img src="images/project.jpg" />
            </div>
            <div className="project-info">
              <h3>Project Name Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                        </p>
              <a href="#">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="skills">
      <h2 className="heading">Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Ruby</li>
        <li>Go</li>
        <li>Node.js</li>
        <li>AngularJs</li>
        <li>React</li>
        <li>Elixir</li>
        <li>Java</li>
        <li>C</li>
        <li>C#</li>
        <li>C++</li>
        <li>Ruby on Rails</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Ruby</li>
        <li>Go</li>
        <li>Node.js</li>
        <li>AngularJs</li>
        <li>React</li>
        <li>Elixir</li>
        <li>Java</li>
        <li>C</li>
        <li>C#</li>
        <li>C++</li>
        <li>Ruby on Rails</li>
      </ul>
    </div>

    <div id="contact">
      <h2>Get in Touch</h2>
      <div id="contact-form">
        <form method="POST" action="https://formspree.io/email@email.com">
          <input type="hidden" name="_subject" value="Contact request from personal website" />
          <input type="email" name="_replyto" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; 2017 YOUR NAME
                    </p>
          </div>
          <div className="col-sm-2 top">
            <span id="to-top">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a href="https://github.com/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://stackoverflow.com/" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default IndexPage;
