import React from "react"

interface Props {
  mess?: string
}


const AuthForm = ({ mess }: Props) => {
  if (mess) {
    console.log("mess ==>>", mess);
  }
  return (
    <div>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default AuthForm