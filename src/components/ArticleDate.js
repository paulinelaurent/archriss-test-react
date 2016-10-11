import React, { Component, PropTypes } from 'react';
import Moment from 'react-moment';

import locale_es from "moment/locale/es";





export default class ArticleDate extends Component {

  static propTypes = {
    startDate: PropTypes.string.isRequired	
	  
  }
  
  

  render () {
	  
	moment.locale("es", locale_es);
	  
    const { startDate, locale } = this.props;
	  
	 

    return (
		<div className='ArticleDate'>
			<Moment className='ArticleDate--Year' format="YYYY">{startDate}</Moment>
			<Moment className='ArticleDate--Day' format="DD">{startDate}</Moment>
			<Moment className='ArticleDate--Month' format="MMMM" locale="es">{startDate}</Moment>
		</div>
    )
  }
}