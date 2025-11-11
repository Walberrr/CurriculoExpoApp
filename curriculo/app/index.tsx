import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Title, Paragraph, Card, Button, Avatar } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

const PROFILE = require('../assets/profile.jpg');

export default function Home() {
  const { isDarkMode } = useTheme();

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <ScrollView style={{ flex: 1, padding: 12, backgroundColor: isDarkMode ? '#121212' : '#f6f6f6' }}>
      <Card style={{ marginBottom: 12 }}>
        <Card.Content style={{ alignItems: 'center', paddingVertical: 20 }}>
          <Avatar.Image size={120} source={PROFILE} />
          <Title style={{ marginTop: 12 }}>Walbert Pereira de Lima</Title>
          <Paragraph style={{ marginTop: 6, textAlign: 'center' }}>
            Estudante de Sistemas para Internet — UX/UI, análise de dados e tecnologia.
          </Paragraph>
        </Card.Content>
        <Card.Actions style={{ justifyContent: 'center', paddingBottom: 16 }}>
          <Button mode="contained" onPress={() => openLink('mailto:walbepereira@gmail.com')}>E-mail</Button>
          <Button style={{ marginLeft: 8 }} mode="outlined" onPress={() => openLink('https://www.linkedin.com/in/walbert-pereira-359714181')}>LinkedIn</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}
