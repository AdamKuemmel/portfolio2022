import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:adamkuemmel@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="px-10 pt-10 text-xl font-semibold text-center">
          Heres a few ways we can connect
          <br />
          <span className="underline decoration-[#edf1cf]/50">Lets Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#edf1cf] animate-pulse h-7 w-7" />
            <p className="text-2xl">+516.695.8650</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#edf1cf] animate-pulse h-7 w-7" />
            <p className="text-2xl">adamkuemmel@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#edf1cf]] animate-pulse h-7 w-7" />
            <p className="text-2xl">Denver, CO</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col mx-auto space-y-2 "
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput"
              placeholder="Name"
            />
            <input
              {...register("email")}
              type="email"
              className="contactInput"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            className="contactInput"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            className="px-10 py-5 text-lg font-bold text-black bg-[#edf1cf] rounded-md"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
