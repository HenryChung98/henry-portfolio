import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactCard() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("succeed:", result.text);
        alert("Thank you for contact me!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("failed:", error.text);
        alert("Failed for some reason");
      });
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-indigo-500 border-b-2">Contact Form</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#bae6fd] focus:border-[#7dd3fc]"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#bae6fd] focus:border-[#7dd3fc]"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#bae6fd] focus:border-[#7dd3fc]"
          rows="10"
        />
        <button
          type="submit"
          className="w-full bg-[#0ea5e9] text-white py-2 px-4 rounded hover:bg-[#7dd3fc] duration-100"
        >
          Submit
        </button>
      </form>
    </>
  );
}
