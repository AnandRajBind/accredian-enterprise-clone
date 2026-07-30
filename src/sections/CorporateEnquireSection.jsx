'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { Button } from '@/components/ui/Button';
import { enquireSchema } from '@/lib/validations/enquire.schema';
import { submitEnquiry } from '@/services/enquire.service';

export function CorporateEnquireSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(enquireSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      teamSize: '',
      programInterest: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      setServerError(null);
      await submitEnquiry(data);
      setIsSubmitted(true);
      reset();
    } catch (err) {
      setServerError(err.message || 'Something went wrong. Please try again or contact enterprise@accredian.com.');
    }
  };

  return (
    <section id="enquire" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-blue-400">
              Corporate Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Transform Your Team with Custom Enterprise Curricula
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Schedule a consultation with our curriculum architects to conduct a skill gap analysis and tailor learning cohorts to your product roadmap.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Customized Team Learning</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Tailored labs and real-world capstones built on your company’s tech stack.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Real-time Analytics Dashboard</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Track attendance, module completions, and employee skill benchmarks live.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Request a Corporate Demo
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below and an enterprise advisor will contact you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Inquiry Submitted!</h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    Thank you for reaching out. An enterprise training specialist will get in touch shortly.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {serverError && (
                    <div className="p-3 text-xs bg-red-50 text-red-600 rounded-lg border border-red-200">
                      {serverError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Full Name"
                      placeholder="e.g. Priya Sharma"
                      required
                      error={errors.fullName?.message}
                      register={register('fullName')}
                    />
                    <InputField
                      label="Work Email"
                      type="email"
                      placeholder="priya@company.com"
                      required
                      error={errors.workEmail?.message}
                      register={register('workEmail')}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Company Name"
                      placeholder="e.g. TechCorp Solutions"
                      required
                      error={errors.companyName?.message}
                      register={register('companyName')}
                    />
                    <SelectField
                      label="Team Size"
                      placeholder="Select team size"
                      required
                      error={errors.teamSize?.message}
                      register={register('teamSize')}
                      options={[
                        { label: '1 - 10 Employees', value: '1-10' },
                        { label: '11 - 50 Employees', value: '11-50' },
                        { label: '51 - 200 Employees', value: '51-200' },
                        { label: '200+ Employees', value: '200+' },
                      ]}
                    />
                  </div>

                  <SelectField
                    label="Program Interest"
                    placeholder="Select program area"
                    required
                    error={errors.programInterest?.message}
                    register={register('programInterest')}
                    options={[
                      { label: 'Executive Gen-AI Strategy', value: 'genai' },
                      { label: 'Global Product Management', value: 'product' },
                      { label: 'Data Engineering & MLOps', value: 'data' },
                      { label: 'Digital Leadership Elevation', value: 'leadership' },
                    ]}
                  />

                  <div>
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-200 block mb-1.5">
                      Message / Custom Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your team's learning goals..."
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      {...register('message')}
                    />
                  </div>

                  <Button variant="primary" size="lg" fullWidth isLoading={isSubmitting} type="submit">
                    Submit Proposal Request
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorporateEnquireSection;
