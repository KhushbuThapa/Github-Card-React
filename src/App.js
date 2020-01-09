import React from 'react';
import './App.css';
import CardList from "./CardList/CardList";
import Form from "./Form/Form";

const testData = [
    // {
    //     "name": "Amit Chaudhary",
    //     "avatar_url": "https://avatars3.githubusercontent.com/u/8587189?v=4",
    //     "company": "@fusemachines",
    // },
    // {
    //     "name": "Khushbu",
    //     "avatar_url": "https://avatars1.githubusercontent.com/u/441673?v=4",
    //     "company": "@fusemachines",
    // },
    // {
    //     "name": "Roshan George",
    //     "avatar_url": "https://avatars3.githubusercontent.com/u/7322596?v=4",
    //     "company": "SafeGraph, Inc.",
    // }

];

class App extends React.Component {
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));

    };


    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}

export default App