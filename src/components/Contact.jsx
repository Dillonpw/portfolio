import useScrollIn from './ScrollIn'

const Contact = () => {
  const [ref, isVisible] = useScrollIn()

  return (
    <div
      ref={ref}
      className={`scroll-in ${
        isVisible ? 'visible' : ''
      } m-6 border-cyan-200 md:max-w-[700px]`}
    >
      <form
        className="flex flex-col"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <p className="text-center text-3xl">Want to get in touch?</p>
        <input
          type="hidden"
          name="access_key"
          value="a1bf7f2c-e2c4-4575-9d2e-ac544037c627"
        />
        <label className="font-bold" htmlFor="email">
          Email:{' '}
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
          className="my-2 w-[70%] rounded-lg p-2"
          name="message"
          rows="6"
          required
          placeholder="..."
        ></textarea>
        <div className="h-captcha my-2" data-captcha="true"></div>
        <button
          className="w-fit items-center justify-center rounded-lg bg-cyan-200 p-4 text-sky-950 opacity-90  hover:scale-105 hover:opacity-100"
          type="submit"
        >
          Submit Form
        </button>
      </form>
    </div>
  )
}

export default Contact
