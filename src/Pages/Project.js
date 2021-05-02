import React, { useState, useEffect } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
/* import { Link } from 'react-router-dom' */
import sanityClient from '../client'
import BlockContent from "@sanity/block-content-to-react"

function Project() {

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            githubLink,
            body,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
        }`).then((data) => setPost(data)).catch(console.error);
    }, []);


    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4 mt-5">Projelerim</h2> <hr></hr>

            <Row>
                {postData && postData.map((post, index) => (

                    <Col lg={4} key={index}>

                        <Card className="mb-4 shadow-sm offset-1" style={{ width: '20rem', height: '24rem'}}>
                            <Card.Img variant="top" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    <BlockContent 
                                        blocks={post.body} 
                                        projectId="sviu56a3" 
                                        dataset="production">
                                    </BlockContent>
                                </Card.Text>
                                {/* <Link className="btn btn-primary" to={"/project/" + post.slug.current}>Github Link</Link> */}
                                <a href={post.githubLink} className="btn btn-primary" target="_blank" rel="noreferrer" >Github Link</a>
                                
                            </Card.Body>
                        </Card>

                    </Col>
                ))}

            </Row>
        </Container>
    )
}

export default Project
