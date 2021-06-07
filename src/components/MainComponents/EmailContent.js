import EmailContentHeader from '../EmailContentComponents/EmailContentHeader'
import EmailTitle from '../EmailContentComponents/EmailTitle'
import EmailActionBar from '../EmailContentComponents/EmailActionBar'
import EmailBody from '../EmailContentComponents/EmailBody'


function EmailContent (){
    return(
        <article className="email-content">
          <EmailTitle/>
          <EmailContentHeader/>
          <EmailBody/>
          <EmailActionBar/>
        </article>
    )
}

export default EmailContent