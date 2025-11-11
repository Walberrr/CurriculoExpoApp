import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

export default function ExperienciaProfissional() {
  const { isDarkMode } = useTheme();

  return (
    <ScrollView style={{ flex: 1, padding: 12, backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }}>
      <Title style={{ marginBottom: 8 }}>Experiência Profissional</Title>

      <Card style={{ marginBottom: 12 }}>
        <Card.Content>
          <Title>Estagiário – CETEC / Secretaria de Educação do Recife</Title>
          <Paragraph>Prefeitura do Recife — Ago 2025 – Dez 2025</Paragraph>
          <Paragraph>
            • Apoio técnico e administrativo no setor Tecnologia em Rede.{'\n'}
            • Atualização de planilhas e acompanhamento das Unidades Tecnológicas (UTECs).{'\n'}
            • Participação em oficinas de Robótica Educacional com kits LEGO EV3, arduíno, montagem de robôs, suporte em eventos e oficinas, e auxílio às equipes nas
demandas diárias do laboratório
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 12 }}>
        <Card.Content>
          <Title>Atendente de Suporte Técnico</Title>
          <Paragraph>SPEEDMAIS (Operação Caixa Econômica Federal) — Fev 2025 – Jul 2025</Paragraph>
          <Paragraph>
            • Suporte aos aplicativos FGTS e Caixa Tem.{'\n'}
            • Registro e encaminhamento de problemas técnicos.{'\n'}
            • Atendimento receptivo e orientações aos usuários.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
