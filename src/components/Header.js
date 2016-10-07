import React from 'react'

export const Header = () => (
  <div className='Header'>
	<div className='Header--main'>
		<div className='Header--main-btn-close ion-close' />
		<div className='Header--main-title'>À la une</div>
	</div>
	<div className='Header--TopNav'>
		<div className='Header--TopNav-prev ion-chevron-left' />
		<div className='Header--TopNav-number'>03</div>
		<div className='Header--TopNav-total'>11</div>
		<div className='Header--TopNav-next ion-chevron-right' />
	  </div>
  </div>
)

export default Header
