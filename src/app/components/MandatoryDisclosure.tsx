'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

// --- DATA CONFIGURATION ---
const generalInfo = [
  { sr: 1, item: "NAME OF THE SCHOOL", detail: "KOSHYS GLOBAL ACADEMIA" },
  { sr: 2, item: "AFFILIATION NO.", detail: "831504" },
  { sr: 3, item: "SCHOOL CODE", detail: "47183" },
  { sr: 4, item: "COMPLETE ADDRESS", detail: "SY NO.44/4, KADUSONNAPPANAHALLI, KANNUR POST, HENNUR – BAGALUR ROAD, BENGALURU, KARNATAKA – 562149" },
  { sr: 5, item: "PRINCIPAL NAME", detail: "Mrs. ASHA SUNIL" },
  { sr: 6, item: "PRINCIPAL QUALIFICATION", detail: "M.A B.ED PGDIP ELT DIP SPECIAL EDUCATION" },
  { sr: 7, item: "SCHOOL EMAIL ID", detail: "info@koshysglobalacademia.com" },
  { sr: 8, item: "CONTACT DETAILS", detail: "8867866813" },
];

const documents = [
  { sr: 1, item: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION", link: "https://drive.google.com/file/d/1bPd6WaIA12rga4RaJpQSaq-LhaErzpR5/view?usp=sharing" },
  { sr: 2, item: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/TRUST-DEED.pdf" },
  { sr: 3, item: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/09/NOC.pdf" },
  { sr: 4, item: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL", link: "https://koshysglobalacademia.com/mandatory-disclosure/#" },
  { sr: 5, item: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", link: "https://koshysglobalacademia.com/wp-content/uploads/2025/10/Building_safety.pdf" },
  { sr: 6, item: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", link: "https://koshysglobalacademia.com/wp-content/uploads/2025/10/Fire_safety_renewd.pdf" },
  { sr: 7, item: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/Self-certificate.pdf" },
  { sr: 8, item: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/Water-sanitary.pdf" },
  { sr: 9, item: "LAND CERTIFICATE", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/Land-certificate.pdf" },
  { sr: 10, "item": "WATER TEST REPORT", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/Water-Test-report.pdf" },
  { sr: 11, "item": "RR COPY", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/09/RR-latest.pdf" },
  { sr: 12, "item": "NCERT BOOKS", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/NCERT-BOOKS.pdf" },
  { sr: 13, "item": "POCSO", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/POCSO.pdf" },
];

const academics = [
  { sr: 1, item: "FEE STRUCTURE OF THE SCHOOL", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/06/Fee-structure.pdf" },
  { sr: 2, item: "ANNUAL ACADEMIC CALENDER", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/06/Academic-Calendar1.pdf" },
  { sr: 3, item: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/SMC-LATEST.pdf" },
  { sr: 4, item: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", link: "https://koshysglobalacademia.com/wp-content/uploads/2024/05/PTA-LATEST.pdf" },
  { sr: 5, item: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION", detail: "AS PER APPLICABILITY" },
];

const staff = [
  { sr: 1, item: "PRINCIPAL", detail: "Mrs. ASHA SUNIL" },
  { sr: 2, item: "TOTAL NO. OF TEACHERS", detail: "20" },
  { sr: 3, item: "PGT", detail: "0" },
  { sr: 4, item: "TGT", detail: "9" },
  { sr: 5, item: "PRT", detail: "11" },
  { sr: 6, item: "TEACHERS SECTION RATIO", detail: "1:1.5" },
  { sr: 7, item: "DETAILS OF SPECIAL EDUCATOR", detail: "Mrs. ASHA SUNIL" },
  { sr: 8, item: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER", detail: "Mrs FARHA’S SABHA" },
];

const infrastructure = [
  { sr: 1, item: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)", detail: "6341.68" },
  { sr: 2, item: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)", detail: "20 Rooms (55 Sq Mtr each)" },
  { sr: 3, item: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)", detail: "4 Labs (57 Sq Mtr each)" },
  { sr: 4, item: "INTERNET FACILITY", detail: "YES" },
  { sr: 5, item: "NO. OF GIRLS TOILETS", detail: "8" },
  { sr: 6, item: "NO. OF BOYS TOILETS", detail: "8" },
];

export function MandatoryDisclosure() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="bg-[#2c328a] text-white p-4 rounded-t-xl mt-12 mb-0">
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider flex items-center gap-3">
        <FileText className="h-6 w-6" />
        {title}
      </h2>
    </div>
  );

  const TableRow = ({ sr, item, detail, link, index }: any) => (
    <tr className={`border-b border-gray-100 transition-colors hover:bg-blue-50/50 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8faff]'}`}>
      <td className="p-4 text-center font-bold text-gray-500 w-16">{sr}</td>
      <td className="p-4 text-[#1f2150] font-medium border-l border-r border-gray-100">{item}</td>
      <td className="p-4 w-1/4 text-center">
        {link ? (
          <a 
            href={link} 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef2ff] text-[#2c328a] rounded-lg text-sm font-bold hover:bg-[#2c328a] hover:text-white transition-all group"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Click Here</span>
            <span className="sm:hidden">View</span>
          </a>
        ) : (
          <span className="text-gray-700 font-semibold">{detail}</span>
        )}
      </td>
    </tr>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      {/* Header Banner */}
      <div className="bg-[#1f2150] pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Mandatory Disclosure
          </motion.h1>
          <p className="text-white/60 max-w-2xl">
            In compliance with the norms of the Central Board of Secondary Education (CBSE).
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        
        {/* A: GENERAL INFORMATION */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <SectionHeader title="A. General Information" />
          <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-t-0 border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                    <th className="p-4 font-bold text-center">Sr. No.</th>
                    <th className="p-4 font-bold border-l border-white">Information</th>
                    <th className="p-4 font-bold border-l border-white text-center">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {generalInfo.map((row, i) => <TableRow key={i} {...row} index={i} />)}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* B: DOCUMENTS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeader title="B. Documents and Information" />
          <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-t-0 border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-gray-100">
                  {documents.map((row, i) => <TableRow key={i} {...row} index={i} />)}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* C: RESULT AND ACADEMICS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeader title="C. Result and Academics" />
          <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-t-0 border-gray-100">
             <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {academics.map((row, i) => <TableRow key={i} {...row} index={i} />)}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* D: STAFF */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeader title="D. Staff (Teaching)" />
          <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-t-0 border-gray-100">
             <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {staff.map((row, i) => <TableRow key={i} {...row} index={i} />)}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* E: INFRASTRUCTURE */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeader title="E. School Infrastructure" />
          <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border border-t-0 border-gray-100">
             <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {infrastructure.map((row, i) => <TableRow key={i} {...row} index={i} />)}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
