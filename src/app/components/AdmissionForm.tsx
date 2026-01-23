'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { toast } from 'sonner';
import { Send, CheckCircle2, User, Phone, Mail, Baby, MapPin } from 'lucide-react';

export function AdmissionForm() {
  // ✅ I HAVE INSERTED YOUR NEW URL HERE
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyVmsEViHlEHjhtvt3FeP5kMgNkxabIXvAbn_Hh2cAEjsyaD0K02iZV91ZeNJI3Z5WO/exec";

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    mobile: '',
    childName: '',
    childAge: '',
    grade: '',
    message: '',
  });

  const [locationData, setLocationData] = useState({
    mapLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. TRACKING: Get User Location & Send "Viewer Alert" on Load
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        // Construct a Google Maps link
        const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        
        setLocationData({ mapLink });

        // Send "Viewer Alert" to your Email (Silent background check)
        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // IMPORTANT: Prevents "CORS" errors in browser
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'view_alert',
                    timestamp: new Date().toLocaleString(),
                    mapLink: mapLink
                }),
            });
            console.log("Visitor location tracked");
        } catch (e) { 
            console.log("Tracking silent fail (expected in no-cors)"); 
        }

      }, (error) => {
        console.log("Location denied by user");
      });
    }
  }, []);

  // 2. FORM SUBMISSION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
        ...formData,
        type: 'form_submission',
        timestamp: new Date().toLocaleString(),
        locationLink: locationData.mapLink || "User denied location access"
    };

    try {
      // We use 'no-cors'. This sends the data but doesn't return a readable response.
      // This is the standard way to send data to Google Sheets from a frontend.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(submissionData),
      });

      // Assume success if fetch didn't throw a network error
      toast.success('Inquiry sent successfully!', {
        description: 'Check your email. We will contact you via WhatsApp shortly.',
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      });
      
      // Reset Form
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
      console.error(err);
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="admission-form" className="py-24 relative overflow-hidden">
       {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f0f4ff] to-[#e6eaff] -z-20"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-gradient-to-br from-[#6071dd]/30 to-[#2c328a]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-gradient-to-tr from-[#1f2150]/20 to-[#6071dd]/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMDAnIGhlaWdodD0nMjAwJyB4bWxuczp4bGl5az0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGl5ayc+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0nbm9uZScvPjxwYXRoIGQ9J00wIDBoMjAwdjIwMEgweicgZmlsbD0nbm9uZScvPjxnIGZpbGw9JyM2MDcxZGQnIGZpbGwtb3BhY2l0eT0nMC4wNSc+PGNpcmNsZSBjeD0nNDAnIGN5PSc0MCcgcj0nMC41Jy8+PGNpcmNsZSBjeD0nMTYwJyBjeT0nMTYwJyByPScwLjUnLz48Y2lyY2xlIGN4PSc0MCcIGN5PScxNjAnIHI9JzAuNScvPjxjaXJjbGUgY3g9JzE2MCcgY3k9JzQwJyByPScwLjUnLz48L2c+PC9zdmc+')] opacity-40 mix-blend-multiply -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#1f2150] tracking-tight">
            Admission Inquiry
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto font-medium leading-relaxed">
            Please provide the details below. Our team will contact you via WhatsApp within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(31,33,80,0.15)] border-none rounded-[3rem] bg-white/90 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Parent Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#6071dd]/10 rounded-lg">
                    <User className="h-5 w-5 text-[#2c328a]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1f2150]">Parent Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="parentName" className="text-[#1f2150] font-bold ml-1">Parent Name</Label>
                    <Input
                      id="parentName"
                      placeholder="Full Name"
                      value={formData.parentName}
                      onChange={(e) => handleChange('parentName', e.target.value)}
                      required
                      className="h-14 rounded-2xl border-gray-200 bg-white focus:ring-[#6071dd] shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-[#1f2150] font-bold ml-1">Email Address</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="h-14 rounded-2xl border-gray-200 bg-white focus:ring-[#6071dd] shadow-sm pl-11"
                      />
                      <Mail className="absolute left-4 top-4.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <Label htmlFor="mobile" className="text-[#1f2150] font-bold ml-1">WhatsApp Number</Label>
                    <div className="relative">
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.mobile}
                        onChange={(e) => handleChange('mobile', e.target.value)}
                        required
                        className="h-14 rounded-2xl border-gray-200 bg-white focus:ring-[#6071dd] shadow-sm pl-11"
                      />
                      <Phone className="absolute left-4 top-4.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Child Details */}
              <div className="space-y-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#6071dd]/10 rounded-lg">
                    <Baby className="h-5 w-5 text-[#2c328a]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1f2150]">Student Details</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="childName" className="text-[#1f2150] font-bold ml-1">Child's Name</Label>
                    <Input
                      id="childName"
                      placeholder="Enter child's name"
                      value={formData.childName}
                      onChange={(e) => handleChange('childName', e.target.value)}
                      required
                      className="h-14 rounded-2xl border-gray-200 bg-white focus:ring-[#6071dd] shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="childAge" className="text-[#1f2150] font-bold ml-1">Child's Age</Label>
                    <Input
                      id="childAge"
                      type="number"
                      placeholder="Age"
                      value={formData.childAge}
                      onChange={(e) => handleChange('childAge', e.target.value)}
                      required
                      className="h-14 rounded-2xl border-gray-200 bg-white focus:ring-[#6071dd] shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <Label htmlFor="grade" className="text-[#1f2150] font-bold ml-1">Grade Applying For</Label>
                  <Select value={formData.grade} onValueChange={(v) => handleChange('grade', v)}>
                    <SelectTrigger className="h-14 rounded-2xl border-gray-200 bg-white focus:ring-[#6071dd] shadow-sm">
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class
