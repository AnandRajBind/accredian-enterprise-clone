'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalOverlay } from '@/components/ui/ModalOverlay';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { Button } from '@/components/ui/Button';
import { completeReferralSchema } from '@/lib/validations/referral.schema';
import { PROGRAMS_DATA } from '@/constants/programs.constants';
import { submitReferral } from '@/services/referral.service';

export function ReferralModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(completeReferralSchema),
    mode: 'onTouched',
    defaultValues: {
      referrerName: '',
      referrerEmail: '',
      referrerPhone: '',
      refereeName: '',
      refereeEmail: '',
      refereePhone: '',
      programInterest: '',
    },
  });

  const handleNextStep = async () => {
    const isStep1Valid = await trigger(['referrerName', 'referrerEmail', 'referrerPhone']);
    if (isStep1Valid) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const onSubmit = async (data) => {
    try {
      setServerError(null);
      await submitReferral(data);
      setIsSuccess(true);
    } catch (err) {
      setServerError(err.message || 'Failed to submit referral. Please check details and try again.');
    }
  };

  const handleModalClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setServerError(null);
      reset();
    }, 200);
  };

  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={handleModalClose}
      title={isSuccess ? 'Referral Submitted!' : 'Refer a Colleague & Earn Cash'}
      description={
        isSuccess
          ? 'Your referral has been successfully registered.'
          : `Step ${step} of 2: ${step === 1 ? 'Your Details (Referrer)' : 'Colleague Details (Referee)'}`
      }
      maxWidth="max-w-xl"
    >
      {isSuccess ? (
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Thank You for Referring!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            We’ve sent a confirmation email with your unique referral tracking link. Once your referee completes enrollment, your ₹10,000 reward will be processed!
          </p>
          <div className="pt-2">
            <Button variant="primary" size="md" onClick={handleModalClose}>
              Done & Close
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step === 2 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
          </div>

          {serverError && (
            <div className="p-3 text-xs bg-red-50 text-red-600 rounded-lg border border-red-200">
              {serverError}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <InputField
                label="Your Full Name"
                placeholder="e.g. Alex Johnson"
                required
                error={errors.referrerName?.message}
                register={register('referrerName')}
              />
              <InputField
                label="Your Work Email"
                type="email"
                placeholder="alex@company.com"
                required
                error={errors.referrerEmail?.message}
                register={register('referrerEmail')}
              />
              <InputField
                label="Your Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                required
                error={errors.referrerPhone?.message}
                register={register('referrerPhone')}
              />

              <div className="pt-4 flex justify-end">
                <Button variant="primary" size="md" type="button" onClick={handleNextStep}>
                  Next: Referee Details &rarr;
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <InputField
                label="Friend / Colleague Full Name"
                placeholder="e.g. Sam Wilson"
                required
                error={errors.refereeName?.message}
                register={register('refereeName')}
              />
              <InputField
                label="Friend / Colleague Email"
                type="email"
                placeholder="sam.wilson@enterprise.com"
                required
                error={errors.refereeEmail?.message}
                register={register('refereeEmail')}
              />
              <InputField
                label="Friend / Colleague Phone"
                type="tel"
                placeholder="+91 98765 43211"
                required
                error={errors.refereePhone?.message}
                register={register('refereePhone')}
              />
              <SelectField
                label="Program to Recommend"
                placeholder="Select program"
                required
                error={errors.programInterest?.message}
                register={register('programInterest')}
                options={PROGRAMS_DATA.map((p) => ({ label: p.title, value: p.id }))}
              />

              <div className="pt-4 flex items-center justify-between gap-3">
                <Button variant="outline" size="md" type="button" onClick={handlePrevStep}>
                  &larr; Back
                </Button>
                <Button variant="secondary" size="md" type="submit" isLoading={isSubmitting}>
                  Submit Referral Payout &rarr;
                </Button>
              </div>
            </div>
          )}
        </form>
      )}
    </ModalOverlay>
  );
}

export default ReferralModal;
