
"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { CompanyGapAnalysisForm, CompanyGapAnalysisFormValues } from '../../../components/CompanyGapAnalysisForm';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PrinterIcon, Share2Icon, CheckCircle2Icon, AlertTriangleIcon, LinkIcon } from 'lucide-react'; // Added LinkIcon

// Updated helper function to generate a clean slug from a company name
const generateSlug = (name: string): string => {
  if (!name || name.trim() === "") return `untitled-report-${Date.now()}`;
  
  let slug = name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/[^\[a-z0-9-\]]/g, '') // Remove non-alphanumeric characters (excluding hyphens)
    .replace(/-+/g, '-');          // Replace multiple hyphens with a single one

  // Trim leading/trailing hyphens
  if (slug.startsWith('-')) {
    slug = slug.substring(1);
  }
  if (slug.endsWith('-')) {
    slug = slug.slice(0, -1);
  }
  
  return slug || `untitled-report-${Date.now()}`; // Fallback if slug becomes empty
};

const ReportPage = () => {
  const params = useParams();
  const router = useRouter();
  const currentSlug = params.companyslug as string;

  const [initialData, setInitialData] = useState<Partial<CompanyGapAnalysisFormValues> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState("Company Gap Analysis Report");
  const [copiedLink, setCopiedLink] = useState(false);
  const [isNewAnalysis, setIsNewAnalysis] = useState(false);
  const [showSavePrompt, setShowSavePrompt] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null); // To display the generated URL

  useEffect(() => {
    if (currentSlug) {
      if (currentSlug === "new-analysis") {
        setIsNewAnalysis(true);
        setInitialData({});
        setPageTitle("Create New Gap Analysis Report");
        setShowSavePrompt(true);
        setGeneratedUrl(null); // Clear any previously generated URL
        setIsLoading(false);
      } else {
        setIsNewAnalysis(false);
        setShowSavePrompt(false);
        setGeneratedUrl(null);
        const savedData = localStorage.getItem(`report_${currentSlug}`);
        if (savedData) {
          try {
            const parsedData = JSON.parse(savedData);
            setInitialData(parsedData);
            setPageTitle(parsedData.clientName ? `${parsedData.clientName} - Gap Analysis Report` : `${currentSlug} - Gap Analysis Report`);
          } catch (error) {
            console.error("Failed to parse saved data:", error);
            setInitialData({}); 
            setPageTitle(`${currentSlug} - Gap Analysis Report`);
          }
        } else {
          setInitialData({}); 
          setPageTitle(`${currentSlug} - Gap Analysis Report (Not Saved Yet)`);
        }
        setIsLoading(false);
      }
    }
  }, [currentSlug]);

  const handleFormSubmit = useCallback((data: CompanyGapAnalysisFormValues) => {
    if (isNewAnalysis) {
      if (!data.clientName || data.clientName.trim() === "") {
        alert("Please enter a Company Name to create and save the report.");
        return;
      }
      const newSlug = generateSlug(data.clientName);
      const newReportUrl = `${window.location.origin}/reports/${newSlug}`;
      localStorage.setItem(`report_${newSlug}`, JSON.stringify(data));
      setGeneratedUrl(newReportUrl); // Set the generated URL to display
      // Alert is now part of the generatedUrl display logic
      router.push(`/reports/${newSlug}`); 
    } else if (currentSlug && currentSlug !== "new-analysis") {
      localStorage.setItem(`report_${currentSlug}`, JSON.stringify(data));
      alert("Report data updated successfully!");
      if (data.clientName) {
        setPageTitle(`${data.clientName} - Gap Analysis Report`);
      }
    }
  }, [isNewAnalysis, currentSlug, router]);
  
  const handleFormStateChange = useCallback((currentState: CompanyGapAnalysisFormValues) => {
    if (currentSlug && currentSlug !== "new-analysis" && !isLoading) {
      localStorage.setItem(`report_${currentSlug}`, JSON.stringify(currentState));
      if (currentState.clientName && pageTitle !== `${currentState.clientName} - Gap Analysis Report`){
        setPageTitle(`${currentState.clientName} - Gap Analysis Report`);
      } else if (!currentState.clientName && pageTitle !== `${currentSlug} - Gap Analysis Report`){
        setPageTitle(`${currentSlug} - Gap Analysis Report`);
      }
    }
  }, [currentSlug, isLoading, pageTitle]);

  const generateAndCopyShareableLink = (linkToCopy?: string) => {
    if (isNewAnalysis && !generatedUrl) {
        alert("Please save the report first to generate a shareable link.");
        return;
    }
    const link = linkToCopy || window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }).catch(err => {
      console.error('Failed to copy link: ', err);
      alert('Failed to copy link. Please copy it manually.');
    });
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading report data...</div>;
  }

  if (!currentSlug) {
    return <div className="flex justify-center items-center h-screen">Error: Report identifier not found in URL.</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-10 pb-6 border-b border-gray-200 print-header">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight sm:text-4xl">{pageTitle}</h1>
            <p className="text-md text-gray-500 mt-1 sm:text-lg">Live Strategic Planning & Performance Improvement Framework</p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" onClick={() => window.print()} className="text-gray-700 hover:bg-gray-100 w-full sm:w-auto justify-center" disabled={isNewAnalysis && !generatedUrl}>
              <PrinterIcon className="h-4 w-4 mr-2" /> Print / PDF
            </Button>
            <Button variant="outline" size="sm" onClick={() => generateAndCopyShareableLink()} className="text-gray-700 hover:bg-gray-100 w-full sm:w-auto justify-center" disabled={isNewAnalysis && !generatedUrl}>
              {copiedLink ? <CheckCircle2Icon className="h-4 w-4 mr-2 text-green-600" /> : <Share2Icon className="h-4 w-4 mr-2" />}
              {copiedLink ? 'Link Copied!' : 'Share Report'}
            </Button>
          </div>
        </div>
      </header>

      {isNewAnalysis && showSavePrompt && !generatedUrl && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
          <div className="flex">
            <div className="py-1"><AlertTriangleIcon className="h-6 w-6 text-blue-500 mr-3"/></div>
            <div>
              <p className="font-bold">Creating a New Report</p>
              <p className="text-sm">Please fill in the Company Name and other details. Click the "Save New Report & Create Link" button at the bottom to generate a permanent, shareable link for this report. Autosave is disabled until the report is saved for the first time.</p>
            </div>
          </div>
        </div>
      )}

      {generatedUrl && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
          <div className="flex items-center">
            <CheckCircle2Icon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0"/>
            <div>
              <p className="font-bold">Report Saved & Link Created!</p>
              <p className="text-sm mb-2">Your new report has been saved. You can access it directly using the link below. You have been redirected to this new page.</p>
              <div className="flex items-center gap-2 bg-green-100 p-2 rounded">
                <LinkIcon className="h-4 w-4 text-green-600 flex-shrink-0"/>
                <a href={generatedUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-green-800 hover:underline break-all">{generatedUrl}</a>
                <Button variant="ghost" size="sm" onClick={() => generateAndCopyShareableLink(generatedUrl)} className="ml-auto p-1 h-auto">
                    {copiedLink ? <CheckCircle2Icon className="h-4 w-4 text-green-600" /> : <Share2Icon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <CompanyGapAnalysisForm 
        initialData={initialData || {}} 
        onSubmit={handleFormSubmit} 
        setFormState={handleFormStateChange}
        isNewAnalysisMode={isNewAnalysis}
      />
    </div>
  );
};

export default ReportPage;

