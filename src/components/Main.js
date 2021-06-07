import'../style/Main.css'

import EmailContent from './MainComponents/EmailContent'
import EmailForm from './MainComponents/EmailForm'
import EmailToolBar from './MainComponents/EmailToolBar'


function Main(){
    return(
        <main className="email-view">
        <EmailToolBar/>
        <EmailContent/>
        <EmailForm/>
      </main>
    )
}

export default Main