"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import type { ContactPageDict, FooterDict } from "@/lib/i18n";

interface ContactClientPageProps {
  dict: ContactPageDict;
  contactInfo: FooterDict["contactInfo"];
}

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export function ContactClientPage({
  dict,
  contactInfo,
}: ContactClientPageProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = dict.form.errorRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = dict.form.errorRequired;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = dict.form.errorEmail;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = dict.form.errorRequired;
    }

    if (!formData.service) {
      newErrors.service = dict.form.errorRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = dict.form.errorRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Eroare la trimiterea mesajului.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Eroare la trimiterea mesajului. Te rugăm să încerci din nou.";
      setErrors((prev) => ({
        ...prev,
        message,
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-primary-200 selection:text-primary-900 relative">
      <div className="absolute inset-0 bg-grid-slate-thin opacity-50 pointer-events-none" />
      <main className="flex-1 pt-28 md:pt-36 pb-16 md:pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Header Section */}
          <div className="max-w-3xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xs font-semibold text-primary-600 tracking-wider uppercase mb-3 inline-block"
            >
              {dict.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="heading-dominant text-slate-900 mb-6"
            >
              {dict.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl"
            >
              {dict.subtitle}
            </motion.p>
          </div>

          {/* 2-Col Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT COLUMN: Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="h-full p-8 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative overflow-hidden shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                {dict.details.infoTitle ?? dict.details.title}
              </h2>
              
              <div className="flex flex-col">
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0 group">
                  <div className="h-10 w-10 rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{dict.details.phoneLabel}</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5 group-hover:text-primary-600 transition-colors">{dict.details.phoneValue}</div>
                  </div>
                </a>

                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0 group">
                  <div className="h-10 w-10 rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{dict.details.emailLabel}</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5 break-all group-hover:text-primary-600 transition-colors">{dict.details.emailValue}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0">
                  <div className="h-10 w-10 rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{dict.details.addressLabel}</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">{dict.details.addressValue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0">
                  <div className="h-10 w-10 rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{dict.details.hoursLabel}</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">{dict.details.hoursValue}</div>
                  </div>
                </div>
              </div>

              <div className="relative h-56 rounded-2xl overflow-hidden mt-6 group">
                <Image
                  src="/images/team/SNY09458.jpg"
                  alt="Echipa Megagis pe teren"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="h-full p-8 rounded-3xl border border-slate-200/50 bg-white hover:border-primary-300 transition-all duration-500 relative overflow-hidden shadow-lg"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.form.title}
                </h2>
                <p className="text-slate-600 text-sm">
                  {dict.form.subtitle}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    data-testid="contact-success-message"
                    className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                  >
                    <div className="h-16 w-16 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {dict.form.successTitle}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                      {dict.form.successMessage}
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={handleResetForm}
                        className="px-6 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold transition-colors"
                      >
                        {dict.form.newQuoteBtn}
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="quote-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{dict.form.fullNameLabel} *</label>
                      <input
                        id="fullName"
                        type="text"
                        data-testid="contact-name-input"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={dict.form.fullNamePlaceholder}
                        className={`w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all bg-white ${errors.fullName ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{dict.form.orgLabel}</label>
                      <input
                        id="organization"
                        type="text"
                        data-testid="contact-org-input"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={dict.form.orgPlaceholder}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{dict.form.emailLabel} *</label>
                        <input
                          id="email"
                          type="email"
                          data-testid="contact-email-input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={dict.form.emailPlaceholder}
                          className={`w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all bg-white ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{dict.form.phoneLabel} *</label>
                        <input
                          id="phone"
                          type="tel"
                          data-testid="contact-phone-input"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={dict.form.phonePlaceholder}
                          className={`w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all bg-white ${errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{dict.form.serviceLabel} *</label>
                      <select
                        id="service"
                        data-testid="contact-service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all bg-white ${!formData.service ? "text-slate-400" : ""} ${errors.service ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      >
                        <option value="" disabled className="text-slate-400">
                          {dict.form.servicePlaceholder}
                        </option>
                        <option value="cadastru">{dict.form.serviceOptions.cadastru}</option>
                        <option value="topografie">{dict.form.serviceOptions.topografie}</option>
                        <option value="gis">{dict.form.serviceOptions.gis}</option>
                        <option value="rsv">{dict.form.serviceOptions.rsv}</option>
                        <option value="consultanta">{dict.form.serviceOptions.consultanta}</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{dict.form.messageLabel} *</label>
                      <textarea
                        id="message"
                        rows={5}
                        data-testid="contact-message-input"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={dict.form.messagePlaceholder}
                        className={`w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all bg-white resize-y ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        data-testid="contact-submit-btn"
                        className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 group"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            {dict.form.submittingBtn}
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            {dict.form.submitBtn}
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
