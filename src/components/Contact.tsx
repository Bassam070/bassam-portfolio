import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/lib/data";
import { useForm, ValidationError } from "@formspree/react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Bassam-Mahdi",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Bassam070",
    href: personalInfo.github,
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xvzzgnpd");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="contact"
      className="relative bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={container}
        >
          {/* Contact methods */}
          <motion.div variants={fadeUp}>
            <motion.h3 className="text-lg font-semibold text-foreground mb-6" variants={fadeUp}>
              Contact Information
            </motion.h3>
            <motion.div className="space-y-4" variants={container}>
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label === "Email" || method.label === "Phone" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all group"
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="text-foreground font-medium">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div className="glass-card p-8" variants={fadeUp}>
            <motion.h3 className="text-lg font-semibold text-foreground mb-6" variants={fadeUp}>
              Send a Message
            </motion.h3>
            
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
              variants={container}
            >
              {state.succeeded && (
                <div className="flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Message sent! Thanks for reaching out.</span>
                </div>
              )}

              {!state.succeeded && state.errors?.length > 0 && (
                <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                  <span className="h-4 w-4 rounded-full bg-destructive/70" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-sm text-destructive"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your.email@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-sm text-destructive"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-sm text-destructive"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
