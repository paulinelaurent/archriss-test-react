import React, { Component, PropTypes } from 'react';
import Moment from 'react-moment';
import locale_fr from "moment/locale/fr";

export default class ArticleDate extends Component {

  static propTypes = {
    startDate: PropTypes.string.isRequired		  
  }  

  render () {
	  
    const { startDate } = this.props;

    return (
		<div className='ArticleDate'>
			<Moment className='ArticleDate--Year' format="YYYY">{startDate}</Moment>
			<Moment className='ArticleDate--Day' format="DD">{startDate}</Moment>
			<Moment className='ArticleDate--Month' format="MMMM" locale="fr">{startDate}</Moment>
		</div>
    )
  }
}