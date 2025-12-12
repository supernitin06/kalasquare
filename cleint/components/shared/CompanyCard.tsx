import React from "react";

interface CompanyCardProps {
  logo: string;
  alt: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ logo, alt }) => {
  return (
    <div
      className="w-[220px]  h-[130px] flex items-center justify-center 
                 bg-white rounded-2xl border border-[#eb4e62] 
                 shadow-sm hover:scale-[1.03] transition-all duration-300"
    >
      <img src={logo} alt={alt} className="max-h-[60px] object-contain" />
    </div>
  );
};

export default CompanyCard;
