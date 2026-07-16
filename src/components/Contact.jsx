import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ubo9esn",
        "template_3dle5w3",
        form.current,
        "stbPOPbdonos2QskF"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-cyan-400 text-center mb-6"
        >
          Get In Touch
        </motion.h2>

        <p className="text-center text-slate-300 max-w-3xl mx-auto mb-16">
          I'm always interested in software engineering opportunities,
          machine learning projects, business intelligence work,
          research collaborations, and freelance projects.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-slate-900/70 border border-slate-700 rounded-3xl p-10"
          >

            <h3 className="text-3xl font-bold text-cyan-400 mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">

                <FaEnvelope
                  className="text-cyan-400 mt-1"
                  size={22}
                />

                <div>
                  <h4>Email</h4>

                  <a
                    href="mailto:enowbisong00@gmail.com"
                    className="text-slate-300 hover:text-cyan-400"
                  >
                    enowbisong00@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex gap-5">

                <FaPhone
                  className="text-cyan-400 mt-1"
                  size={22}
                />

                <div>

                  <h4>Phone</h4>

                  <p className="text-slate-300">
                    +91 9779449975
                  </p>

                  <p className="text-slate-300">
                    +237 654784846
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <FaMapMarkerAlt
                  className="text-cyan-400 mt-1"
                  size={22}
                />

                <div>

                  <h4>Location</h4>

                  <p className="text-slate-300">
                    Punjab, India
                  </p>

                </div>

              </div>

              <div className="pt-6 border-t border-slate-700">

                <div className="flex gap-6 text-3xl">

                  <a
                    href="https://github.com/bisong00"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="hover:text-cyan-400 transition" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/bisong-enow-njang-ebob-r-9a9447246"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="hover:text-cyan-400 transition" />
                  </a>

                  <a
                    href="https://www.mygreatlearning.com/eportfolio/bisong-enow-njang-ebob-rene"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGraduationCap className="hover:text-cyan-400 transition" />
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-slate-900/70 border border-slate-700 rounded-3xl p-10"
          >

            <h3 className="text-3xl font-bold text-cyan-400 mb-8">
              Send Me a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-cyan-400 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-cyan-400 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-cyan-400 outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-cyan-400 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;