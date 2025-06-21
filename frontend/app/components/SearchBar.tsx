import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  limit: number;
  onLimitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit, limit, onLimitChange }) => (
  <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by project, address, or unit..."
      className="flex-1 p-3 border-2 border-[#26A69A] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#42A5F5]/50 transition-all duration-300 placeholder-gray-400 bg-[#23272F]"
    />
    <select
      value={limit}
      onChange={onLimitChange}
      className="p-3 border-2 border-[#42A5F5] rounded-lg bg-[#23272F] text-gray-200 focus:outline-none"
    >
      {[6, 12, 24, 48].map((n) => (
        <option key={n} value={n}>{n} per page</option>
      ))}
    </select>
    <button
      type="submit"
      className="px-6 py-3 bg-gradient-to-r from-[#26A69A] to-[#42A5F5] text-white rounded-lg shadow-md hover:shadow-lg hover:from-[#42A5F5] hover:to-[#26A69A] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#42A5F5]/50"
    >
      Search
    </button>
  </form>
);

export default SearchBar;
