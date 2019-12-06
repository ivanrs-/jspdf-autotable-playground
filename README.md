# jspdf-autotable-playground
From HTML document generate a PDF usign jsPDF and autotable plugin.

This is a playground test, using certain business rules for the document generation.

    - Uses semanticui, fakejs, jspdf, jspdfautotable

## Business rules:  
    - Chained order of activities/subactivities: Store Visit -> Opportunities -> Tactics -> Best Practices
    - A **Store** visit may have 1:N number of *Opportunities*
    - An **Opportunity** may have 1:N *Tactics*
    - A **Tactic** may have 1:N *Best *Practice*
    - Every Opportunity may contain a **Note**
  
  
    Additionally a Store visit may have 1:N **Period and Quartely Activities** with Notes
    A **General Notes** section will be placed at the end
  
  
  >All content is automatically generated using fakerjs. Min and Max number of values to display should be adjusted in pdf_play_table.js file

  ![header image](https://github.com/ivanrs-/jspdf-autotable-playground/blob/master/preview1.png?raw=true)

  ![header image](https://github.com/ivanrs-/jspdf-autotable-playground/blob/master/preview2.png?raw=true)
