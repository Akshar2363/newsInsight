import React, { Component } from 'react';

export class NewsItems extends Component {

  render() {
    let { title, description, imgURL, newsURL, author, date, source } = this.props;
    return (
      <div>
        <a href={newsURL} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="card img-thumbnail " >
          <span className="position-absolute top-0 translate-middle p-2 bg-danger badge rounded-pill" style={{ left: '80%', zIndex: 1 }}>{source}</span>
            <img src={imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="class-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
            <div className="card-footer" style={{ fontSize: '12px' }}>
              <p>By : {author} </p>
              <p>Updated on : {new Date(date).toGMTString()}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default NewsItems