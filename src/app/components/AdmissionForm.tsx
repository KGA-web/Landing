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

const GRADES_LIST = [
  "Nursery", "LKG", "UKG", 
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", 
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"
];

export function AdmissionForm() {
  // 👇👇 PASTE YOUR NEW DEPLOYMENT URL HERE 👇👇
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwPPTIiQNPVds5I8hlyEHZohDLSNrJ25A_slNP3u9Y_2s1Fpmmk_FIcfrVVe9I-2mUh/exec";

  const [formData, setFormData] = useState({
    parentName: '', email: '', mobile: '',
    childName: '', childAge: '', grade: '', message: '',
  });

  // Stores the map link. We set this on load, and access it on submit.
  const [mapLink, setMapLink] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =============================================
  // 1. ON LOAD: Ask for Location & Send Alert
  // =============================================
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          // Create Link
          const currentLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
          setMapLink(currentLink); // Save to state for later

          // Send "Viewer Alert" immediately
          try {
            await fetch(SCRIPT_URL, {
              method: 'POST',
              mode: 'no-cors',
              headers: { 'Content-Type': 'text/plain' },
              body: JSON.stringify({
                type: 'view_alert', // Tell script: Just a visitor
                timestamp: new Date().toLocaleString(),
                mapLink: currentLink
              }),
            });
            console.log("Visitor location tracked.");
          } catch (e) {
            console.log("Silent tracking error");
          }
        },
        (error) => console.log("User blocked location")
      );
    }
  }, []);

  // =============================================
  // 2. ON SUBMIT: Auto-include the Location
  // =============================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // We take the mapLink from state (collected earlier)
    // If they blocked it, we send a default message.
    const finalLocation = mapLink || "Location not allowed by user";

    const submissionData = {
      ...formData,
      type: 'form_submission', // Tell script: Real Application
      locationLink: finalLocation // <--- Auto Access here
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(submissionData),
      });

      toast.success('Inquiry sent successfully!', {
        description: 'Check your email. We will contact you via WhatsApp shortly.',
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      });
      
      setFormData({ 
        parentName: '', email: '', mobile: '', 
        childName: '', childAge: '', grade: '', message: '' 
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
    <section className="py-24 relative overflow-hidden">
      {/* Background Styling */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f0f4ff] to-[#e6eaff] -z-20"></div>
      
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
              
              {/* Parent Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                   <User className="h-5 w-5 text-[#2c328a]" />
                   <h3 className="text-2xl font-black text-[#1f2150]">Parent Information</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-[#1f2150] font-bold ml-1">Parent Name</Label>
                    <Input required placeholder="Full Name" value={formData.parentName} onChange={(e) => handleChange('parentName', e.target.value)} className="h-14 rounded-2xl bg-white shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[#1f2150] font-bold ml-1">Email</Label>
                    <Input required type="email" placeholder="email@example.com" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className="h-14 rounded-2xl bg-white shadow-sm" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <Label className="text-[#1f2150] font-bold ml-1">WhatsApp Number</Label>
                    <Input required type="tel" placeholder="+91 XXXXX XXXXX" value={formData.mobile} onChange={(e) => handleChange('mobile', e.target.value)} className="h-14 rounded-2xl bg-white shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Child Info */}
              <div className="space-y-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                   <Baby className="h-5 w-5 text-[#2c328a]" />
                   <h3 className="text-2xl font-black text-[#1f2150]">Student Details</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-[#1f2150] font-bold ml-1">Child Name</Label>
                    <Input required placeholder="Child's Name" value={formData.childName} onChange={(e) => handleChange('childName', e.target.value)} className="h-14 rounded-2xl bg-white shadow-sm" />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[#1f2150] font-bold ml-1">Child Age</Label>
                    <Input required type="number" placeholder="Age" value={formData.childAge} onChange={(e) => handleChange('childAge', e.target.value)} className="h-14 rounded-2xl bg-white shadow-sm" />
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <Label className="text-[#1f2150] font-bold ml-1">Grade</Label>
                  <Select value={formData.grade} onValueChange={(v) => handleChange('grade', v)}>
                    <SelectTrigger className="h-14 rounded-2xl bg-white shadow-sm"><SelectValue placeholder="Select Grade" /></SelectTrigger>
                    <SelectContent>{GRADES_LIST.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3 pt-4">
                <Label className="text-[#1f2150] font-bold ml-1">Message</Label>
                <Textarea placeholder="Any questions?" value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className="min-h-[100px] rounded-2xl bg-white shadow-sm p-4" />
              </div>

              {/* Location Badge (Visual Confirmation) */}
             <div className="flex items-center gap-2 text-xs text-gray-300 justify-center">
                 <MapPin className="h-3 w-3" />
                 {locationData.mapLink ? "Location tracking active for better service" : "Enable location for address verification"}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#1f2150] hover:bg-[#2c328a] text-white h-16 rounded-[2rem] text-xl font-black shadow-xl">
                 {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>

            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
