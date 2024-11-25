import React, { useState, useEffect } from 'react';

const TypewriterSearch = () => {
  const fixedText = 'Search for ';
  const placeholderText = ['Destination', 'State', 'City'];
  
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [placeholder, setPlaceholder] = useState(`${fixedText}${placeholderText[0]}`);

  useEffect(() => {
    const currentWord = placeholderText[wordIndex];

    const updatePlaceholder = () => {
      if (isAdding) {
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setIsAdding(false); // Start removing text
        }
      } else {
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsAdding(true); // Switch to next word
          setWordIndex((prev) => (prev + 1) % placeholderText.length);
        }
      }

      const updatedText = `${fixedText}${currentWord.substring(0, charIndex)}`;
      setPlaceholder(updatedText);
    };

    const delay = isAdding ? 100 : 50; // Speed for typing/removing
    const pause = isAdding && charIndex === currentWord.length ? 1000 : 0; // Pause at full word
    const timer = setTimeout(updatePlaceholder, delay + pause);

    return () => clearTimeout(timer);
  }, [charIndex, isAdding, placeholderText, wordIndex]);

  return (
    <div className="searchInputWrapper">
      <input
        className="searchInput"
        type="text"
        placeholder={placeholder}
        readOnly // Placeholder is dynamic, so user input is not needed
      />
      <i className="searchInputIcon fa fa-search"></i>
    </div>
  );
};

export default TypewriterSearch;
