import * as  yup from 'yup'

export default  yup.object({
	firstName:yup.string().max(40).min(2).required(),
	lastName:yup.string().max(40).min(2).required(),
	middleInitial:yup.string(),
	birthDate:yup.date("Invalid Birth Date").required(),
})