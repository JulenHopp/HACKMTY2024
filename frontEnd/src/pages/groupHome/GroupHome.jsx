import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContributionCard from "../../components/groupHome/ContributionCard";
import EventCard from "../../components/groupHome/GroupHomeEventCard.jsx";
import ParticipantCard from "../../components/groupHome/ParticipantCard";
import { url } from '../../assets/constants/constants';

import "./GroupHome.css";

function GroupHome() {
    const { groupId } = useParams();
    const [eventDetail, setEventDetail] = useState([]);

    useEffect(() => {
        async function fetchEventDetails() {
            try {
                const response = await axios.get(url + `event/${groupId}`);
                setEventDetail(response.data);
            } catch (error) {
                console.log("Error fetching event" + error);
            }
        }

        fetchEventDetails();
    }, []);

    console.log(eventDetail);

    return (
        <>
            {eventDetail ? 
                <div className='group-home-container'>
                    <EventCard event={eventDetail}></EventCard>
                    <ContributionCard/>
                    <div>
                        {/* {eventDetail.participants.map((participant) => {
                            <ParticipantCard />
                        })} */}
                    </div>
                </div>
                
            : <p>loading</p>}
        </>
    )
}

export default GroupHome;