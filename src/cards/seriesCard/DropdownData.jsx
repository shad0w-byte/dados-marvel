import React from 'react'
import {Accordion,Card,Button} from 'react-bootstrap'
import {DropdownDataStyle} from '../style'


export default function dropdownData({data,title,bgColor}) {
    return (
        
        <DropdownDataStyle bgColor={bgColor}>
        <Accordion defaultActiveKey="1">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {title}
                        <i className="bi bi-eye"></i>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {
                            data.map(data => 
                                <ul key={Math.random()+data.name}>
                                    <li>
                                        {data.name}
                                    </li>
                                </ul>
                            )
                        }
                    </Card.Body>
                </Accordion.Collapse>
             </Card>
        </Accordion>
        </DropdownDataStyle>
    )
}
