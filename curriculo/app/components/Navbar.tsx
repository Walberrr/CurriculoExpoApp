import React from 'react';
import { Appbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Appbar.Header elevated>
      <Appbar.Content title="Walbert — Portfólio" />
      <Appbar.Action icon="home" onPress={() => router.push('/')} />
      <Appbar.Action icon="information" onPress={() => router.push('/sobre')} />
      <Appbar.Action icon="school" onPress={() => router.push('/experienciaAcademica')} />
      <Appbar.Action icon="briefcase" onPress={() => router.push('/experienciaProfissional')} />
      <Appbar.Action icon="folder" onPress={() => router.push('/projetos')} />
      <Appbar.Action
        icon={isDarkMode ? 'weather-sunny' : 'weather-night'}
        onPress={toggleTheme}
        accessibilityLabel="Alternar tema"
      />
    </Appbar.Header>
  );
}
