import { Search } from 'lucide-react';

interface LocationCardProps {
  address: string;
  setAddress: (value: string) => void;
  postCode: string;
  setPostCode: (value: string) => void;
  whatThreeWords: string;
  setWhatThreeWords: (value: string) => void;
}

export function LocationCard({
  address,
  setAddress,
  postCode,
  setPostCode,
  whatThreeWords,
  setWhatThreeWords
}: LocationCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <Search className="h-4 w-4 text-gray-500" />
        <h3 className="text-base font-semibold text-gray-900">Location</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            rows={2}
          ></textarea>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Village</label>
            <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Lee">
              <option>Lee</option>
              <option>Greenwich</option>
              <option>Blackheath</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Borough</label>
            <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm" defaultValue="Lewisham">
              <option>Lewisham</option>
              <option>Greenwich</option>
              <option>Tower Hamlets</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Post Code</label>
            <input
              type="text"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              placeholder="Enter post code"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">What Three Words</label>
          <input
            type="text"
            value={whatThreeWords}
            onChange={(e) => setWhatThreeWords(e.target.value)}
            placeholder="Enter what three words"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
          />
        </div>
      </div>
    </div>
  );
} 