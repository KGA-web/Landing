'use client';

import React, { useState } from 'react'; // Added React import explicitly
import { motion } from 'framer-motion';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { toast } from 'sonner';
import { Send, CheckCircle2, User, Phone, Mail, Baby } from 'lucide-react';

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    mobile: '',
    childName: '',
    childAge: '',
    grade: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVYqLCaJnduaK42u2DvKERAvgVQWKMMmLYyOk_VfSNHoox5R5-wx3Y7-fFEqZCM-__Dw/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      toast.success('Inquiry sent successfully!', {
        description: 'Our admissions team will contact you shortly.',
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      });
      
      setFormData({ 
        parentName: '', 
        email: '', 
        mobile: '', 
        childName: '', 
        childAge: '', 
        grade: '', 
        message: '' 
      });
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="admission-form" className="py-24 bg-[#f8faff] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#1f2150]">
            Admission Inquiry
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 shadow-xl border-none rounded-[3rem] bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="parentName">Parent Name</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleChange('parentName', e.target.value)}
                    required
                    className="h-14 rounded-2xl"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="h-14 rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="grade">Grade Applying For</Label>
                <Select value={formData.grade} onValueChange={(v) => handleChange('grade', v)}>
                  <SelectTrigger className="h-14 rounded-2xl">
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2'].map(g => (
                      <SelectItem key={g} value={g.toLowerCase()}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1f2150] hover:bg-[#2c328a] text-white h-16 rounded-[2rem] text-xl font-bold"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
