import React from 'react';
import PersonalElements from "../components/PersonalElements";

const Prihodko = () => {
    return (
        <div>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
        </div>
    );
};

const info = [];
const bio = [];
const photos = [];
const video = "";



export default Prihodko;