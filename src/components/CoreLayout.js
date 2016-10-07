import React from 'react'
import ArticleContent from './ArticleContent'
import Header from './Header'
import '../styles/main.scss'

export const CoreLayout = ({ children }) => (
  <div className='CoreLayout'>
    <Header />
    <div className='CoreLayout--viewport'>
      <div className='CoreLayout--background'>
        <ArticleContent
          category='Culture'
          thumbnail='../public/ballerina.jpeg'
          location='Nîmes'
          title="L'été des festivals dans le Gard"
          startDate='Wed May 25 2016 14:00:00 GMT+0200'
          subtitle="L'été est propice aux festivals, le Gard n'échappe pas à la règle, tour d'horizon des festivals soutenus par le Département."
          summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.'
          content='<img src="src/ballet-ballerina-performance-don-quixote-46158-large.jpeg"/><h3>Une édition 2016 haute en couleurs</h3><p>Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.</p>'
          />
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout