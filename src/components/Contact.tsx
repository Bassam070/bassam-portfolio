<<<<<<< HEAD
import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
=======
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/lib/data";
<<<<<<< HEAD
import { useForm, ValidationError } from "@formspree/react";
=======
import { useToast } from "@/hooks/use-toast";
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0

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
<<<<<<< HEAD
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
=======
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="relative bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss opportunities? Let's connect.
          </p>
<<<<<<< HEAD
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
=======
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact methods */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
                  key={method.label}
                  href={method.href}
                  target={method.label === "Email" || method.label === "Phone" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all group"
<<<<<<< HEAD
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
=======
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="text-foreground font-medium">{method.value}</p>
                  </div>
<<<<<<< HEAD
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
=======
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? "border-destructive" : ""}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
<<<<<<< HEAD
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
=======
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
<<<<<<< HEAD
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
=======
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
<<<<<<< HEAD
                  disabled={state.submitting}
                >
                  {state.submitting ? (
=======
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
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
<<<<<<< HEAD
              </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
=======
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
>>>>>>> 64f63babd57fe3c26cd070c14c7a55cc66de90e0
  );
};

export default Contact;
