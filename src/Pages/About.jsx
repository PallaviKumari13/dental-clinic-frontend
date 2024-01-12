import React, { useState } from 'react';

const Calculator = () => {
  const backgroundStyle = {
    backgroundImage: 'url("../src/assets/bgggg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-300 rounded-md shadow-md" style={{ backgroundImage: 'url("../src/assets/")' }}>
      <h2 className="text-2xl font-semibold mb-4">Calculator</h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          className="w-full p-2 border rounded-md"
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((button) => (
          <button
            key={button}
            className={`p-2 ${button === 'C' ? 'bg-purple-500' : 'purple-600'} rounded-md hover:bg-purple-800`}
            onClick={() => {
              if (button === '=') {
                handleCalculate();
              } else if (button === 'C') {
                handleClear();
              } else {
                handleButtonClick(button);
              }
            }}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <strong>Result: {result}</strong>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
