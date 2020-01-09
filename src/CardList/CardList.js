import Card from "../Card/Card";
import React from "react";



const CardList = (props) => (
    <div>
        {/*<Card name={testData[0].name} picture={testData[0].avatar_url} company={testData[0].company}/>*/}

        {/*<Card {...testData[0]} />*/}

        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}

    </div>

);
export default CardList