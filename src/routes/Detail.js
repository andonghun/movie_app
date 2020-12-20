import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    console.log(this.props);
    const {
      location: {
        state: { genres, poster, summary, title, year },
      },
    } = this.props;
    if (poster) {
      return (
        <div className="card">
          <div className="card-header d-flex align-items-end">
            <span className="display-4">{title}</span>
            <span className="mx-3">{year}</span>
            <ul className="d-flex flex-colunm m-0 px-0">
              {genres.map((genre, index) => {
                return <li className="list-unstyled px-1">{genre}</li>;
              })}
            </ul>
          </div>
          <div className="card-body">
            <img src={poster} alt={title} />
            <h5 className="card-title">{summary}</h5>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
