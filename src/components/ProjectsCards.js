import {Col} from 'react-bootstrap'
export const ProjectsCards =({title, description, imgUrl})=>{
    return(
        <Col size={12} sm={5} md={6}>
            <div className='proj-imbx'>
                <img src={imgUrl}/>
                <div className='proj-txtx'>
                    <h4>
                        {title}
                    </h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}