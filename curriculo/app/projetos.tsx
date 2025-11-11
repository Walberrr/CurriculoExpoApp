import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Card, Title, Paragraph, Chip, Button } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
}

export default function Projetos() {
  const { isDarkMode } = useTheme();

  const projetos: Projeto[] = [
    {
      nome: 'TEAXIS',
      descricao: 'Plataforma para conectar pessoas neurodivergentes a profissionais especializados.',
      tecnologias: ['React', 'Spring Boot', 'PostgreSQL'],
      link: 'https://github.com/seuusuario/teaxis',
    },
    {
      nome: 'App Currículo',
      descricao: 'Aplicativo mobile desenvolvido em React Native + Expo para apresentar meu currículo.',
      tecnologias: ['React Native', 'Expo', 'React Native Paper'],
      link: 'https://github.com/seuusuario/meu-portfolio',
    },
  ];

  const openLink = (url: string) => Linking.openURL(url).catch(() => {});

  return (
    <ScrollView style={{ flex: 1, padding: 12, backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }}>
      <Title style={{ marginBottom: 8 }}>Projetos</Title>
      {projetos.map((p, idx) => (
        <Card key={idx} style={{ marginBottom: 12 }}>
          <Card.Content>
            <Title>{p.nome}</Title>
            <Paragraph>{p.descricao}</Paragraph>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
              {p.tecnologias.map((t, i) => (
                <Chip key={i} style={{ marginRight: 6 }}>{t}</Chip>
              ))}
            </ScrollView>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => openLink(p.link)}>Ver no GitHub</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}
