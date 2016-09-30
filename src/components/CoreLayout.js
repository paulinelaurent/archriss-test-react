import React from 'react'
import ArchrissMessage from './ArchrissMessage'
import Header from './Header'
import '../styles/main.scss'

export const CoreLayout = ({ children }) => (
  <div className='CoreLayout'>
    <Header />
    <div className='CoreLayout--viewport'>
      <div className='CoreLayout--background'>
        <ArchrissMessage
          title='À vous de jouer !'
          message="Le composant 'ArchrissMessage' constitue un bon point de départ ;)"
          />
        <ArchrissMessage
          title='Exemple 1'
          message="Il s'agit du même composant, mais avec des propriétés différentes..."
          messageColor='#fac5b3'
          />
        <ArchrissMessage
          title='Exemple 2'
          message="Il s'agit du même composant, mais avec des propriétés différentes..."
          messageColor='#71515c'
          />
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
