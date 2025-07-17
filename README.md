# CypressAwesome

## Como gerar relatório HTML via Mochawesome no GitHub Actions

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute os testes com Mochawesome:
   ```sh
   npm run test:report
   ```
3. Gere o relatório HTML final:
   ```sh
   npm run generate-html
   ```

## Workflow GitHub Actions
O arquivo `.github/workflows/ci-cypress.yml` já está configurado para:
- Rodar testes com Mochawesome
- Gerar e fazer upload do relatório HTML

## Scripts disponíveis
- `npm run test:report`: Executa Cypress com Mochawesome, gerando `.json` e `.html` em `cypress/reports`
- `npm run generate-html`: Gera o relatório HTML final a partir dos `.json`

## Dependências
- `cypress`
- `mochawesome`
- `mochawesome-merge`
- `mochawesome-report-generator`

O relatório HTML estará disponível em `cypress/reports/html` após a execução.
