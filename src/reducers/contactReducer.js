var contactsinitial=[{
    _id:'2',
    name:'ness',
    phone:'09009900',
    email:'ness@gmail.com'
}]

const contactReducer=(state=contactsinitial,action)=>
{
  switch(action.type)
  {  
     case 'ADD_CONTACT':
  return (
      state.concat(action.newcontact)
  )
    case 'EDIT_CONTACT':
    return (
        state.map(el=>(el._id===action.editcontact._id)?el=action.editcontact:el)
    )
    case 'DELETE_CONTACT':
    return (
        state.filter((el,index)=>el._id!==action._id)
    )
      default :
      return state
  }
  
}

export default contactReducer