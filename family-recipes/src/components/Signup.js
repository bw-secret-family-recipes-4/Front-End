import React, {useState,useEffect} from "react";
import axios from 'axios';
import formschema from './formschema'
import * as yup from 'yup'

const initial = {
  name:'',
  password:'',
  terms:false,

}
const errors = {
  name:'',
  password:'',
  terms:'',

}
const Signup = () => {
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

  function handleBox(event){
    const {name, checked} = event.target
    setContent({
      ...content,
      [name]:checked,
    })
  }

  function Submit(event){
    event.preventDefault()
    const newMember = {
      name:content.name.trim(),
      password:content.password.trim(),
    }
    if(!newMember.name||!newMember.password)
    {return}
    setContent(initial)
    postUser(newMember)
  }

  const postUser = (newUser) => {
    axios.post(newUser)
    .then(response => {

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

  
  return(
    <div>
      <h2>Sign Up</h2>
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
          <input
              name = 'terms' 
              type = 'checkbox' 
              checked = {content.terms === true} 
              onChange = {handleBox}              
          />
          <label for = 'Terms of Service'>Terms of Service</label>
          <div>
            <button disabled = {disb} type = 'submit'>Sign Up</button>
          </div>
      </form>
  </div>
  )
  
};

export default Signup;
