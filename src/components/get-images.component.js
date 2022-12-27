import React, { Component } from 'react';
import axios from 'axios';

const ShowImage = props => (
    <tr>
        <td><img src={props.thumbnail} /></td>
        <td>{props.title}<br /><br />
            <a href={props.id} target='_blank'>Link</a>
            <br/><br/>
            <input type="button" className="btn btn-primary" value="add to my photo" onClick={function () {
                const newimg = {
                    image_: props.thumbnail,
                };
                console.log(newimg);
                axios.post('http://localhost:5000/images/myadd', newimg)
                    .then(res => console.log(res.data));
            }} />
        </td>
    </tr>
)

export default class GetImages extends Component {
    constructor(props) {
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            isLoading: true,
            searchimages: [],
            value: ""
        };
    }

    componentDidMount() {
        
    }
    imageList() {
        const arr = (this.state.searchimages)["items"];
        if (!this.state.isLoading) {
            this.isLoading = true;
            return arr.map(image_ => {
                return <ShowImage key={image_.link} id={image_.link} title={image_.title} thumbnail={image_.thumbnail} />;
            })
        }
        else
            return <br />;
    }
    onChangeValue(e) {
        this.setState({
            value: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        this.isLoading = false;
        axios.get('http://localhost:5000/images?query=' + this.state.value)
            .then(response => {
                this.setState({ searchimages: response.data, isLoading: false });
                console.log(this.state.searchimages);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Search for image</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>search words</label>
                        <br/>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.value}
                            onChange={this.onChangeValue}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
                <hr />
                <h3>Search Result:</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Photo</th>
                            <th>Title</th>
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