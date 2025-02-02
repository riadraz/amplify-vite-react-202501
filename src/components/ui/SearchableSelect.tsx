import React, { useState, useEffect } from 'react';
import './SearchableSelect.css';

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  onChange,
  placeholder = "Select an option..."
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  useEffect(() => {
    const filtered = options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, options]);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setSearchTerm('');
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="searchable-select">
      <div 
        className="select-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>

      {isOpen && (
        <div className="select-dropdown">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search..."
            className="search-input"
          />
          <div className="options-list">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="option-item"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
            {filteredOptions.length === 0 && (
              <div className="no-results">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;