import React from 'react'

type ContactDetailProps = {
children:React.ReactNode
}

function ContactDetail(props:ContactDetailProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ContactDetail
