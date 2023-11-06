import ContactForm from "./ContactForm";
import ContactMessage from "./ContactMessage";
import Footer from "./Footer";
const Contact = () => {
  return (
    <section className=" bg-slate-100" id="contact">
      <div className="py-20 align-element grid lg:grid-cols-2 lg:gap-8">
        <ContactMessage />
        <ContactForm />
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
