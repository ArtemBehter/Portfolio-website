import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Best-knife-1.PNG";
import projImg2 from "../assets/img/Best-knife-2.PNG";
import projImg3 from "../assets/img/Best-knife-3.PNG";
import projImg4 from "../assets/img/Best-knife-4.PNG";
import projImg5 from "../assets/img/Best-knife-5.PNG";
import projImg6 from "../assets/img/Best-knife-6.PNG";
import projImg7 from "../assets/img/Best-knife-7.PNG";
import projImg11 from "../assets/img/Best-knife-11.PNG";
import projImg12 from "../assets/img/Best-knife-12.PNG";

import proj2Img1 from "../assets/img/Odd-rz1.PNG";
import proj2Img2 from "../assets/img/Odd-rz2.PNG";
import proj2Img3 from "../assets/img/Odd-rz3.PNG";
import proj2Img4 from "../assets/img/Odd-rz4.PNG";
import proj2Img5 from "../assets/img/Odd-rz5.PNG";
import proj2Img6 from "../assets/img/Odd-rz6.PNG";
import proj2Img7 from "../assets/img/Odd-rz7.PNG"; 

import proj3Img1 from "../assets/img/Frws1.PNG";
import proj3Img2 from "../assets/img/Frws2.PNG";
import proj3Img3 from "../assets/img/Frws3.PNG";
import proj3Img4 from "../assets/img/Frws4.PNG";
import proj3Img5 from "../assets/img/Frws5.PNG";
import proj3Img6 from "../assets/img/Frws6.PNG";
import proj3Img7 from "../assets/img/Frws7.PNG";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BEST-KNIFE.PL",
      description: "Strona główna",
      imgUrl: projImg1,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Podsekcje i katalogi",
      imgUrl: projImg2,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Hity sprzedaży(auto-slider)",
      imgUrl: projImg3,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Nowe produkty(auto-slider)",
      imgUrl: projImg4,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Akcje(auto-slider)",
      imgUrl: projImg5,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Nasze artykuły",
      imgUrl: projImg6,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Footer projektu",
      imgUrl: projImg7,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Katalog produktów",
      imgUrl: projImg11,
    },
    {
      title: "BEST-KNIFE.PL",
      description: "Filtr katalogu produktów",
      imgUrl: projImg12,
    },
  ];
  const projects_2 = [
    
    {
      title: "Oddaj-rzeczy.pl",
      description: "Strona główna",
      imgUrl: proj2Img1,
    },
    {
      title: "Oddaj-rzeczy.pl",
      description: "Sekcja 4 kroków",
      imgUrl: proj2Img2,
    },
    {
      title: "Oddaj-rzeczy.pl",
      description: "Sekcja o nas",
      imgUrl: proj2Img3,
    },
    {
      title: "Oddaj-rzeczy.pl",
      description: "Sekcja program pomocy",
      imgUrl: proj2Img4,
    },
    {
      title: "Oddaj-rzeczy.pl",
      description: "Sekcja kontaktowa",
      imgUrl: proj2Img5,
    },
    {
      title: "Oddaj-rzeczy.pl",
      description: "Sekcja tworzenia konta",
      imgUrl: proj2Img6,
    },
    {
      title: "Oddaj-rzeczy.pl",
      description: "Sekcja autoryzacji",
      imgUrl: proj2Img7,
    }
  ];
  const projects_3 = [
    
    {
      title: "Responsive-travel-react-website",
      description: "Strona główna",
      imgUrl: proj3Img1,
    },
    {
      title: "Responsive-travel-react-website",
      description: "Sekcja nawigacji",
      imgUrl: proj3Img2,
    },
    {
      title: "Responsive-travel-react-website",
      description: "Project footer",
      imgUrl: proj3Img3,
    },
    {
      title: "Responsive-travel-react-website",
      description: "Mobile version",
      imgUrl: proj3Img4,
    },
    {
      title: "Responsive-travel-react-website",
      description: "Mobile version",
      imgUrl: proj3Img5,
    },
    {
      title: "Responsive-travel-react-website",
      description: "Mobile version",
      imgUrl: proj3Img6,
    },
    {
      title: "Responsive-travel-react-website",
      description: "Mobile version footer",
      imgUrl: proj3Img7,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>W tej części możesz zobaczyć moje projekty.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BEST-KNIFE.PL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Oddaj-rzeczy.pl</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Responsive-travel-react-website</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content   id="slideInUp" className= { isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"><Row>
                        {
                          projects_2.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                                
                            )
                          })
                        }
                      </Row></Tab.Pane>
                    <Tab.Pane eventKey="third"><Row>
                    {
                          projects_3.map((project, index) => {
                            return (
                              <ProjectCard
                              key={index}
                              {...project}
                              />
                                
                            )
                          })
                        }
                      </Row></Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}