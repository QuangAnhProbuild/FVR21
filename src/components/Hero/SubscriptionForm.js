import './SubscriptionForm.css'

const SubscriptionForm = () => {
  return (
    <form id='form' action='https://www.freecodecamp.com/email-submit'>
      <input
        name='email'
        id='email'
        type='email'
        placeholder='Enter your email address'
        required
      />
      <input id='submit' type='submit' value='Get Started' className='btn' />
    </form>
  )
}

export default SubscriptionForm
