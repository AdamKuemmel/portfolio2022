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
        <h4 className="text-4xl font-semibold text-center">
          Heres a few ways we can connect{" "}
          <span className="underline decoration-yellow-300/50">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-yellow-400 animate-pulse h-7 w-7" />
            <p className="text-2xl">+516.695.8650</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-yellow-400 animate-pulse h-7 w-7" />
            <p className="text-2xl">+516.695.8650</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-yellow-400 animate-pulse h-7 w-7" />
            <p className="text-2xl">+516.695.8650</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col mx-auto space-y-2 w-fit"
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
            className="px-10 py-5 text-lg font-bold text-black bg-yellow-400 rounded-md"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
