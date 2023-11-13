// ParseFile.js
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import FileContext from './FileContext';

export default function ParseFile() {
  const { fileUri, fileType } = useContext(FileContext);

  // Add your parsing logic here using the fileUri
  useEffect(() => {
    if (fileUri && fileType) {
      // Example: Log the fileUri when it changes
      console.log('FileUri changed:', fileUri);
      console.log('FileType:', fileType);

      // Add your parsing logic here using the fileUri
      // You can fetch and parse the contents of the file as needed
    }
  }, [fileUri, fileType]);

  return (
    <View>
      <Text>ParseFile Component {fileType} & {fileUri}</Text>
      {/* Add your parsed content rendering here */}
    </View>
  );
}
