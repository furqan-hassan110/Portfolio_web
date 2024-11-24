import { Col, Container} from "react-bootstrap";
import colorSharp2 from  "../assets/images/color-sharp2.png";
import projimg1 from "../assets/images/project-img1.png"
import projimg2 from "../assets/images/project-img2.png"
import projimg3 from "../assets/images/project-img3.png"
import 'animate.css';

export const Projects= ()=>{
    return(
        <section className="project" id="Project">
            <Container className="skills">
                            <h2 className=" ">
                                Projects
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quidem soluta reprehenderit corrupti totam quos asperiores et vero velit sint eligendi vitae, sequi modi! Praesentium fugiat voluptatum alias amet minus!</p>
                            {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="cards" >
                                            <img className="card-img-top" src={projimg1} alt="Card image cap" height={250}/>
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                                <button className='vvd' onClick={()=>console.log("connect")}><span>Let's connect</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="cards" >
                                            <img className="card-img-top" src={projimg2} alt="Card image cap"height={250}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <button className='vvd' onClick={()=>console.log("connect")}><span>Let's connect</span></button>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="cards" >
                                            <img className="card-img-top" src={projimg3} alt="Card image cap"height={250}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <button className='vvd' onClick={()=>console.log("connect")}><span>Let's connect</span></button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </Container>
            <img className="background-img-right" src={colorSharp2} ></img>
        </section>
    )
}