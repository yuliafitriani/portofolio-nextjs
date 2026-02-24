"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";

const ContactMeSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setResult(isSuccess ? "success" : "error");
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <section className="relative">
        <div className="container max-w-290 mx-auto px-6 flex flex-col lg:flex-row">
          {/* Header */}
          <div className="mb-14 space-y-8 lg:w-1/2 content-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center lg:text-left">
              Contact Me
            </h2>
            <p className="text-muted-foreground text-lg text-center lg:text-left">
              Feel free to drop a message for any inquiries or collaborations.
            </p>
          </div>
          <div className="w-full max-w-xl mx-auto p-8 bg-white/5 backdrop-blur-5 rounded-4xl">
            <form className="space-y-8 w-full" onSubmit={handleSubmit}>
              {/* NAME */}
              <div className="w-full">
                <Input
                  id="name"
                  placeholder="Name"
                  className="w-full"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="w-full">
                <Input
                  id="email"
                  type="email"
                  className="w-full"
                  placeholder="Email"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="w-full">
                <Textarea
                  id="message"
                  className="w-full"
                  placeholder="Message"
                  required
                />
              </div>

              {/* SUBMIT */}
              <div className="w-full">
                <Button
                  className="w-full lg:w-full rounded-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {result && (
        <Modal
          status={result}
          loading={loading}
          onRetry={() => setResult(null)}
          onClose={() => setResult(null)}
        />
      )}
    </>
  );
};

export default ContactMeSection;
