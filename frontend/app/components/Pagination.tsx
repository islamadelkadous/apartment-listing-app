import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, isLoading, onPageChange }) => (
  <div className="flex justify-center items-center gap-4 mt-10">
    <button
      onClick={() => onPageChange(page - 1)}
      disabled={page <= 1 || isLoading}
      className="px-4 py-2 rounded-lg bg-[#23272F] border border-[#26A69A]/40 text-[#26A69A] font-semibold hover:bg-[#26A69A]/10 disabled:opacity-40 transition"
    >
      Previous
    </button>
    <span className="text-gray-400 text-lg">
      Page <span className="font-bold text-[#42A5F5]">{page}</span> / <span className="font-bold">{totalPages || 1}</span>
    </span>
    <button
      onClick={() => onPageChange(page + 1)}
      disabled={page >= totalPages || isLoading}
      className="px-4 py-2 rounded-lg bg-[#23272F] border border-[#42A5F5]/40 text-[#42A5F5] font-semibold hover:bg-[#42A5F5]/10 disabled:opacity-40 transition"
    >
      Next
    </button>
  </div>
);

export default Pagination;
