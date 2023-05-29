import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        apiKey: '05c3de4784364b6193b3cc4b3208e38a',
        pageSize: '16',
        q:'tesla'
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        apiKey: PropTypes.string,
        pageSize: PropTypes.number,
        q: PropTypes.string

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log('FMD2');

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    render() {
        return (
            <div>
                <div className='text-center p-3' style={{ backgroundColor: 'beige', marginTop:'55px'}}>
                    <h1>NewsInsight</h1>
                    <h4>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h4>
                </div>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    <div className="conatiner m-3">
                        <div className="newsItemsTable">
                            {this.state.articles.map((element) => {
                                return <div className="p-2" key={element.url ? element.url : ""}>
                                    <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : element.title} imgURL={element.urlToImage ? element.urlToImage : 'https://user-images.githubusercontent.com/114172072/214306319-14ad5aab-3b9d-4e83-9370-43a938744073.png'} newsURL={element.url ? element.url : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News