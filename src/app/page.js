'use client';

import { useState } from 'react';
import { useGapAnalysisForm } from '../hooks/useGapAnalysisForm';

export default function Home() {
  const {
    formData,
    handleInputChange,
    addMarketingChannel,
    updateMarketingChannel,
    removeMarketingChannel,
    calculateGaps,
    saveReport
  } = useGapAnalysisForm();
  
  const gaps = calculateGaps();
  
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Company Gap Analysis</h1>
      
      <form className="space-y-8">
        {/* Company Information Section */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Company Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Enter company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <input 
                type="text" 
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="https://example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Years in Business</label>
              <input 
                type="text" 
                name="yearsInBusiness"
                value={formData.yearsInBusiness}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 10"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Primary Owner</label>
              <input 
                type="text" 
                name="owner1"
                value={formData.owner1}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Owner name"
              />
            </div>
          </div>
        </section>
        
        {/* Market Overview Section */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Audience Size</label>
              <input 
                type="text" 
                name="audienceSize"
                value={formData.audienceSize}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 100,000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Buyer %</label>
              <input 
                type="text" 
                name="buyerPercentage"
                value={formData.buyerPercentage}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 5%"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Annual Customer Value</label>
              <input 
                type="text" 
                name="annualCustomerValue"
                value={formData.annualCustomerValue}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., $1,500"
              />
            </div>
          </div>
        </section>
        
        {/* Company Overview Section */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Company Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Annual Revenue</label>
              <input 
                type="text" 
                name="revenue"
                value={formData.revenue}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., $1,000,000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">% New Customers</label>
              <input 
                type="text" 
                name="percentageNew"
                value={formData.percentageNew}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 20%"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">% Current Customers</label>
              <input 
                type="text" 
                name="percentageCurrent"
                value={formData.percentageCurrent}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 80%"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Yearly Website Visitors</label>
              <input 
                type="text" 
                name="yearlyWebsiteVisitors"
                value={formData.yearlyWebsiteVisitors}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 5,000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Yearly Leads</label>
              <input 
                type="text" 
                name="yearlyLeads"
                value={formData.yearlyLeads}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 700"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Yearly New Accounts Closed</label>
              <input 
                type="text" 
                name="yearlyNewAccountsClosed"
                value={formData.yearlyNewAccountsClosed}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 80"
              />
            </div>
          </div>
        </section>
        
        {/* Gaps & Opportunity Section */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Gaps & Opportunity / Funnel</h2>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm">Calculation Mode:</span>
              <select 
                name="gapCalculationMode"
                value={formData.gapCalculationMode}
                onChange={handleInputChange}
                className="p-1 border rounded"
              >
                <option value="yearly">Yearly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Market Visibility Gap</label>
              <div className="flex space-x-3">
                <div className="text-green-600 font-medium">{gaps.marketVisibility.reach}% Reach</div>
                <div className="text-red-600 font-medium">{gaps.marketVisibility.gap}% Gap</div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                (vs Buyers – {gaps.marketVisibility.gap}% of the market didn't see you! Boost reach with Brand Awareness campaigns!)
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Lead Gen Gap</label>
              <div className="flex space-x-3">
                <div className="text-green-600 font-medium">{gaps.leadGen.conversion}% Conversion</div>
                <div className="text-red-600 font-medium">{gaps.leadGen.gap}% Gap</div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                (vs Visitors – {gaps.leadGen.gap}% didn't give you a chance to sell! Re-engage them with Retargeting Ads!)
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Close Rate Gap</label>
              <div className="flex space-x-3">
                <div className="text-green-600 font-medium">{gaps.closeRate.close}% Close</div>
                <div className="text-red-600 font-medium">{gaps.closeRate.gap}% Gap</div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                (vs Leads – {gaps.closeRate.gap}% missed opportunities! Close more deals with better targeting and tracking strategies!)
              </p>
            </div>
          </div>
        </section>
        
        {/* Current Marketing */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Current Marketing</h2>
          
          {formData.marketingChannels.map((channel, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pb-4 border-b last:border-b-0">
              <div>
                <label className="block text-sm font-medium mb-1">Channel</label>
                <input 
                  type="text" 
                  value={channel.channel}
                  onChange={(e) => updateMarketingChannel(index, 'channel', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., Facebook Ads"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Monthly Spend</label>
                <input 
                  type="text" 
                  value={channel.spend}
                  onChange={(e) => updateMarketingChannel(index, 'spend', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., $500"
                />
              </div>
              
              {index > 0 && (
                <button 
                  type="button"
                  onClick={() => removeMarketingChannel(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          
          <button
            type="button"
            onClick={addMarketingChannel}
            className="mt-2 text-primary text-sm"
          >
            + Add Marketing Channel
          </button>
        </section>
        
        {/* Demographics & Target Audience */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Demographics & Target Audience</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Audience Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="audienceType"
                  value="b2c"
                  checked={formData.audienceType === 'b2c'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                B2C
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="audienceType"
                  value="b2b"
                  checked={formData.audienceType === 'b2b'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                B2B
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="audienceType"
                  value="both"
                  checked={formData.audienceType === 'both'}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Both
              </label>
            </div>
          </div>
          
          {(formData.audienceType === 'b2c' || formData.audienceType === 'both') && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">B2C Audience</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Location / Radius</label>
                  <input 
                    type="text" 
                    name="locations"
                    value={formData.locations}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Dallas, TX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Age Groups</label>
                  <input 
                    type="text" 
                    name="ageGroups"
                    value={formData.ageGroups}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., 25-54"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Income Levels</label>
                  <input 
                    type="text" 
                    name="incomeLevels"
                    value={formData.incomeLevels}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., $50K-$100K"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Option 1</label>
                  <input 
                    type="text" 
                    name="additionalOption1"
                    value={formData.additionalOption1}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Homeowners"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Option 2</label>
                  <input 
                    type="text" 
                    name="additionalOption2"
                    value={formData.additionalOption2}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Pet Owners"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Option 3</label>
                  <input 
                    type="text" 
                    name="additionalOption3"
                    value={formData.additionalOption3}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., College Educated"
                  />
                </div>
              </div>
            </div>
          )}
          
          {(formData.audienceType === 'b2b' || formData.audienceType === 'both') && (
            <div>
              <h3 className="text-lg font-medium mb-3">B2B Audience</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Location / Radius</label>
                  <input 
                    type="text" 
                    name="businessLocations"
                    value={formData.businessLocations}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Nationwide"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Business Size (Revenue)</label>
                  <input 
                    type="text" 
                    name="businessSizeRevenue"
                    value={formData.businessSizeRevenue}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., $1M-$10M"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Business Size (Employees)</label>
                  <input 
                    type="text" 
                    name="businessSizeEmployees"
                    value={formData.businessSizeEmployees}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., 10-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Job Titles</label>
                  <input 
                    type="text" 
                    name="jobTitles"
                    value={formData.jobTitles}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., CEO, Marketing Director"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Option 1</label>
                  <input 
                    type="text" 
                    name="businessAdditionalOption1"
                    value={formData.businessAdditionalOption1}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Industry Association Members"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Additional Option 2</label>
                  <input 
                    type="text" 
                    name="businessAdditionalOption2"
                    value={formData.businessAdditionalOption2}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="e.g., Specific Software Users"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
        
        {/* Notes Section */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Notes & Recommendations</h2>
          
          <div>
            <textarea
              name="customNotes"
              value={formData.customNotes}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-2 border rounded"
              placeholder="Enter any notes or recommendations..."
            ></textarea>
          </div>
        </section>
        
        {/* Paste GPT Parsed Data - For Future Enhancement */}
        <section className="bg-card p-4 md:p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Paste GPT Parsed Data</h2>
          
          <div>
            <textarea
              rows={6}
              className="w-full p-2 border rounded"
              placeholder="Paste GPT Parsed Data (Business Overview & Market Analysis)"
            ></textarea>
          </div>
        </section>
        
        <div className="flex justify-between">
          <button 
            type="button"
            onClick={() => {
              if (window.confirm('Are you sure you want to reset the form?')) {
                window.location.href = '/';
              }
            }}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded"
          >
            Reset Form
          </button>
          
          <button 
            type="button"
            onClick={saveReport}
            className="bg-primary text-primary-foreground px-4 py-2 rounded"
          >
            Save & Copy Report Link
          </button>
        </div>
      </form>
    </div>
  );
}