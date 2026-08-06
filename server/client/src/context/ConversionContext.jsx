import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const ConversionContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || 'https://your-backend-url.com/api';
export const ConversionProvider = ({ children }) => {
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [units, setUnits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch units when category changes
  useEffect(() => {
    if (selectedCategory) {
      fetchUnitsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchUnitsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`${API_URL}/units/category/${categoryId}`);
      setUnits(response.data.data);
    } catch (error) {
      console.error('Error fetching units:', error);
    }
  };

  const convert = async () => {
    if (!fromUnit || !toUnit || !inputValue) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/convert`, {
        fromUnit,
        toUnit,
        value: parseFloat(inputValue),
      });

      setResult(response.data.data.result);
    } catch (error) {
      setError(error.response?.data?.message || 'Conversion failed');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
    setResult(null);
  };

  const clearConversion = () => {
    setFromUnit('');
    setToUnit('');
    setInputValue('');
    setResult(null);
    setError(null);
  };

  return (
    <ConversionContext.Provider
      value={{
        fromUnit,
        setFromUnit,
        toUnit,
        setToUnit,
        inputValue,
        setInputValue,
        result,
        loading,
        error,
        categories,
        units,
        selectedCategory,
        setSelectedCategory,
        convert,
        swapUnits,
        clearConversion,
        fetchCategories,
        fetchUnitsByCategory,
      }}
    >
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversion = () => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error('useConversion must be used within a ConversionProvider');
  }
  return context;
};
