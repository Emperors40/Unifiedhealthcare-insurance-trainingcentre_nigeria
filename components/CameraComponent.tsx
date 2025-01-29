import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';  // Ensure axios is installed

const CameraComponent = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  const takePicture = async (camera) => {
    try {
      const options = { base64: true, quality: 1, pauseAfterCapture: true };
      const data = await camera.takePictureAsync(options);
      const result = await axios.post('/api/analyze-image', { image: data.base64 });
      setAnalysisResult(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <Text>Loading</Text>;
          return (
            <Button onPress={() => takePicture(camera)} title="Capture" />
          );
        }}
      </RNCamera>
      {analysisResult && <Text>Analysis Result: {JSON.stringify(analysisResult)}</Text>}
    </View>
  );
};

export default CameraComponent;
