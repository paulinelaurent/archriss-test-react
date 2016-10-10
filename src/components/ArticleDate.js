import React  from 'react';
import Moment from 'react-moment';
 
exports default class MyComponent extends React.Component {
    render() {
        let dateToFormat = '1976-04-19T12:59-0500';
        <Moment>{dateToFormat}</Moment>
    }
}