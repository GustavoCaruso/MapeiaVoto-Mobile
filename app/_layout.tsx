import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // O Stack agora vai automaticamente identificar as telas no diretório /app
    <Stack>
      {/* Não há necessidade de declarar explicitamente cada tela */}
    </Stack>
  );
}
