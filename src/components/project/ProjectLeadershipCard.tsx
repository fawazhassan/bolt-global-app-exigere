import { Search } from 'lucide-react';

interface ProjectLeadershipCardProps {
  keyClientContact: string;
  setKeyClientContact: (value: string) => void;
}

export function ProjectLeadershipCard({
  keyClientContact,
  setKeyClientContact
}: ProjectLeadershipCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <Search className="h-4 w-4 text-gray-500" />
        <h3 className="text-base font-semibold text-gray-900">Project Leadership</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-xs font-medium text-gray-700 mb-1">Partner</label>
          <div className="relative">
            <input
              type="text"
              value="Umberto Tomba"
              readOnly
              className="w-full p-2 pr-8 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <label className="block text-xs font-medium text-gray-700 mb-1">Project Lead</label>
          <div className="relative">
            <input
              type="text"
              value="Sam Eto"
              readOnly
              className="w-full p-2 pr-8 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <label className="block text-xs font-medium text-gray-700 mb-1">Project Administrator</label>
          <div className="relative">
            <input
              type="text"
              value="B&Co"
              readOnly
              className="w-full p-2 pr-8 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <label className="block text-xs font-medium text-gray-700 mb-1">M&E Lead</label>
          <div className="relative">
            <input
              type="text"
              value="Vinnie Jones"
              readOnly
              className="w-full p-2 pr-8 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <label className="block text-xs font-medium text-gray-700 mb-1">Key Client Contact</label>
          <div className="relative">
            <input
              type="text"
              value={keyClientContact}
              onChange={(e) => setKeyClientContact(e.target.value)}
              placeholder="Search contacts..."
              className="w-full p-2 pr-8 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
} 