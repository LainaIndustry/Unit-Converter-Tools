import React, { useState, useEffect, useRef } from 'react';
import { FaExchangeAlt, FaSearch } from 'react-icons/fa';
import { useConversion } from '../context/ConversionContext';

const ConversionBar = () => {
  const {
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    inputValue,
    setInputValue,
    result,
    loading,
    error,
    units,
    selectedCategory,
    setSelectedCategory,
    convert,
    swapUnits,
    clearConversion,
  } = useConversion();

  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');
  
  const fromRef = useRef();
  const toRef = useRef();

  // Filter units based on search
  const filteredFromUnits = units.filter(unit =>
    unit.name.toLowerCase().includes(fromSearch.toLowerCase()) ||
    unit.symbol.toLowerCase().includes(fromSearch.toLowerCase())
  );

  const filteredToUnits = units.filter(unit =>
    unit.name.toLowerCase().includes(toSearch.toLowerCase()) ||
    unit.symbol.toLowerCase().includes(toSearch.toLowerCase())
  );

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setFromUnit('');
    setToUnit('');
    setFromSearch('');
    setToSearch('');
    clearConversion();
  };

  const handleFromSelect = (unit) => {
    setFromUnit(unit.symbol);
    setFromSearch(unit.symbol);
    setShowFromSuggestions(false);
  };

  const handleToSelect = (unit) => {
    setToUnit(unit.symbol);
    setToSearch(unit.symbol);
    setShowToSuggestions(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Category
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          value={selectedCategory || ''}
          onChange={(e) => handleCategorySelect(e.target.value)}
        >
          <option value="">Choose a category...</option>
          {units.length > 0 && (
            <option value={units[0]?.category?._id}>
              {units[0]?.category?.name}
            </option>
          )}
        </select>
      </div>

      {/* Conversion Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* From Unit */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <div className="relative">
            <input
              ref={fromRef}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Search unit..."
              value={fromSearch}
              onChange={(e) => {
                setFromSearch(e.target.value);
                setShowFromSuggestions(true);
              }}
              onFocus={() => setShowFromSuggestions(true)}
            />
            {showFromSuggestions && filteredFromUnits.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredFromUnits.map((unit) => (
                  <button
                    key={unit._id}
                    className="w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => handleFromSelect(unit)}
                  >
                    <span>{unit.name}</span>
                    <span className="text-sm text-gray-500">{unit.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="number"
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter value..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center md:justify-center md:col-span-2">
          <button
            onClick={swapUnits}
            className="btn-secondary p-3 rounded-full hover:rotate-180 transition-transform duration-300"
            aria-label="Swap units"
          >
            <FaExchangeAlt size={20} />
          </button>
        </div>

        {/* To Unit */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <div className="relative">
            <input
              ref={toRef}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Search unit..."
              value={toSearch}
              onChange={(e) => {
                setToSearch(e.target.value);
                setShowToSuggestions(true);
              }}
              onFocus={() => setShowToSuggestions(true)}
            />
            {showToSuggestions && filteredToUnits.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredToUnits.map((unit) => (
                  <button
                    key={unit._id}
                    className="w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => handleToSelect(unit)}
                  >
                    <span>{unit.name}</span>
                    <span className="text-sm text-gray-500">{unit.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {result !== null && (
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <span className="font-semibold">Result: </span>
                <span className="text-2xl font-bold text-primary-600">
                  {result} {toUnit}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={convert}
          disabled={loading}
          className="btn-primary flex-1 flex items-center justify-center gap-2"
        >
          <FaSearch />
          {loading ? 'Converting...' : 'Convert'}
        </button>
        <button
          onClick={clearConversion}
          className="btn-secondary"
        >
          Clear
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default ConversionBar;
