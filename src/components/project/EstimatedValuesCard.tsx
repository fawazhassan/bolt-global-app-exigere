import { Calculator } from 'lucide-react';

interface EstimatedValuesCardProps {
  estimatedCost: string;
  setEstimatedCost: (value: string) => void;
  estimatedGia: string;
  setEstimatedGia: (value: string) => void;
  estimatedCostPerFt: string;
  setEstimatedCostPerFt: (value: string) => void;
}

export function EstimatedValuesCard({
  estimatedCost,
  setEstimatedCost,
  estimatedGia,
  setEstimatedGia,
  estimatedCostPerFt,
  setEstimatedCostPerFt
}: EstimatedValuesCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <Calculator className="h-4 w-4 text-gray-500" />
        <h3 className="text-base font-semibold text-gray-900">Estimated Values</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Estimated Total Cost</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">£</span>
            <input
              type="text"
              value={estimatedCost}
              onChange={(e) => setEstimatedCost(e.target.value)}
              className="w-full p-2 pl-6 border border-gray-300 rounded-md bg-gray-50 text-sm"
              placeholder="0.00"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Estimated GIA</label>
          <div className="relative">
            <input
              type="text"
              value={estimatedGia}
              onChange={(e) => setEstimatedGia(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
              placeholder="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">m²</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Estimated £/ft<sup>2</sup> GIA</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">£</span>
            <input
              type="text"
              value={estimatedCostPerFt}
              onChange={(e) => setEstimatedCostPerFt(e.target.value)}
              className="w-full p-2 pl-6 border border-gray-300 rounded-md bg-gray-50 text-sm"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 