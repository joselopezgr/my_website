"use client";

import { FC } from "react";
import { sendEmail } from "@/utils/sendEmail";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6">
      <div className="my-12 pb-8 md:pt-16 md:pb-32">
        <h1 className="text-left font-bold text-4xl pb-8">
          &lt; Contact me <span style={{ color: "#d66853" }}>/</span>&gt;
        </h1>

        <div className="contact-container flex justify-center items-center h-full mt-6 pt-8 pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 bg-neutral-200 opacity-80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 bg-neutral-200 py-3 opacity-80 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 bg-neutral-200 opacity-80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div>
              <button className="contact-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
