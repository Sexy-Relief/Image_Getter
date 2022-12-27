import React, { Component } from 'react';
import axios from 'axios';

const ShowMyImage = props => (
    <tr>
        <td><img src={props.thumbnail} /></td>
    </tr>
)

export default class GetImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            myimages: [],
            value: ""
        };
    }

    componentDidMount() {

    }

    imageList() {
        axios.get('http://localhost:5000/images/my')
            .then(response => {
                this.setState({ myimages: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
        return this.state.myimages.map(images => {
            return <ShowMyImage key={images.images_} thumbnail={images.image_} />;
        })
    }
        
    render() {
        return (
            <div>
                <h3>My images</h3>
                <hr />
                <table className="table2">
                    <thead className="thead-light">
                        <tr>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.imageList()}
                    </tbody>
                </table>

            </div>
        )
    }
}