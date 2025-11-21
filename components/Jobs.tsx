import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { JOBS_DATA } from '../constants';

const Jobs: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <section id="jobs" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zzs-dark mb-4">Aktuálně hledáme</h2>
          <p className="text-lg text-gray-600">Najděte svou pozici a staňte se součástí týmu.</p>
        </div>

        <div className="space-y-4">
          {JOBS_DATA.map((job) => (
            <div 
              key={job.id} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${
                expandedJob === job.id ? 'shadow-lg border-zzs-red' : 'shadow-sm border-gray-200 hover:border-red-200'
              }`}
            >
              {/* Header (Always Visible) */}
              <div 
                className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                onClick={() => toggleJob(job.id)}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Briefcase className="w-3 h-3 mr-1" /> {job.type}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <MapPin className="w-3 h-3 mr-1" /> {job.locations.join(', ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zzs-dark">{job.title}</h3>
                  <p className="text-gray-500 mt-1">{job.shortDescription}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-zzs-red font-semibold text-sm hover:underline">
                    {expandedJob === job.id ? 'Méně informací' : 'Více informací'}
                  </button>
                  <div className={`bg-gray-100 p-2 rounded-full transition-transform duration-300 ${expandedJob === job.id ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedJob === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <h4 className="font-bold text-zzs-dark mb-3">Požadavky</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-zzs-dark mb-3">Nabízíme</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                        {job.benefits.map((ben, idx) => (
                          <li key={idx}>{ben}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Máte dotaz? Kontaktujte nás:</p>
                      <p className="font-bold text-zzs-dark">{job.contact.email}</p>
                    </div>
                    <a 
                      href={`mailto:${job.contact.email}?subject=Zájem o pozici: ${job.title}`}
                      className="inline-flex items-center px-6 py-3 bg-zzs-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-md"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Poslat životopis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;