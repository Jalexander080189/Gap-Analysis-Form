'use client';

import { useState } from 'react';

export function useGapAnalysisForm() {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    website: '',
    owner1: '',
    owner2: '',
    yearsInBusiness: '',
    
    // Market Overview
    audienceSize: '',
    buyerPercentage: '',
    annualCustomerValue: '',
    
    // Company Overview
    revenue: '',
    percentageNew: '',
    percentageCurrent: '',
    yearlyWebsiteVisitors: '',
    yearlyLeads: '',
    yearlyNewAccountsClosed: '',
    
    // Demographics
    audienceType: 'b2c', // b2c, b2b, or both
    
    // B2C Fields
    locations: '',
    ageGroups: '',
    incomeLevels: '',
    additionalOption1: '',
    additionalOption2: '',
    additionalOption3: '',
    
    // B2B Fields
    businessLocations: '',
    businessSizeRevenue: '',
    businessSizeEmployees: '',
    jobTitles: '',
    businessAdditionalOption1: '',
    businessAdditionalOption2: '',
    
    // Marketing Channels
    marketingChannels: [{ channel: '', spend: '' }],
    
    // Scenario Planning
    scenarioMetric: 'leadGen',
    scenarioTargetRate: '',
    
    // Notes
    customNotes: '',
    
    // Gap Calculation Mode
    gapCalculationMode: 'yearly'
  });
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Add marketing channel
  const addMarketingChannel = () => {
    setFormData(prev => ({
      ...prev,
      marketingChannels: [...prev.marketingChannels, { channel: '', spend: '' }]
    }));
  };
  
  // Update marketing channel
  const updateMarketingChannel = (index, field, value) => {
    const updatedChannels = [...formData.marketingChannels];
    updatedChannels[index] = {
      ...updatedChannels[index],
      [field]: value
    };
    
    setFormData(prev => ({
      ...prev,
      marketingChannels: updatedChannels
    }));
  };
  
  // Remove marketing channel
  const removeMarketingChannel = (index) => {
    const updatedChannels = formData.marketingChannels.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      marketingChannels: updatedChannels
    }));
  };
  
  // Calculate gaps
  const calculateGaps = () => {
    // Ensure we have the necessary values
    if (!formData.audienceSize || !formData.yearlyWebsiteVisitors || !formData.yearlyLeads || !formData.yearlyNewAccountsClosed) {
      return {
        marketVisibility: { reach: 0, gap: 100 },
        leadGen: { conversion: 0, gap: 100 },
        closeRate: { close: 0, gap: 100 }
      };
    }
    
    const audience = parseInt(formData.audienceSize.replace(/,/g, ''), 10) || 0;
    const visitors = parseInt(formData.yearlyWebsiteVisitors.replace(/,/g, ''), 10) || 0;
    const leads = parseInt(formData.yearlyLeads.replace(/,/g, ''), 10) || 0;
    const accounts = parseInt(formData.yearlyNewAccountsClosed.replace(/,/g, ''), 10) || 0;
    
    // Market Visibility Gap
    const reach = audience > 0 ? (visitors / audience) * 100 : 0;
    
    // Lead Gen Gap
    const conversion = visitors > 0 ? (leads / visitors) * 100 : 0;
    
    // Close Rate Gap
    const close = leads > 0 ? (accounts / leads) * 100 : 0;
    
    return {
      marketVisibility: { 
        reach: parseFloat(reach.toFixed(1)), 
        gap: parseFloat((100 - reach).toFixed(1)) 
      },
      leadGen: { 
        conversion: parseFloat(conversion.toFixed(1)), 
        gap: parseFloat((100 - conversion).toFixed(1)) 
      },
      closeRate: { 
        close: parseFloat(close.toFixed(1)), 
        gap: parseFloat((100 - close).toFixed(1)) 
      }
    };
  };
  
  // Save or update report
  const saveReport = async () => {
    if (!formData.companyName) {
      alert('Please enter a company name');
      return;
    }
    
    try {
      // For now, just generate a shareable URL
      const slug = formData.companyName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      
      // In the future, this would save to a database
      // For now, we'll just use localStorage
      localStorage.setItem(`report-${slug}`, JSON.stringify(formData));
      
      const reportUrl = `/reports/${slug}`;
      
      // Copy to clipboard
      await navigator.clipboard.writeText(window.location.origin + reportUrl);
      alert('Report link copied to clipboard!');
      
      return reportUrl;
    } catch (error) {
      console.error('Error saving report:', error);
      alert('Failed to save report');
    }
  };
  
  return {
    formData,
    setFormData,
    handleInputChange,
    addMarketingChannel,
    updateMarketingChannel,
    removeMarketingChannel,
    calculateGaps,
    saveReport
  };
}