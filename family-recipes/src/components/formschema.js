import * as yup from 'yup'

const formschema = yup.object().shape({
    username:yup
    .string()
    .min(2,'Username must be more then one character')
    .required('Username is required'),
    password:yup
    .string()
    .min(6,'Password must be more then five characters in lenght')
    .required('Password is required'),
    terms:yup
    .boolean()
    .oneOf([true],'To continue, please review and agree to our "Terms of Service"')
})
export default formschema