import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

function ContactMe() {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (name != "" && email != "" && emailMessage != ""){
            emailjs.sendForm('service_ijxrfxb', 'template_qkxd0h8', form.current,  'XzW7atLHKswzKai9U')
                .then((result) => {
                    console.log(result.text);
                    setMessage('sent')
                }, (error) => {
                    console.log(error.text);
                    setMessage('Could not send, please try again.')
                });
                e.target.reset()
        }else{
            setMessage('Please fill in the all of the information in the form!')
        }
        setName('')
        setEmail('')
        setEmailMessage('') 
      };

    return (
        <div id="ContactMe">
            <h1>Get In touch</h1> 
            <form ref={form} onSubmit={sendEmail}>
              <input onChange={(e)=> setName(e.target.value) } type="text" name="from_name" placeholder='Name'/>
              <input onChange={(e)=> setEmail(e.target.value) } type="email" name="user_email" placeholder='Email'/>
              <input type="text" name="from_name" placeholder='Subject'/>
              <textarea onChange={(e)=> setEmailMessage(e.target.value) } name="message" placeholder='Message'/>
              <input type="submit" value="Send" className='Btn' />
            </form>
            {
                message == 'sent' ?
                    <h2 className='Sent'>Email was {message}!</h2>
                :
                    <h2 className='Error'>{message}</h2>
            }
            
        </div>
      );
}

export default ContactMe