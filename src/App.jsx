
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import HookForm from './Components/HookForm/HookForm'
// import ResuableForm from './Components/ReusableForm/ResuableForm'
// import RefForm from './Components/RefForm/RefForm'
//import StateFulForm from './Components/StateFulForm/StateFulForm'
// import SImpleForm from './Components/SimpleForm/SImpleForm'

function App() {
 
  // const handleSignUpSubmit = data => {
  //   console.log('sign up data', data);
  // }
  // const handleUpdateProfile = data => {
  //   console.log('update profile data', data);
  // }

  return (
    <>
      <h1>Form Master</h1>

     <Grandpa></Grandpa>

      {/* <SImpleForm></SImpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
       {/* <RefForm></RefForm> */}
       {/* <HookForm></HookForm> */}
       {/* <ResuableForm 
       handleSubmit={handleSignUpSubmit} 
       formTitle={'Sign Up'}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up Right Now</p>
        </div>
       </ResuableForm>
       <ResuableForm
        formTitle={'Profile Update'} 
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update profile</h2>
            <p>ALways keep your profile updated</p>
          </div>
        </ResuableForm> */}
    </>
  )
}

export default App
