import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, Chip } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

export default function ExperienciaAcademica() {
  const { isDarkMode } = useTheme();

  return (
    <ScrollView style={{ flex: 1, padding: 12, backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }}>
      <Title style={{ marginBottom: 8 }}>Formação</Title>
      <Card style={{ marginBottom: 12 }}>
        <Card.Content>
          <Title>Tecnólogo em Sistemas para Internet</Title>
          <Paragraph>Universidade Católica de Pernambuco — 5º período (ago/2023 — em andamento)</Paragraph>
        </Card.Content>
      </Card>

      <Title style={{ marginBottom: 8 }}>Certificações</Title>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <Paragraph>Computação em Nuvem - Instituto Aliança (Jul 2023)</Paragraph>
          <Paragraph>Assistente de Controle de Qualidade - SENAI (Jan 2022)</Paragraph>
          <Paragraph>Design Orientado por Dados - Cesar School (Ago 2025)</Paragraph>
        </Card.Content>
      </Card>

      <Title style={{ marginBottom: 8 }}>Informações Adicionais</Title>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <Paragraph>Experiência voluntária:</Paragraph>
          <Paragraph>Festival Rec N Play (Edições de 2023 e 2024), Recife, PE</Paragraph>
          <Paragraph>Voluntário responsável pela organização do local do evento, gerenciamento de filas,recepção e orientação dos participantes, fornecimento de informações essenciais,
realização de leitura dos códigos QR para liberar a entrada do público às palestras
e workshops, entre outras atividades.</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
