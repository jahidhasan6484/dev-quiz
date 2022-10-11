import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Topic.css';

const Topic = () => {

    const [topic, setTopic] = useState()

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(data => data.json())
            .then(res => {
                setTopic(res.data)
            })
    }, [])

    console.log(topic)

    return (
        <div className="container topic">
            <div className="row all_topic">
                {
                    topic && topic.map((topic) => {
                        return (
                            <div className="col-md-3 topic_card">
                                <Link to={`/topic/${topic.id}`}>
                                <img className="img-fluid topic_card_image" src={topic.logo} alt={topic.name}></img>
                                <h5 className="topic_title">{topic.name}</h5>
                                </Link>
                            </div>

                        )
                    })
                }
                <p className="note">Click on the topic and start quiz!</p>
            </div>

        </div>
    )
}

export default Topic;