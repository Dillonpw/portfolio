import useScrollIn from './ScrollIn'
import { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState()
  const [ref, isVisible] = useScrollIn()

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'a1bf7f2c-e2c4-4575-9d2e-ac544037c627')

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())

    if (res.success) {
      console.log('Success', res)
      setResult(res.message)
    } else {
      console.log('Error', res)
      setResult(res.message)
    }
  }

  return (
    <div
      ref={ref}
      className={`scroll-in ${
        isVisible ? 'visible' : ''
      } m-8 border-cyan-200 md:max-w-[700px]`}
    >
      <h1 className="text-center text-3xl">Want to get in touch?</h1>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <label className="font-bold" htmlFor="email">
          Email:
        </label>
        <input
          className="my-2 h-10 w-[50%] rounded-md p-2"
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
          className="my-2 w-[70%] rounded-lg p-2 text-sky-950"
          name="message"
          id="message"
          rows="6"
          required
          placeholder="Your message..."
        ></textarea>
        <div className="h-captcha my-2" data-captcha="true"></div>

        <button
          className="w-fit items-center justify-center rounded-lg bg-cyan-200 px-8 py-4 text-sky-950 opacity-90 hover:scale-105 hover:opacity-100"
          type="submit"
        >
          Submit
        </button>
      </form>
      <span className="text-center">{result}</span>
    </div>
  )
}

export default Contact
