import { useForm, ValidationError } from "@formspree/react";
import undraw from "../assets/images/on-the-way.svg";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnqkrzrp");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center">
        <img src={undraw} alt="on the way" className="w-3/5 " />

        <h2 className="mt-4 text-xl">
          Thank you for reaching out, I will get back to you shortly!
        </h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="name" className="ml-8 text-base uppercase">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="bg-transparent border-b-2 border-emerald-300 focus:outline-none capitalize"
      />
      <ValidationError prefix="Name" field="Name" errors={state.errors} />
      <label htmlFor="email" className="ml-8 mt-2 text-base uppercase">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="bg-transparent border-b-2 border-emerald-300 focus:outline-none"
      />
      <ValidationError prefix="Email" field="Email" errors={state.errors} />
      <label htmlFor="email" className="ml-8 mt-2 text-base uppercase">
        Message
      </label>
      <textarea
        id="message"
        type="text"
        name="message"
        required
        className="bg-transparent border-b-2 border-emerald-300 p-2 focus:outline-none resize-none"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="w-48 self-end uppercase mt-4 text-slate-600 hover:text-black border-b-4 border-emerald-300 inline-block p-4 bg-transparent "
      >
        send message
      </button>
    </form>
  );
};

export default ContactForm;
