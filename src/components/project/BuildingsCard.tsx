import { Building2, Plus } from 'lucide-react';
import { Button } from "../ui/button";

export function BuildingsCard() {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Building2 className="h-4 w-4 text-gray-500" />
          <h3 className="text-base font-semibold text-gray-900">Buildings in Project</h3>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold flex items-center gap-2 py-1.5">
          <Plus className="h-3 w-3" />
          Add New Building
        </Button>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Building Name</label>
            <input
              type="text"
              value="The Carbuncle"
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Building Stage</label>
            <input
              type="text"
              value="Feasibility"
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Sector</label>
            <input
              type="text"
              value="Office"
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Scope</label>
            <input
              type="text"
              value="Refurb"
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
          <div className="flex items-end">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-1.5">
              View Building
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 