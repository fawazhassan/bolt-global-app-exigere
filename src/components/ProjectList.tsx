import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Search, Building2, Plus, ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(5);
  const navigate = useNavigate();
  
  const displayedProjects = projects.slice(0, displayCount);
  const hasMoreProjects = displayCount < projects.length;

  const handleShowMore = () => {
    setDisplayCount(prev => Math.min(prev + 5, projects.length));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-bold text-red-600">Project Centre</h1>
          </div>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex gap-4 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-300 focus:border-red-300 focus:ring-red-300"
              />
            </div>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Search Returns</h2>
            <span className="text-sm text-gray-500 font-medium">
              Showing {displayedProjects.length} of {projects.length} projects
            </span>
          </div>
          
          <div className="space-y-4">
            {displayedProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow duration-200">
                <div className="grid grid-cols-6 gap-6 items-center">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Project Name</label>
                    <span className="text-gray-900 font-medium">{project.name}</span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Scope</label>
                    <span className="text-gray-900">{project.scope}</span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Project Stage</label>
                    <span className="text-gray-900">{project.stage}</span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Sector</label>
                    <span className="text-gray-900">{project.sector}</span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Client</label>
                    <span className="text-gray-900">{project.client}</span>
                  </div>
                  <div className="text-right">
                    <Button 
                      onClick={() => navigate(`/project/${index}`)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More Button */}
          {hasMoreProjects && (
            <div className="mt-8 text-center">
              <Button
                onClick={handleShowMore}
                className="bg-white hover:bg-gray-50 text-gray-700 font-semibold border border-gray-300 inline-flex items-center gap-2"
              >
                <ChevronDown className="h-4 w-4" />
                Show More
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProjectList;