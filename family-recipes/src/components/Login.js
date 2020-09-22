import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./components.css"
import axios from 'axios'
import formschema from './formschema'
import * as yup from 'yup'

const initial = {
  name:'',
  password:'',

}
const errors = {
  name:'',
  password:'',
 
}

const Login = () => {
  const [content, setContent] = useState(initial)
  const [contentError, setContentError] =useState(errors)
  const [disb, setdisb] = useState(true)

  function handleC(event){
      const {name,value} = event.target
        yup
        .reach(formschema,name)
        .validate(value)
        .then(valid => {
          setContentError({
            ...contentError,
            [name]:'',
          })
        })
        .catch(error => {
          setContentError({
            ...contentError,
            [name]:error.errors[0]
          })
        })
        setContent({
          ...content,
          [name]:value,
        })
  }

  function Submit(event){
    event.preventDefault()
    const member = {
      name:content.name.trim(),
      password:content.password.trim(),
    }
    if(!member.name||!member.password)
    {return}
    setContent(initial)
    postUser(member)
  }

  const postUser = (user) => {
    axios.post('https://secret-family-recipes-bw.herokuapp.com/auth/login',user)
    .then(response => {
      console.log(response)
    })
    .catch(error =>{
      console.error('Server Error', error);
    })
  }

  useEffect(() => {
    formschema.isValid(content)
    .then(valid => {
      setdisb(!valid)
    })
  })

  return <>
  <div>
    <h2>Log In</h2>
    <form onSubmit = {Submit}>
      <input
        name = 'name'
        type = 'text'
        placeholder = 'Enter Username'
        value = {content.name}
        onChange = {handleC}
      />     
      <input
        name = 'password'
        type = 'password'
        placeholder = 'Enter Password'
        value = {content.password}
        onChange = {handleC}
      /> 
      <div>
        <button disabled = {disb} type = 'submit'>Sign In</button>
      </div>
    </form>

  </div>
  <h3>Don't have an account?</h3>
  <Link to="/sign-up">Sign Up Here!</Link>
  </>;
};

export default Login;
