'use client';

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { contactData } from '@/lib/data';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  message?: string;
  error?: string;
}

// Form validation schema
const schema: yup.ObjectSchema<FormData> = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Please select a subject"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const { field: subjectField } = useController({
    name: "subject",
    control,
    defaultValue: "",
  });

  const onSubmit = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const token = await recaptchaRef.current?.executeAsync();
      
      if (!token) {
        throw new Error('Failed to execute reCAPTCHA');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          // recaptchaToken: token,
        }),
      });

      const responseData: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to send message');
      }

      setSubmitSuccess(true);
      reset();
      recaptchaRef.current?.reset();
    } catch (error: unknown) {
      setSubmitError(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-4xl text-accent">Let's get in touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input {...register("firstName")} placeholder="First name" />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <Input {...register("lastName")} placeholder="Last name" />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <Input {...register("email")} type="email" placeholder="Email address" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <Select
                  onValueChange={subjectField.onChange}
                  value={subjectField.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select what you want" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select what you want</SelectLabel>
                      <SelectItem value="wdo">Web development outsourcing</SelectItem>
                      <SelectItem value="pjr">Part-time job invitation</SelectItem>
                      <SelectItem value="rii">Recruitment/Interview invitation</SelectItem>
                      <SelectItem value="git">Get in touch</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <Textarea {...register("message")} className="h-[200px]" placeholder="Type your message here." />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              />
              <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
              {submitError && <p className="text-red-500 mt-2">{submitError}</p>}
              {submitSuccess && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactData.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
