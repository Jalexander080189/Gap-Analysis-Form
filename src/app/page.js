export default function Home() {
  return (
    <div className="container mx-auto p-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6">Company Gap Analysis</h1>
      
      <form className="space-y-8">
        {/* Company Information Section */}
        <section className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Company Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                placeholder="Enter company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Website</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                placeholder="https://example.com"
              />
            </div>
          </div>
        </section>
        
        {/* Market Overview Section */}
        <section className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Audience Size</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                placeholder="e.g., 100,000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Buyer %</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                placeholder="e.g., 5%"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Annual Customer Value</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                placeholder="e.g., $1,500"
              />
            </div>
          </div>
        </section>
        
        {/* Gaps & Opportunity Section */}
        <section className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Gaps & Opportunity</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Market Visibility Gap</label>
              <div className="flex space-x-2">
                <div className="text-green-600">4.3% Reach</div>
                <div className="text-red-600">95.7% Gap</div>
              </div>
              <p className="text-sm text-muted-foreground">
                (vs Buyers – 95.7% of the market didn't see you! Boost reach with Brand Awareness campaigns!)
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Lead Gen Gap</label>
              <div className="flex space-x-2">
                <div className="text-green-600">13.5% Conversion</div>
                <div className="text-red-600">86.5% Gap</div>
              </div>
              <p className="text-sm text-muted-foreground">
                (vs Visitors – 86.5% didn't give you a chance to sell! Re-engage them with Retargeting Ads!)
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Close Rate Gap</label>
              <div className="flex space-x-2">
                <div className="text-green-600">11.4% Close</div>
                <div className="text-red-600">88.6% Gap</div>
              </div>
              <p className="text-sm text-muted-foreground">
                (vs Leads – Close more deals with better targeting and tracking strategies!)
              </p>
            </div>
          </div>
        </section>
        
        <div className="flex justify-end">
          <button 
            type="button"
            className="bg-primary text-primary-foreground px-4 py-2 rounded"
          >
            Save Report
          </button>
        </div>
      </form>
    </div>
  );
}