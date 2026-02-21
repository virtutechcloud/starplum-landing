"use client";
import { useState } from 'react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { Modal } from './ui/Modal';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { landingCopy } from '@/lib/landing';
import { FileText, Clock, Layers, ArrowRight } from 'lucide-react';

export const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<typeof landingCopy.templates[0] | null>(null);

  return (
    <section id="templates" className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Battle-tested templates."
          subtitle="Start with our audited high-volume templates or easily digitize your firm's own library with AI extraction."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingCopy.templates.map((template, i) => (
            <Card key={i} className="group cursor-pointer" onClick={() => setSelectedTemplate(template)}>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-plum-50 group-hover:text-plum-900 transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <Badge>{template.variant}</Badge>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-plum-900 transition-colors">
                {template.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                <span className="flex items-center gap-1.5"><Layers className="w-4 h-4" /> {template.clauses} Clauses</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {template.lastUpdated}</span>
              </div>
              
              <div className="relative h-24 overflow-hidden rounded-lg bg-slate-50 border border-slate-100 p-4">
                <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                  {template.preview}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-50 to-transparent" />
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preview Mode</span>
                 <ArrowRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform group-hover:text-plum-900" />
              </div>
            </Card>
          ))}
        </div>

        <Modal
          isOpen={!!selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          title={selectedTemplate?.title || "Template Preview"}
        >
          {selectedTemplate && (
            <div className="space-y-6">
              <div className="flex gap-4">
                 <Badge>{selectedTemplate.variant}</Badge>
                 <span className="text-sm text-slate-500">Draft version 2.4.1</span>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 max-h-96 overflow-y-auto font-serif">
                <p className="text-slate-900 text-lg mb-4 leading-relaxed">
                  {selectedTemplate.preview}
                </p>
                <div className="space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 bg-slate-200/50 rounded" style={{ width: `${((i * 7) % 40) + 60}%` }} />
                  ))}
                  <div className="p-4 bg-plum-50 border-l-4 border-plum-900 rounded-r-lg">
                     <p className="text-sm font-bold text-plum-900 mb-1">Clause Variant: Standard Indemnity</p>
                     <div className="h-3 bg-plum-200/50 rounded w-3/4" />
                  </div>
                   {[...Array(4)].map((_, i) => (
                    <div key={i+10} className="h-4 bg-slate-200/50 rounded" style={{ width: `${((i * 11) % 40) + 60}%` }} />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm">
                    <p className="font-bold text-slate-900 mb-1">Review Status</p>
                    <p className="text-green-600 flex items-center gap-1 font-medium">✓ Partner Approved</p>
                 </div>
                 <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm">
                    <p className="font-bold text-slate-900 mb-1">Variables</p>
                    <p className="text-slate-600 font-medium">12 Mapped Fields</p>
                 </div>
              </div>

              <div className="flex gap-3 justify-end pt-4">
                 <Button variant="ghost" onClick={() => setSelectedTemplate(null)}>Close</Button>
                 <Button>Use this Template</Button>
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
};
