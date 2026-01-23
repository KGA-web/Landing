import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { toast } from 'sonner';
import { Send, CheckCircle2, User, Phone, Mail, Baby, GraduationCap } from 'lucide-react';

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

      // Because 'no-cors' doesn't return a readable response, 
      // we assume success if the fetch doesn't throw.
      toast.success('Inquiry sent successfully!', {
        description: 'Our admissions team will contact you shortly.',
        icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      });
      
      // Reset form
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
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#6071dd]/5 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#1f2150]/5 rounded-full blur-[100px] -ml-20 -mb-20" />

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
            Please provide the details below to begin your child's enrollment process at KGA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 shadow-[0_20px_60px_rgba(31,33,80,0.08)] border-none rounded-[3rem] bg-white">
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
                      className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-[#6071dd]"
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
                        className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11"
                      />
                      <Mail className="absolute left-4 top-4.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <Label htmlFor="mobile" className="text-[#1f2150] font-bold ml-1">Mobile Number</Label>
                    <div className="relative">
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.mobile}
                        onChange={(e) => handleChange('mobile', e.target.value)}
                        required
                        className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white pl-11"
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
                      className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white"
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
                      className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <Label htmlFor="grade" className="text-[#1f2150] font-bold ml-1">Grade Applying For</Label>
                  <Select value={formData.grade} onValueChange={(v) => handleChange('grade', v)}>
                    <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:ring-[#6071dd]">
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map(g => (
                        <SelectItem key={g} value={g.toLowerCase()}>{g}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3 pt-4">
                <Label htmlFor="message" className="text-[#1f2150] font-bold ml-1">Additional Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your child..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="min-h-[120px] rounded-[2rem] border-gray-100 bg-gray-50/50 focus:bg-white p-6 resize-none"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1f2150] hover:bg-[#2c328a] text-white h-16 rounded-[2rem] text-xl font-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 italic">Sending Inquiry...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Inquiry <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
                <p className="text-center text-xs text-black/40 mt-6 font-medium uppercase tracking-widest">
                  Secure Data Encryption Enabled
                </p>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
