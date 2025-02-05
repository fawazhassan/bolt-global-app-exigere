import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Building2, ArrowLeft, FileText, Library, Image as ImageIcon, HelpCircle, Plus, Search, Info, Settings, Calculator, Calendar, Megaphone } from 'lucide-react';
import { projects } from '../data/projects';
import { LocationCard } from './project/LocationCard';
import { EstimatedValuesCard } from './project/EstimatedValuesCard';
import { ProjectLeadershipCard } from './project/ProjectLeadershipCard';
import { BuildingsCard } from './project/BuildingsCard';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[Number(id)];
  const [activeTab, setActiveTab] = useState('key-project-info');

  // Add state for form fields
  const [shortName, setShortName] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [whatThreeWords, setWhatThreeWords] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');
  const [estimatedGia, setEstimatedGia] = useState('');
  const [estimatedCostPerFt, setEstimatedCostPerFt] = useState('');
  const [keyClientContact, setKeyClientContact] = useState('');
  const [projectProfile, setProjectProfile] = useState('');
  const [isMultiBuilding, setIsMultiBuilding] = useState(false);

  // Marketing tab state
  const [useOnWebsite, setUseOnWebsite] = useState('Yes');
  const [keyCharacteristics, setKeyCharacteristics] = useState('');
  const [projectProfileType, setProjectProfileType] = useState('');
  const [summaryOfExperience, setSummaryOfExperience] = useState('');
  const [estimatedPlanningSubmission, setEstimatedPlanningSubmission] = useState('');
  const [estimatedPlanningDecision, setEstimatedPlanningDecision] = useState('');
  const [estimatedStartOnSite, setEstimatedStartOnSite] = useState('');
  const [estimatedCompletion, setEstimatedCompletion] = useState('');
  const [toppingOutDate, setToppingOutDate] = useState('');

  if (!project) {
    return <div>Project not found</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'marketing':
        return (
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Key Dates Card */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <h3 className="text-base font-semibold text-gray-900">Key Dates</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Planning Submission Date</label>
                    <input
                      type="date"
                      value={estimatedPlanningSubmission}
                      onChange={(e) => setEstimatedPlanningSubmission(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Planning Decision Date</label>
                    <input
                      type="date"
                      value={estimatedPlanningDecision}
                      onChange={(e) => setEstimatedPlanningDecision(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Start on Site Date</label>
                    <input
                      type="date"
                      value={estimatedStartOnSite}
                      onChange={(e) => setEstimatedStartOnSite(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Completion Date</label>
                    <input
                      type="date"
                      value={estimatedCompletion}
                      onChange={(e) => setEstimatedCompletion(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Topping Out Date</label>
                    <input
                      type="date"
                      value={toppingOutDate}
                      onChange={(e) => setToppingOutDate(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Marketing Information Card */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Megaphone className="h-4 w-4 text-gray-500" />
                  <h3 className="text-base font-semibold text-gray-900">Marketing Information</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Use on Website</label>
                    <select 
                      value={useOnWebsite}
                      onChange={(e) => setUseOnWebsite(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Key Characteristics</label>
                    <select
                      value={keyCharacteristics}
                      onChange={(e) => setKeyCharacteristics(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    >
                      <option value="">Select characteristic</option>
                      <option value="Tall Building">Tall Building</option>
                      <option value="Heritage">Heritage</option>
                      <option value="Sustainable">Sustainable</option>
                      <option value="Mixed Use">Mixed Use</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Project Profile</label>
                    <select
                      value={projectProfileType}
                      onChange={(e) => setProjectProfileType(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    >
                      <option value="">Select profile</option>
                      <option value="High Profile">High Profile</option>
                      <option value="Medium Profile">Medium Profile</option>
                      <option value="Low Profile">Low Profile</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Summary of Experience</label>
                    <select
                      value={summaryOfExperience}
                      onChange={(e) => setSummaryOfExperience(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    >
                      <option value="">Select experience</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Very Good">Very Good</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'administration':
        return (
          <div className="p-8 space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3>Administration Content</h3>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-8 space-y-6">
            {/* Project Information */}
            <div className="grid grid-cols-2 gap-6">
              {/* Project Information Card */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Info className="h-4 w-4 text-gray-500" />
                  <h3 className="text-base font-semibold text-gray-900">Project Information</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Client</label>
                    <input
                      type="text"
                      value={project.client}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Cost Stage</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Pre-Construction">
                      <option>Pre-Construction</option>
                      <option>Construction</option>
                      <option>Post-Construction</option>
                      <option>Completion</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Live">
                      <option>Live</option>
                      <option>On Hold</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">RIBA Stage</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Stage 0">
                      <option>Stage 0</option>
                      <option>Stage 1</option>
                      <option>Stage 2</option>
                      <option>Stage 3</option>
                      <option>Stage 4</option>
                      <option>Stage 5</option>
                      <option>Stage 6</option>
                      <option>Stage 7</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Project Short Name</label>
                    <input
                      type="text"
                      value={shortName}
                      onChange={(e) => setShortName(e.target.value)}
                      placeholder="Enter short name"
                      className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Service Line</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Core QS">
                      <option>Core QS</option>
                      <option>PM</option>
                      <option>Building Surveying</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Classification Card */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="h-4 w-4 text-gray-500" />
                  <h3 className="text-base font-semibold text-gray-900">Project Classification</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Sector</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue={project.sector}>
                      <option>{project.sector}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Subsector</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Urban / City">
                      <option>Urban / City</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Scope</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue={project.scope}>
                      <option>{project.scope}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Classification</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Light Touch">
                      <option>Light Touch</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Profile Card */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-4 w-4 text-gray-500" />
                <h3 className="text-base font-semibold text-gray-900">Project Profile</h3>
              </div>
              <textarea
                value={projectProfile}
                onChange={(e) => setProjectProfile(e.target.value)}
                className="w-full h-24 p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                placeholder="Enter project description..."
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <LocationCard
                address={address}
                setAddress={setAddress}
                postCode={postCode}
                setPostCode={setPostCode}
                whatThreeWords={whatThreeWords}
                setWhatThreeWords={setWhatThreeWords}
              />

              <EstimatedValuesCard
                estimatedCost={estimatedCost}
                setEstimatedCost={setEstimatedCost}
                estimatedGia={estimatedGia}
                setEstimatedGia={setEstimatedGia}
                estimatedCostPerFt={estimatedCostPerFt}
                setEstimatedCostPerFt={setEstimatedCostPerFt}
              />
            </div>

            <ProjectLeadershipCard
              keyClientContact={keyClientContact}
              setKeyClientContact={setKeyClientContact}
            />

            <BuildingsCard />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Side Navigation */}
      <nav className="w-16 bg-red-600 min-h-screen flex flex-col items-center py-4 fixed left-0 top-0">
        <div className="space-y-8">
          <div className="group relative">
            <FileText className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Document Generation
            </span>
          </div>
          <div className="group relative">
            <Library className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Document Library
            </span>
          </div>
          <div className="group relative">
            <ImageIcon className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Image Bank
            </span>
          </div>
          <div className="group relative">
            <HelpCircle className="h-6 w-6 text-white cursor-pointer hover:text-gray-200" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Ask Alberto
            </span>
          </div>
        </div>
      </nav>

      <div className="flex-1 ml-16">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-red-600" />
                  <h1 className="text-2xl font-bold text-red-600">{project.name}</h1>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="checkbox"
                    id="multiBuilding"
                    checked={isMultiBuilding}
                    onChange={(e) => setIsMultiBuilding(e.target.checked)}
                    className="h-3 w-3 text-red-600 rounded border-gray-300 focus:ring-red-500"
                  />
                  <label htmlFor="multiBuilding" className="text-xs text-gray-500">Multi-building project</label>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button 
                  onClick={() => setActiveTab('key-project-info')}
                  className={`px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                    activeTab === 'key-project-info' 
                      ? 'text-gray-900 border-b-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Info className="h-4 w-4" />
                  Key Project Information
                </button>
                <button 
                  onClick={() => setActiveTab('marketing')}
                  className={`px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                    activeTab === 'marketing' 
                      ? 'text-gray-900 border-b-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Megaphone className="h-4 w-4" />
                  Marketing Information
                </button>
                <button 
                  onClick={() => setActiveTab('administration')}
                  className={`px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                    activeTab === 'administration' 
                      ? 'text-gray-900 border-b-2 border-red-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Settings className="h-4 w-4" />
                  Project Administration
                </button>
              </nav>
            </div>

            {/* Tab-specific Content */}
            {renderTabContent()}
                     {/* Common Cards (always visible) */}
                     <div className="border-b border-gray-200">
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <LocationCard
                    address={address}
                    setAddress={setAddress}
                    postCode={postCode}
                    setPostCode={setPostCode}
                    whatThreeWords={whatThreeWords}
                    setWhatThreeWords={setWhatThreeWords}
                  />

                  <EstimatedValuesCard
                    estimatedCost={estimatedCost}
                    setEstimatedCost={setEstimatedCost}
                    estimatedGia={estimatedGia}
                    setEstimatedGia={setEstimatedGia}
                    estimatedCostPerFt={estimatedCostPerFt}
                    setEstimatedCostPerFt={setEstimatedCostPerFt}
                  />
                </div>

                <ProjectLeadershipCard
                  keyClientContact={keyClientContact}
                  setKeyClientContact={setKeyClientContact}
                />

                <BuildingsCard />
              </div>
            </div>

   
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProjectDetails;