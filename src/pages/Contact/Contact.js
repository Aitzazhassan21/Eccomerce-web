import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MdEmail, MdPhone, MdLocationOn, MdMessage } from "react-icons/md";
import emailjs from "@emailjs/browser";

import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

// Initialize EmailJS with your public key
emailjs.init("fn5Y4WWVqogh66fxu");

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = async (values) => {
    try {
      const templateParams = {
        from_name: values.clientName,
        from_email: values.email,
        phone: values.phone || "Not provided",
        subject: values.subject,
        message: values.messages,
        to_email: "hassanqasim3663@gmail.com",
      };

      const result = await emailjs.send(
        "service_q7e33or",
        "template_u5r88ew",
        templateParams
      );

      console.log("Email sent successfully:", result.text);
      return { success: true };
    } catch (error) {
      console.error("Email failed to send:", error);
      return { success: false, error: error.text || error.message };
    }
  };

  return (
    <div className="max-w-container mx-auto px-4 py-10">
      <Breadcrumbs title="Contact" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20">
        {/* Contact Information Section */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-titleFont font-bold text-4xl mb-2">Get in Touch</h1>
            <p className="text-gray-600 text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="bg-primeColor p-3 rounded-full">
                <MdLocationOn className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-titleFont font-semibold text-lg">Address</h3>
                <p className="text-gray-600">Collage Road Gobhind Garh <br />Street 16</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="bg-primeColor p-3 rounded-full">
                <MdPhone className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-titleFont font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+92 326 2840005</p>
                <p className="text-gray-600">Mon-Fri 9am-6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="bg-primeColor p-3 rounded-full">
                <MdEmail className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-titleFont font-semibold text-lg">Email</h3>
                <p className="text-gray-600">hassanofficial414@gmail.com</p>
                <p className="text-gray-600">We respond within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6">
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108915.4468525398!2d74.2776649!3d31.4830993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc20bef06516b11e8!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713288000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pakistan Map"
              />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primeColor p-2 rounded-full">
              <MdMessage className="text-white text-xl" />
            </div>
            <h2 className="font-titleFont font-bold text-2xl">Send us a Message</h2>
          </div>

          <Formik
            initialValues={{
              clientName: "",
              email: "",
              phone: "",
              subject: "",
              messages: ""
            }}
            validationSchema={Yup.object({
              clientName: Yup.string().required("Please enter your name"),
              email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
              phone: Yup.string().matches(/^[0-9+\s-()]{10,}$/, "Please enter a valid phone number"),
              subject: Yup.string().required("Please enter a subject"),
              messages: Yup.string().min(10, "Message must be at least 10 characters").required("Please enter your message")
            })}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
              setErrorMsg("");
              setSuccessMsg("");
              
              const result = await sendEmail(values);
              
              if (result.success) {
                setSuccessMsg(`Thank you ${values.clientName}! Your message has been sent successfully. We'll get back to you at ${values.email} within 24 hours.`);
                resetForm();
              } else {
                setErrorMsg("Failed to send message. Please try again or contact us directly at support@orebi.com");
              }
              
              setTimeout(() => {
                setSuccessMsg("");
                setErrorMsg("");
              }, 8000);
              
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-5">
                <div>
                  <label className="text-base font-titleFont font-semibold px-2 block mb-1">
                    Full Name *
                  </label>
                  <Field
                    type="text"
                    name="clientName"
                    className="w-full py-2 px-4 border-2 rounded-lg text-base font-medium placeholder:text-sm outline-none focus:border-primeColor transition-colors"
                    placeholder="John Doe"
                  />
                  <ErrorMessage name="clientName" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-base font-titleFont font-semibold px-2 block mb-1">
                      Email *
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full py-2 px-4 border-2 rounded-lg text-base font-medium placeholder:text-sm outline-none focus:border-primeColor transition-colors"
                      placeholder="john@example.com"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2" />
                  </div>

                  <div>
                    <label className="text-base font-titleFont font-semibold px-2 block mb-1">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      className="w-full py-2 px-4 border-2 rounded-lg text-base font-medium placeholder:text-sm outline-none focus:border-primeColor transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2" />
                  </div>
                </div>

                <div>
                  <label className="text-base font-titleFont font-semibold px-2 block mb-1">
                    Subject *
                  </label>
                  <Field
                    type="text"
                    name="subject"
                    className="w-full py-2 px-4 border-2 rounded-lg text-base font-medium placeholder:text-sm outline-none focus:border-primeColor transition-colors"
                    placeholder="How can we help you?"
                  />
                  <ErrorMessage name="subject" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2" />
                </div>

                <div>
                  <label className="text-base font-titleFont font-semibold px-2 block mb-1">
                    Message *
                  </label>
                  <Field
                    as="textarea"
                    name="messages"
                    rows="5"
                    className="w-full py-2 px-4 border-2 rounded-lg text-base font-medium placeholder:text-sm outline-none focus:border-primeColor resize-none transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  />
                  <ErrorMessage name="messages" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primeColor text-white h-12 font-titleFont text-lg tracking-wide font-semibold hover:bg-black duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>

          {successMsg && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-medium">{successMsg}</p>
            </div>
          )}

          {errorMsg && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium">{errorMsg}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

