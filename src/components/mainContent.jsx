import '../styles/components/mainContent.sass'

import AboutContent from './aboutContent'
import TecnologiesContent from './tecnologiesContent'
import ProjectsContent from './projectsContent'

function mainContent() {
  return (
    <main id='main-content'>
      <AboutContent />
      <TecnologiesContent />
      <ProjectsContent />
      </main>
  )
}

export default mainContent