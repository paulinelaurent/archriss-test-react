import React, { Component, PropTypes } from 'react';
import Moment from 'react-moment';
import locale_fr from "moment/locale/fr";

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
  
  constructor () {
    super();
  }

  componentDidMount () {
    document.getElementById("articleImgTop").style.backgroundImage = "url('http://i.imgur.com/f5fJ67T.jpg')";
    document.getElementById("articleImgContent").style.backgroundImage = "url('http://i.imgur.com/hXOyOSt.jpg')";
  }


  render () {
    const { category, thumbnail, location, startDate, title, subtitle, summary, thumbContent, content } = this.props;
	  
    return (
      <div className='ArticleContent'>
        <div className='ArticleContent--category'>{category}</div>
        <div id ="articleImgTop" className='ArticleContent--thumbnail'></div>
        <div className='ArticleContent--thumbnail' ref="imgTop"></div>
		<div className='ArticleContent--location ion-android-pin'>{location}</div>
        <h1 className='ArticleContent--title'>{title}</h1>
		<div className='ArticleContent--intro'>
	      <div className='ArticleDate'>
		    <Moment className='ArticleDate--year' format="YYYY">{startDate}</Moment>
		    <Moment className='ArticleDate--day' format="DD">{startDate}</Moment>
		    <Moment className='ArticleDate--month' format="MMMM" locale="fr">{startDate}</Moment>
	      </div>
		  <h2 className='ArticleContent--intro--subtitle'>{subtitle}</h2>
		</div>
        <p className='ArticleContent--summary'>{summary}</p>
		<div id ="articleImgContent" className='ArticleContent--imgContent'></div>
        <div className='ArticleContent--content' dangerouslySetInnerHTML={ {__html: content} } />
      </div>
    )
  }
}
