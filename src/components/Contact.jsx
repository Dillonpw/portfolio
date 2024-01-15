import useScrollIn from './ScrollIn'
import { useState } from 'react'

const Contact = () => {
  const [ref, isVisible] = useScrollIn()
  const [submitState, setSubmitState] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitState(true)
  }

  return (
    <div
      ref={ref}
      className={`scroll-in ${
        isVisible ? 'visible' : ''
      } my-6 border-cyan-200 p-10`}
    >
      {!submitState ? (
        <form
          className="flex flex-col w-full"
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit}
        >
          <p className="mb-3 text-3xl">Want to get in touch?</p>
          <input
            type="hidden"
            name="access_key"
            value="a1bf7f2c-e2c4-4575-9d2e-ac544037c627"
          />
          <label className="font-bold" htmlFor="email">
            Email:{' '}
          </label>
          <input
            className="my-2 h-10 max-w-[400px] rounded-md p-2"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email@address.com"
          />
          <label className="font-bold" htmlFor="message">
            Message:
          </label>
          <textarea
            className="text-sky-950 my-2 max-w-[400px] rounded-lg p-2"
            name="message"
            rows="6"
            required
            placeholder="..."
          ></textarea>
          <div className="h-captcha my-2" data-captcha="true"></div>
          <button
            className="w-fit items-center justify-center rounded-lg bg-cyan-200 p-4 px-8 text-sky-950 opacity-90  hover:scale-105 hover:opacity-100"
            type="submit"
          >
            Send
          </button>
        </form>
      ) : (
        <p text-center text-3xl>
          Thanks for reaching out! I'll get back to you as soon as I can!
        </p>
      )}
    </div>
  )
}

export default Contact
