import React from 'react';
import { ScrollView } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

export default function Sobre() {
  const { isDarkMode } = useTheme();

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: isDarkMode ? '#121212' : '#fff' }}>
      <Title>Sobre o App</Title>
      <Paragraph style={{ marginTop: 8 }}>
        Este aplicativo foi desenvolvido em React Native + Expo para apresentar meu currículo e portfólio. 
        Inclui navegação via Expo Router e tema claro/escuro (Dark Mode) como funcionalidade extra.
      </Paragraph>

      <Title style={{ marginTop: 12 }}>Tecnologias Utilizadas</Title>
      <Paragraph>
        • React Native{'\n'}
        • Expo{'\n'}
        • Expo Router{'\n'}
        • React Native Paper{'\n'}
        • Context API (para Dark Mode)
      </Paragraph>
    </ScrollView>
  );
}
