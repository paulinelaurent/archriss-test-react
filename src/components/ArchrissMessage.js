import React, { Component, PropTypes } from 'react';

export default class ArchrissMessage extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    messageColor: PropTypes.string
  }

  render () {
    const { title, message, messageColor } = this.props;

    const messageStyles = messageColor ? { color: messageColor } : {};

    return (
      <div className='ArchrissMessage'>
        <div className='ArchrissMessage--title'>{title}</div>
        <div className='ArchrissMessage--message' style={messageStyles}>{message}</div>
      </div>
    )
  }
}
