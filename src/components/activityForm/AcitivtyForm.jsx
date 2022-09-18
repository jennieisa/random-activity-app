import ActivityComponent from "../activity/ActivityComponent";

import { useDispatch, useSelector } from "react-redux";
import { getActivity } from './activityFormSlice';
import {useState} from 'react';

const ActivityForm = () => {
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false);

    const activity = useSelector((state) => state.activity.slumpedActivity);
    console.log(activity)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        let value = document.querySelector('#inputParticipants').value;
        dispatch(getActivity(value));
    }

    return (
        <form>
            <label htmlFor="inputParticipants">Participants:</label>
            <select name="participants" id="inputParticipants">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Get activity</button>
            <h3>Activity:</h3>
            {submit && activity && 
                <ActivityComponent name={activity.activity} type={activity.type} participants={activity.participants} price={activity.price}/>
            }
        </form>
    )
}

export default ActivityForm;