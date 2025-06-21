import React from 'react';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
  onClick?: (id: string) => void;
  disableNavigation?: boolean;
  showDescription?: boolean;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment, onClick, disableNavigation, showDescription }) => (
  <div
    onClick={!disableNavigation && onClick ? () => onClick(apartment.id) : undefined}
    className={`apartment-card bg-gradient-to-br from-[#23272F] to-[#B0BEC5]/10 p-6 rounded-2xl shadow-lg border border-[#26A69A]/20 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group ${!disableNavigation ? 'cursor-pointer' : ''}`}
  >
    <h2 className="text-2xl font-bold text-[#B0BEC5] truncate mb-1">{apartment.unitName}</h2>
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs bg-[#26A69A]/20 text-[#26A69A] px-2 py-1 rounded font-semibold">{apartment.unitNumber}</span>
      <span className="text-xs bg-[#42A5F5]/20 text-[#42A5F5] px-2 py-1 rounded font-semibold">{apartment.project}</span>
    </div>
    <p className="text-2xl text-[#26A69A] font-bold mb-1">${apartment.price.toLocaleString()}</p>
    <p className="text-sm text-gray-400 mb-1">{apartment.bedrooms} Beds &bull; {apartment.bathrooms} Baths</p>
    <p className="text-sm text-gray-400 line-clamp-1">{apartment.address}</p>
    {showDescription && (
      <div className="text-gray-300 whitespace-pre-line mt-6">{apartment.description}</div>
    )}
  </div>
);

export default ApartmentCard;
