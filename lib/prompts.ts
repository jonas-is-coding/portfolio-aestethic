// utils/prompts.ts
export const basePrompt = `
Erstelle bitte einen detaillierten und nützlichen Inhalt für LinkedIn in der Kategorie "{chosen_category}". 
Der Inhalt soll im folgenden Format bereitgestellt werden und nur einen einzelnen Post enthalten. 
Der Inhalt soll präzise und direkt umsetzbar sein. Der Inhalt soll in die folgende Vorlage eingefügt werden:

{category_format}
`;

export const categoryFormats: Record<string, string> = {
  "Figma_Tip": `
1. **Figma_Tip**: 
   - **Text**: Der Haupttext des Tipps für Figma.
   - **Part**: Part {figma_part}
`,
  "VSCode_Tip": `
2. **VSCode_Tip**:
   - **Text**: Der Haupttext des Tipps für VSCode.
   - **Part**: Part {vscode_part}
`,
  "Trend_Tip": `
3. **Trend_Tip**:
   - **Title**: Der Titel des Trends.
   - **Category**: Die Kategorie des Trends.
`,
  "Other_Tip": `
4. **Other_Tip**:
   - **Title**: Der Titel des Tipps.
   - **Content**: Der Hauptinhalt des Tipps.
`,
  "Content_Tip": `
5. **Content_Tip**:
   - **Title**: Der Titel des Tipps.
   - **Content**: Der Hauptinhalt des Tipps.
`
};