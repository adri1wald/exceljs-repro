# Import error of ExcelJS

Between Next 13.4.9 and Next 13.5.4 something changed in the production build process that causes ExcelJS to fail "import" when the app is run.

# To test

- For each of versions 13.4.9 and 13.5.4
    - Run `npm run dev` and observe all three examples
    - Run `npm run build && npm run start` and observe all three examples

# Observations


|        | Development | Production |
| ------ | ----------- | ---------- |
| 13.4.9 | Succeeds    | Succeeds   |
| 13.5.4 | Succeeds    | Fails      |