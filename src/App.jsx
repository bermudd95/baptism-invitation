import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function App() {
  const form = useRef();
  const [name, setName] = useState('');
  const [choice, setChoice] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u2f5wlu', 'template_aqibbfi', form.current, 'dkSCkT9G1nrflBiqD')
      .then((result) => {
        console.log(result.text);
        window.alert('Thank you for your submission!')
      }, (error) => {
        console.log(error.text);
      });
      document.getElementById('form').reset();
      setName('');
  };

  return (
    <div className="h-full bg-scroll bg-cover bg-center custom-img">
      <div className='flex h-screen flex-col items-center justify-center bg-gradient-to-b from-emerald-400/80 to-blue-300/80'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold pt-6'>
            Join Me In Celebrating
          </h1>
          <h1 className='text-xl py-3'>
            Legacy Josefina Bermudez
          </h1>
          <h1 className='text-xl pb-3'>
            &
          </h1>
          <h1 className='text-xl pb-3'>
            Souline Angelica Bermudez
          </h1>
          <h1 className='text-xl pb-3'>
            Baptism
          </h1>
        </div>
        <div className='w-[70%] text-center border-t-2 border-gray-200 py-5'>
          <h3 className='font-semibold pb-1'>
            Where:
          </h3>
          <div className='flex flex-col'>
            <h3 className='pb-0.5'>
              79 Rexland Dr
            </h3>
            <h3 className='pb-2'>
              Bakersfield, CA 93307
            </h3>
          </div>
          <h2 className='font-semibold pb-1'>
            Time:
          </h2>
          <h2>
            Time
          </h2>
        </div>
        <div className='w-[70%] m-5 p-5 border-2 border-gray-200 rounded-lg'>
          <form ref={form} id='form' name='form' onSubmit={sendEmail}>
            <h1 className='text-xl text-center font-semibold underline pb-3'>
              RSVP
            </h1>
            <div className='flex justify-evenly pb-3 md:justify-center'>
              <h3 className='flex md:pr-4'>
                <span className='text-red-500 pr-1'>
                  <p>
                    *
                  </p>
                </span>Name:
              </h3>
              <input type='text' id='name' name='user_name' onChange={e => setName(e.target.value)} value={name} required/>
            </div>
            <div className='text-center pb-3'>
              <h3 className='text-xl pb-2 underline'>
                Attending
              </h3>
              <fieldset>
                <div>
                  <input type='radio' id='choice' name='choice' onChange={e => setChoice(e.target.value)} value='Yes' required />
                  <label className='pl-2' for='Yes'>
                    Yes
                  </label>
                </div>
                <div>
                  <input type='radio' id='choice' name='choice' onChange={e => setChoice(e.target.value)} value='No' required />
                  <label className='pl-2' for='No'>
                    No
                  </label>
                </div>
              </fieldset>
            </div>
            <div className='flex justify-center'>
              <button value="Send" type='submit' className='bg-blue-400 rounded-lg py-1 px-10 hover:bg-blue-300'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
