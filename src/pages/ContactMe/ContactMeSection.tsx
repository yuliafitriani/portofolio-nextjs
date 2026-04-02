"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Modal from "./Modal";
import { Whatsapp } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";

const ContactMeSection = () => {
  const [form, setForm] = useState({
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const phone = "6282186970654"; // nomor WA (pakai 62, tanpa 0)
    const text = encodeURIComponent(
      form.message || "Halo saya ingin menghubungi Anda",
    );

    const url = `https://wa.me/${phone}?text=${text}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
      setResult("success");
    }, 500);
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
              {/* MESSAGE */}
              <div className="w-full">
                <Textarea
                  id="message"
                  className="w-full"
                  placeholder="Message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ message: e.target.value })}
                />
              </div>

              {/* SUBMIT */}
              <div className="w-full">
                <Button
                  className="w-full lg:w-full rounded-full"
                  disabled={loading}
                >
                  <Whatsapp />
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
