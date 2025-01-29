import React, { useState } from 'react';

const ImageAnalyzer = () => {
  const [analysisResult, setAnalysisResult] = useState('');

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: reader.result }),
      });

      const data = await response.json();
      setAnalysisResult(data);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {analysisResult && <div>{JSON.stringify(analysisResult)}</div>}
    </div>
  );
};

export default ImageAnalyzer;
