import React, { Component, PropTypes } from 'react';

export default class ArticleContent extends Component {

  static propTypes = {
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }

  render () {
    const { category, thumbnail, location, startDate, title, subtitle, summary, content } = this.props;

    return (
      <div className='ArticleContent'>
        <div className='ArticleContent--category'>{category}</div>
        <img className='ArticleContent--thumbnail' src={thumbnail}/>
		<div className='ArticleContent--location ion-android-pin'>{location}</div>
        <h1 className='ArticleContent--title'>{title}</h1>
		<div className='ArticleContent--intro'>
			<div className='ArticleContent--intro--startDate'>{startDate}</div>
			<h2 className='ArticleContent--intro--subtitle'>{subtitle}</h2>
		</div>
        <p className='ArticleContent--summary'>{summary}</p>
        <div className='ArticleContent--content' dangerouslySetInnerHTML={ {__html: content} } />
      </div>
    )
  }
}
