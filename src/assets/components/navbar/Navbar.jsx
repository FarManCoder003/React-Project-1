import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./navbar.css";
const Nav1 = () => {
  return (
    <>
      <Navbar expand="lg" id="nav">
        <Container>
          <Navbar.Brand href="#">
            <img src="https://i.postimg.cc/QtVLBm9d/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <h2>Product</h2>
              </Nav.Link>
              <Nav.Link href="#">
                <h2>Template</h2>
              </Nav.Link>
              <Nav.Link href="#">
                <h2>Blog</h2>
              </Nav.Link>
              <Nav.Link href="#">
                <h2>Pricing</h2>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#">
                <h3>Sign In</h3>
              </Nav.Link>
              <Nav.Link href="#">
                <button>Start Free</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* main start */}
      <section id="main">
        <img src="https://i.postimg.cc/v8SMJbGk/Main.png" width="100%" />
        <Container>
          <Row>
            <Col>
              <h2>Managing business payments has never been easier</h2>
              <h3>
                End-to-end payments and financial management <br /> in a single
                solution. Meet the right platform to help <br /> realize.
              </h3>
              <Row>
                <Col xs="5">
                  <button>Get Started</button>
                </Col>
                <Col xs="5">
                  <h4>See How It Works</h4>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      {/* main end */}
      <section>
        <Container>
          <img src="https://i.postimg.cc/HW5ndHQw/Companies.png" width="100%" />
        </Container>
      </section>
      {/* balance start */}
      <section id="balance">
        <img src="https://i.postimg.cc/T34jBgM2/Balance.png" width="100%" />
        <Container>
          <Row>
            <Col xs="7"></Col>
            <Col>
              <h2>Our Feature</h2>
              <h3>Receive payments quickly from anywhere</h3>
              <h4>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </h4>
              <button>Get Started</button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* balance end */}

      {/* feature start */}
      <section id="feature">
        <Container>
          <img src="https://i.postimg.cc/KzJ97HXx/Register.png" className="w-full"/>
          <Row>
            <Col>
              <h2>Our Feature</h2>
              <h3>Receive payments quickly from anywhere</h3>
              <h4>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.{" "}
              </h4>
            </Col>
            <Col>
              <h5>Get Started for Free</h5>
              <input type="text" placeholder="Email address" />
              <input type="password" placeholder="Password" />
              <button>Get Started</button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* feature end */}

      {/* payment start */}
      <section id="payment">
        <img src="https://i.postimg.cc/50L78xBz/payment.png" width="100%" />
        <Container>
          <Row>
            <Col>
              <h2>Our Feature</h2>
              <h3>
                All payments are <br /> linked to your Financy <br /> account
              </h3>
              <h4>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </h4>
              <button>Get Started</button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      {/* payment end */}

      {/* testimonial start */}
      <section id="testimonial">
        <Container>
          <Row>
            <Col xs="12">
              <h2>Testimonials</h2>
              <h3>
                Check what our <br /> clients are saying
              </h3>
            </Col>
            <Col xs="7">
              <img
                src="https://i.postimg.cc/wBVzNyNC/Testimonial.png"
                width="100%"
              />
            </Col>
            <Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="27"
                viewBox="0 0 31 27"
                fill="none"
              >
                <path
                  d="M31 0.26625L30.2177 5.88921C28.653 5.75768 27.3817 6.02075 26.4038 6.6784C25.4259 7.30318 24.7413 8.2239 24.3502 9.44056C23.9916 10.6243 23.9264 12.0054 24.1546 13.5838H31V27H17.7003V13.5838C17.7003 8.84867 18.7923 5.26444 20.9763 2.83111C23.1604 0.3649 26.5016 -0.490055 31 0.26625ZM13.2997 0.26625L12.5173 5.88921C10.9527 5.75768 9.68139 6.02075 8.70347 6.6784C7.72555 7.30318 7.04101 8.2239 6.64984 9.44056C6.29127 10.6243 6.22608 12.0054 6.45426 13.5838H13.2997V27H0V13.5838C0 8.84867 1.09201 5.26444 3.27603 2.83111C5.46004 0.3649 8.80126 -0.490055 13.2997 0.26625Z"
                  fill="#FF7F5C"
                />
              </svg>
              <br />
              <h4>
                Save Time Managing Social <br /> Media For Your Business
              </h4>
              <h5>
                Is be upon sang fond must shew. Really boy law county she unable
                her sister. Feet you off its like like six. Among sex are leave
                law built now. In built table in an rapid blush. Merits behind
                on afraid or warmly.
                <br />
                <br />
                Believing neglected so so allowance existence departure in. In
                design active temper be uneasy.
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="17"
                viewBox="0 0 77 17"
                fill="none"
              >
                <path
                  d="M7.54894 2.92705C7.8483 2.00574 9.1517 2.00574 9.45106 2.92705L10.1839 5.18237C10.3177 5.5944 10.7017 5.87336 11.1349 5.87336L13.5063 5.87336C14.475 5.87336 14.8778 7.11297 14.0941 7.68237L12.1756 9.07624C11.8251 9.33088 11.6784 9.78225 11.8123 10.1943L12.5451 12.4496C12.8445 13.3709 11.79 14.137 11.0063 13.5676L9.08778 12.1738C8.7373 11.9191 8.2627 11.9191 7.91221 12.1738L5.99372 13.5676C5.21001 14.137 4.15553 13.3709 4.45488 12.4496L5.18768 10.1943C5.32155 9.78225 5.1749 9.33088 4.82441 9.07624L2.90592 7.68237C2.1222 7.11297 2.52498 5.87336 3.4937 5.87336L5.86509 5.87336C6.29832 5.87336 6.68227 5.5944 6.81614 5.18237L7.54894 2.92705Z"
                  fill="#F9896B"
                />
                <path
                  d="M22.5489 2.92705C22.8483 2.00574 24.1517 2.00574 24.4511 2.92705L25.1839 5.18237C25.3177 5.5944 25.7017 5.87336 26.1349 5.87336L28.5063 5.87336C29.475 5.87336 29.8778 7.11297 29.0941 7.68237L27.1756 9.07624C26.8251 9.33088 26.6784 9.78225 26.8123 10.1943L27.5451 12.4496C27.8445 13.3709 26.79 14.137 26.0063 13.5676L24.0878 12.1738C23.7373 11.9191 23.2627 11.9191 22.9122 12.1738L20.9937 13.5676C20.21 14.137 19.1555 13.3709 19.4549 12.4496L20.1877 10.1943C20.3216 9.78225 20.1749 9.33088 19.8244 9.07624L17.9059 7.68237C17.1222 7.11297 17.525 5.87336 18.4937 5.87336L20.8651 5.87336C21.2983 5.87336 21.6823 5.5944 21.8161 5.18237L22.5489 2.92705Z"
                  fill="#F9896B"
                />
                <path
                  d="M37.5489 2.92705C37.8483 2.00574 39.1517 2.00574 39.4511 2.92705L40.1839 5.18237C40.3177 5.5944 40.7017 5.87336 41.1349 5.87336L43.5063 5.87336C44.475 5.87336 44.8778 7.11297 44.0941 7.68237L42.1756 9.07624C41.8251 9.33088 41.6784 9.78225 41.8123 10.1943L42.5451 12.4496C42.8445 13.3709 41.79 14.137 41.0063 13.5676L39.0878 12.1738C38.7373 11.9191 38.2627 11.9191 37.9122 12.1738L35.9937 13.5676C35.21 14.137 34.1555 13.3709 34.4549 12.4496L35.1877 10.1943C35.3216 9.78225 35.1749 9.33088 34.8244 9.07624L32.9059 7.68237C32.1222 7.11297 32.525 5.87336 33.4937 5.87336L35.8651 5.87336C36.2983 5.87336 36.6823 5.5944 36.8161 5.18237L37.5489 2.92705Z"
                  fill="#F9896B"
                />
                <path
                  d="M52.5489 2.92705C52.8483 2.00574 54.1517 2.00574 54.4511 2.92705L55.1839 5.18237C55.3177 5.5944 55.7017 5.87336 56.1349 5.87336L58.5063 5.87336C59.475 5.87336 59.8778 7.11297 59.0941 7.68237L57.1756 9.07624C56.8251 9.33088 56.6784 9.78225 56.8123 10.1943L57.5451 12.4496C57.8445 13.3709 56.79 14.137 56.0063 13.5676L54.0878 12.1738C53.7373 11.9191 53.2627 11.9191 52.9122 12.1738L50.9937 13.5676C50.21 14.137 49.1555 13.3709 49.4549 12.4496L50.1877 10.1943C50.3216 9.78225 50.1749 9.33088 49.8244 9.07624L47.9059 7.68237C47.1222 7.11297 47.525 5.87336 48.4937 5.87336L50.8651 5.87336C51.2983 5.87336 51.6823 5.5944 51.8161 5.18237L52.5489 2.92705Z"
                  fill="#F9896B"
                />
                <path
                  d="M67.5489 2.92705C67.8483 2.00574 69.1517 2.00574 69.4511 2.92705L70.1839 5.18237C70.3177 5.5944 70.7017 5.87336 71.1349 5.87336L73.5063 5.87336C74.475 5.87336 74.8778 7.11297 74.0941 7.68237L72.1756 9.07624C71.8251 9.33088 71.6784 9.78225 71.8123 10.1943L72.5451 12.4496C72.8445 13.3709 71.79 14.137 71.0063 13.5676L69.0878 12.1738C68.7373 11.9191 68.2627 11.9191 67.9122 12.1738L65.9937 13.5676C65.21 14.137 64.1555 13.3709 64.4549 12.4496L65.1877 10.1943C65.3216 9.78225 65.1749 9.33088 64.8244 9.07624L62.9059 7.68237C62.1222 7.11297 62.525 5.87336 63.4937 5.87336L65.8651 5.87336C66.2983 5.87336 66.6823 5.5944 66.8161 5.18237L67.5489 2.92705Z"
                  fill="#F9896B"
                />
              </svg>
              <h6>Angela Taylor</h6>
              <p>CEO SAMSUNG</p>
            </Col>
            <Col xs="12">
              <div className="box">
                <Row>
                  <Col xs="9">
                    <span>
                      And residence for met the estimable disposing. Mean if he
                      they been no hold mr. Is at much do made took held help.
                    </span>
                  </Col>
                  <Col>
                    <button>Get Started</button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial end */}

      {/* link start */}
      <section id="link">
        <Container>
          <Row>
            <Col>
              <h2>Our Feature</h2>
              <h3>
                All payments are <br /> linked to your Financy <br /> account
              </h3>
              <h4>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </h4>
              <button>Get Started</button>
            </Col>
            <Col>
              <img src="https://i.postimg.cc/6TJFj9VC/Link.png" width="100%" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* link end */}

      {/* choose start */}
      <section id="choose">
        <Container className="choose">
          <img src="https://i.postimg.cc/Df65y9Cx/Choose.png" width="100%" />
          <Row>
            <Col xs="1"></Col>
            <Col xs="10">
              <Row>
                <Col xs="12" className="text-center">
                  <h2>Why Financy</h2>
                  <h3>Why Choose Us</h3>
                </Col>
                <Col xs="6">
                  <div className="box">
                    <Row>
                      <Col xs="3">
                        <span className="c1"></span>
                      </Col>
                      <Col>
                        <h4>No Extra Fee</h4>
                        <h5>
                          End-to-end payments and financial management in a
                          single solution. Meet the right platform.
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="box">
                    <Row>
                      <Col xs="3">
                        <span className="c2"></span>
                      </Col>
                      <Col>
                        <h4>No Extra Fee</h4>
                        <h5>
                          End-to-end payments and financial management in a
                          single solution. Meet the right platform.
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="box">
                    <Row>
                      <Col xs="3">
                        <span className="c3"></span>
                      </Col>
                      <Col>
                        <h4>No Extra Fee</h4>
                        <h5>
                          End-to-end payments and financial management in a
                          single solution. Meet the right platform.
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col xs="6">
                  <div className="box">
                    <Row>
                      <Col xs="3">
                        <span className="c4"></span>
                      </Col>
                      <Col>
                        <h4>No Extra Fee</h4>
                        <h5>
                          End-to-end payments and financial management in a
                          single solution. Meet the right platform.
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* choose end */}

      {/* why start */}
      <section id="why">
        <Container>
          <Row>
            <Col xs="6">
              <h2>Why Choose Us</h2>
              <h3>Track your crytpo portfolio on the best way possible</h3>
              <h4>
                End-to-end payments and financial management in a <br /> single
                solution. Meet the right platform to help realize.
              </h4>
            </Col>
            <Col xs="1"></Col>
            <Col xs="4">
              <input type="text" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>Get Started</button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* why end */}

      {/* footer start */}
      <footer>
        <Container>
          <Row>
            <Col xs="5">
              <h2>BWFC</h2>
              <h3>
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment.
              </h3>
            </Col>
            <Col xs="7">
              <Row>
                <Col xs="3">
                  <ul>
                    <li>
                      <h4>Company</h4>
                    </li>
                    <li>
                      <h5>About Us</h5>
                    </li>
                    <li>
                      <h5>Careers</h5>
                    </li>
                    <li>
                      <h5>Blog</h5>
                    </li>
                    <li>
                      <h5>Pricing</h5>
                    </li>
                  </ul>
                </Col>
                <Col xs="4">
                  <ul>
                    <li>
                      <h4>Product</h4>
                    </li>
                    <li>
                      <h5>Invoicing Platform</h5>
                    </li>
                    <li>
                      <h5>Accounting Plateform</h5>
                    </li>
                    <li>
                      <h5>Create Proposal</h5>
                    </li>
                    <li>
                      <h5>Contracts</h5>
                    </li>
                  </ul>
                </Col>
                <Col xs="5">
                  <ul>
                    <li>
                      <h4>Resources</h4>
                    </li>
                    <li>
                      <h5>Proposal Template</h5>
                    </li>
                    <li>
                      <h5>Invoice Template</h5>
                    </li>
                    <li>
                      <h5>Tuturoial</h5>
                    </li>
                    <li>
                      <h5>How to write a contract</h5>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xs="9">
              <h6>
                2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms
                of Services
              </h6>
            </Col>
            <Col xs="3">
              <p>Supported by Microsoft Startup</p>
            </Col>
          </Row>
        </Container>
        <div className="line"></div>
      </footer>
      {/* footer end */}
    </>
  );
};

export default Nav1;
